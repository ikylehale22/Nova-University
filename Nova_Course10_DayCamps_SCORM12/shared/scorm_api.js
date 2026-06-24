/* ============================================================
   SCORM 1.2 Runtime API wrapper  (ADL SCORM 1.2 / RTE)
   - Discovers the LMS-provided API object across the frame chain
   - Exposes a small, safe interface used by player.js
   - Degrades gracefully to localStorage when no LMS is present
     (so the course still works when previewed standalone)
   ============================================================ */
(function (global) {
  "use strict";

  var FIND_LIMIT = 500;

  function findAPIInWindow(win) {
    var tries = 0;
    while (win && (win.API == null) && win.parent && win.parent !== win) {
      tries++;
      if (tries > FIND_LIMIT) return null;
      win = win.parent;
    }
    return win ? win.API : null;
  }

  function discoverAPI() {
    var api = null;
    try { api = findAPIInWindow(window); } catch (e) {}
    if (!api && window.opener) {
      try { api = findAPIInWindow(window.opener); } catch (e) {}
    }
    if (!api && window.top && window.top.opener) {
      try { api = findAPIInWindow(window.top.opener); } catch (e) {}
    }
    return api;
  }

  function SCORM() {
    this.api = null;
    this.connected = false;
    this.standalone = false;
    this.storeKey = "nova_scorm_fallback";
    this._local = {};
  }

  SCORM.prototype.init = function () {
    this.api = discoverAPI();
    if (this.api) {
      var ok = String(this.api.LMSInitialize("")) === "true";
      this.connected = ok;
      if (!ok) { this._goStandalone(); }
      return ok;
    }
    this._goStandalone();
    return false;
  };

  SCORM.prototype._goStandalone = function () {
    this.standalone = true;
    this.connected = true; // emulate
    try {
      var raw = global.localStorage.getItem(this.storeKey + "_" + this.scoId);
      this._local = raw ? JSON.parse(raw) : {};
    } catch (e) { this._local = {}; }
  };

  SCORM.prototype.setSCO = function (id) { this.scoId = id; };

  SCORM.prototype.get = function (key) {
    if (!this.connected) return "";
    if (this.standalone) {
      return (this._local[key] != null) ? String(this._local[key]) : "";
    }
    try { return String(this.api.LMSGetValue(key)); } catch (e) { return ""; }
  };

  SCORM.prototype.set = function (key, val) {
    if (!this.connected) return false;
    if (this.standalone) {
      this._local[key] = val;
      this._persist();
      return true;
    }
    try { return String(this.api.LMSSetValue(key, String(val))) === "true"; }
    catch (e) { return false; }
  };

  SCORM.prototype.commit = function () {
    if (!this.connected) return false;
    if (this.standalone) { this._persist(); return true; }
    try { return String(this.api.LMSCommit("")) === "true"; } catch (e) { return false; }
  };

  SCORM.prototype.finish = function () {
    if (!this.connected) return false;
    if (this.standalone) { this._persist(); return true; }
    try {
      var r = String(this.api.LMSFinish("")) === "true";
      this.connected = false;
      return r;
    } catch (e) { return false; }
  };

  SCORM.prototype._persist = function () {
    try {
      global.localStorage.setItem(
        this.storeKey + "_" + this.scoId, JSON.stringify(this._local)
      );
    } catch (e) {}
  };

  // expose a singleton
  global.SCORM = new SCORM();
})(window);
