/* ============================================================
   Nova University — Course player
   Renders one module (SCO) from window.COURSE and handles the
   knowledge check + SCORM 1.2 tracking.
   Each module HTML sets   window.MODULE_INDEX = N   before load.
   ============================================================ */
(function () {
  "use strict";

  var C = window.COURSE;
  var idx = window.MODULE_INDEX || 0;
  var M = C.modules[idx];
  var PASS = C.passPct;
  var scoId = C.id + "-M" + M.n;

  /* ---------- SCORM setup ---------- */
  var startedAt = Date.now();
  var quizDone = false;
  SCORM.setSCO(scoId);
  SCORM.init();

  function setStatusIfNew() {
    var s = SCORM.get("cmi.core.lesson_status");
    if (!s || s === "not attempted" || s === "unknown" || s === "") {
      SCORM.set("cmi.core.lesson_status", "incomplete");
    }
    SCORM.set("cmi.core.score.min", "0");
    SCORM.set("cmi.core.score.max", "100");
    SCORM.commit();
  }

  function cmiTime(ms) {
    var t = Math.floor(ms / 1000);
    var h = Math.floor(t / 3600);
    var m = Math.floor((t % 3600) / 60);
    var s = t % 60;
    function p(n) { return (n < 10 ? "0" : "") + n; }
    return p(h) + ":" + p(m) + ":" + p(s);
  }

  function commitSession() {
    SCORM.set("cmi.core.session_time", cmiTime(Date.now() - startedAt));
    SCORM.commit();
  }

  /* ---------- escaping ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- block renderers ---------- */
  function renderBlock(b) {
    switch (b.type) {
      case "prose":
        return '<p class="prose">' + b.html + '</p>';
      case "banner":
        return '<div class="banner"><p>' + esc(b.text) + '</p></div>';
      case "heading":
        return '<div class="shead"><div class="kick">' + esc(b.kicker) +
               '</div><h2>' + esc(b.title) + '</h2></div>';
      case "list":
        return '<ul class="clist">' + b.items.map(function (i) {
          return '<li>' + esc(i) + '</li>';
        }).join("") + '</ul>';
      case "standard":
        return '<div class="standard"><div class="tag">Nova Standard</div>' +
               '<h3>' + esc(b.title) + '</h3><ul>' +
               b.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") +
               '</ul></div>';
      case "table":
        return '<div class="tbl-wrap"><table class="ctable"><thead><tr>' +
               b.head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join("") +
               '</tr></thead><tbody>' +
               b.rows.map(function (r) {
                 return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join("") + '</tr>';
               }).join("") + '</tbody></table></div>';
      case "practice":
        return '<div class="practice">' + b.items.map(function (i) {
          return '<div class="pitem"><div class="arrow">→</div><h4>' +
                 esc(i.title) + '</h4><p>' + esc(i.text) + '</p></div>';
        }).join("") + '</div>';
      case "steps":
        return '<div class="steps">' + b.items.map(function (i) {
          return '<div class="step"><h4>' + esc(i.title) + '</h4><p>' + esc(i.text) + '</p></div>';
        }).join("") + '</div>';
      case "compare":
        return '<div class="compare"><div class="compare-head"><div class="yes">This is Nova</div>' +
               '<div class="no">This is not Nova</div></div>' +
               b.rows.map(function (r) {
                 return '<div class="crow"><div class="yes">' + esc(r.nova) +
                        '</div><div class="no">' + esc(r.not) + '</div></div>';
               }).join("") + '</div>';
      case "scenario":
        return '<div class="scenario"><div class="tag">Scenario</div>' +
               '<p class="stext">' + esc(b.text) + '</p>' +
               '<div class="reflect"><b>Reflection</b>' + esc(b.reflection) + '</div></div>';
      default:
        return "";
    }
  }

  /* ---------- build page ---------- */
  function build() {
    document.title = "Module " + M.n + " · " + M.title + " — Nova University";

    var crumbHtml =
      '<div class="topbar"><div class="topbar-inner">' +
        '<img class="logo" src="shared/nova-logo.png" alt="Nova University">' +
        '<div class="crumb">' + esc(C.course) + ' &nbsp;·&nbsp; <b>' + esc(C.title) + '</b></div>' +
        '<div class="modtag"><span id="statuspill" class="statuspill">In progress</span>' +
          '<span class="dot"></span>Module ' + M.n + ' of ' + C.modules.length + '</div>' +
      '</div><div class="progress-track"><div class="progress-fill" id="pfill"></div></div></div>';

    var objHtml =
      '<div class="objectives"><div class="lbl">Learning Objectives</div><ol>' +
      M.objectives.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join("") +
      '</ol></div>';

    var heroHtml =
      '<header class="hero"><div class="eyebrow">Module ' + M.n +
        '<span class="num">' + C.course + '</span></div>' +
        '<div class="modnum">' + (M.n < 10 ? "0" + M.n : M.n) + '</div>' +
        '<h1>' + esc(M.title) + '</h1>' +
        '<p class="sub">' + esc(M.subtitle) + '</p></header>';

    var bodyHtml = M.blocks.map(renderBlock).join("");

    var quizHtml = buildQuiz();

    var footHtml =
      '<div class="footer"><span>' + esc(C.title) + ' · Module ' + M.n + '</span>' +
      '<span>Nova University — Training Course Library</span></div>';

    document.body.innerHTML =
      crumbHtml +
      '<main class="wrap">' + heroHtml + objHtml + bodyHtml + quizHtml + footHtml + '</main>';
  }

  function buildQuiz() {
    var q =
      '<section class="quiz" id="quiz"><div class="quiz-head">' +
      '<div class="tag">Knowledge Check</div>' +
      '<h2>Check your understanding</h2>' +
      '<p>Answer all ' + M.quiz.length + ' questions. You need ' +
        Math.ceil(M.quiz.length * PASS / 100) + ' of ' + M.quiz.length +
        ' correct (' + PASS + '%) to complete this module.</p>' +
      '<div class="quiz-meta">Immediate feedback is shown after each answer.</div></div>';

    q += M.quiz.map(function (item, qi) {
      var opts = item.options.map(function (opt, oi) {
        return '<div class="opt" data-q="' + qi + '" data-o="' + oi + '">' +
               '<span class="mark"></span><span class="otext">' + esc(opt) + '</span></div>';
      }).join("");
      return '<div class="qcard" data-qcard="' + qi + '">' +
             '<div class="qnum">Question ' + (qi + 1) + ' of ' + M.quiz.length + '</div>' +
             '<p class="qtext">' + esc(item.q) + '</p>' +
             '<div class="opts">' + opts + '</div>' +
             '<div class="explain" id="exp-' + qi + '"></div></div>';
    }).join("");

    q += '<div class="result" id="result"></div>';
    q += '<div class="quiz-actions">' +
         '<button class="btn" id="finishBtn" disabled>Submit knowledge check</button>' +
         '<button class="btn ghost" id="retryBtn" style="display:none">Retake quiz</button>' +
         '</div></section>';
    return q;
  }

  /* ---------- quiz logic ---------- */
  var answers = {};       // qi -> oi chosen
  var answered = {};      // qi -> true once locked

  function wireQuiz() {
    var opts = document.querySelectorAll(".opt");
    opts.forEach(function (el) {
      el.addEventListener("click", function () {
        var qi = +el.getAttribute("data-q");
        var oi = +el.getAttribute("data-o");
        if (answered[qi] || quizDone) return;
        chooseAnswer(qi, oi);
      });
    });
    document.getElementById("finishBtn").addEventListener("click", submitQuiz);
    document.getElementById("retryBtn").addEventListener("click", resetQuiz);
  }

  function chooseAnswer(qi, oi) {
    answers[qi] = oi;
    answered[qi] = true;
    var item = M.quiz[qi];
    var correct = item.answer;
    var card = document.querySelector('[data-qcard="' + qi + '"]');
    var optEls = card.querySelectorAll(".opt");
    optEls.forEach(function (o) {
      var thisO = +o.getAttribute("data-o");
      o.classList.add("locked");
      o.querySelector(".mark").textContent = "";
      if (thisO === correct) { o.classList.add("correct"); o.querySelector(".mark").textContent = "✓"; }
      else if (thisO === oi) { o.classList.add("wrong"); o.querySelector(".mark").textContent = "✕"; }
      else { o.classList.add("dim"); }
    });
    var exp = document.getElementById("exp-" + qi);
    var ok = oi === correct;
    exp.className = "explain show " + (ok ? "ok" : "no");
    exp.innerHTML = "<b>" + (ok ? "Correct. " : "Not quite. ") + "</b>" + esc(item.explain);
    maybeEnableFinish();
  }

  function maybeEnableFinish() {
    var all = M.quiz.every(function (_, i) { return answered[i]; });
    document.getElementById("finishBtn").disabled = !all;
  }

  function score() {
    var correct = 0;
    M.quiz.forEach(function (item, i) { if (answers[i] === item.answer) correct++; });
    return { correct: correct, total: M.quiz.length, pct: Math.round(correct / M.quiz.length * 100) };
  }

  function submitQuiz() {
    var s = score();
    var passed = s.pct >= PASS;
    quizDone = true;

    // lock all
    document.querySelectorAll(".opt").forEach(function (o) { o.classList.add("locked"); });
    document.getElementById("finishBtn").style.display = "none";

    // SCORM reporting
    SCORM.set("cmi.core.score.raw", String(s.pct));
    SCORM.set("cmi.core.score.min", "0");
    SCORM.set("cmi.core.score.max", "100");
    SCORM.set("cmi.core.lesson_status", passed ? "passed" : "failed");
    SCORM.set("cmi.suspend_data", JSON.stringify({ passed: passed, pct: s.pct, answers: answers }));
    commitSession();

    showResult(s, passed);
    updatePill(passed ? "passed" : "failed");
  }

  function showResult(s, passed) {
    var r = document.getElementById("result");
    r.className = "result show " + (passed ? "pass" : "fail");
    if (passed) {
      r.innerHTML =
        '<div class="ck">✓</div>' +
        '<div class="rlbl">Module Complete</div>' +
        '<div class="score">' + s.pct + '%</div>' +
        '<p>You scored ' + s.correct + ' of ' + s.total +
        '. This module has been marked complete in your record. Return to the course menu in your LMS to continue.</p>';
      document.getElementById("retryBtn").style.display = "none";
    } else {
      r.innerHTML =
        '<div class="rlbl">Not passed yet</div>' +
        '<div class="score">' + s.pct + '%</div>' +
        '<p>You scored ' + s.correct + ' of ' + s.total + '. You need ' + PASS +
        '% to complete this module. Review the material above and try again.</p>';
      document.getElementById("retryBtn").style.display = "inline-block";
    }
    r.scrollIntoView ? null : null; // (avoid scrollIntoView per guidance)
  }

  function resetQuiz() {
    answers = {}; answered = {}; quizDone = false;
    document.getElementById("result").className = "result";
    document.getElementById("retryBtn").style.display = "none";
    document.getElementById("finishBtn").style.display = "inline-block";
    document.getElementById("finishBtn").disabled = true;
    document.querySelectorAll(".qcard").forEach(function (card) {
      card.querySelectorAll(".opt").forEach(function (o) {
        o.className = "opt";
        o.querySelector(".mark").textContent = "";
      });
      var qi = card.querySelector(".opt").getAttribute("data-q");
      var exp = document.getElementById("exp-" + qi);
      if (exp) exp.className = "explain";
    });
    SCORM.set("cmi.core.lesson_status", "incomplete");
    SCORM.commit();
    updatePill("incomplete");
    var top = document.getElementById("quiz");
    if (top) window.scrollTo({ top: top.offsetTop - 80, behavior: "smooth" });
  }

  /* ---------- restore prior state ---------- */
  function restore() {
    var raw = SCORM.get("cmi.suspend_data");
    if (!raw) return false;
    try {
      var data = JSON.parse(raw);
      if (data && data.answers && Object.keys(data.answers).length === M.quiz.length) {
        Object.keys(data.answers).forEach(function (qi) {
          chooseAnswer(+qi, data.answers[qi]);
        });
        submitQuiz();
        return true;
      }
    } catch (e) {}
    return false;
  }

  /* ---------- topbar status + scroll progress ---------- */
  function updatePill(status) {
    var pill = document.getElementById("statuspill");
    if (!pill) return;
    if (status === "passed") { pill.textContent = "Completed"; pill.className = "statuspill done"; }
    else if (status === "failed") { pill.textContent = "Try again"; pill.className = "statuspill"; }
    else { pill.textContent = "In progress"; pill.className = "statuspill"; }
  }

  function wireScroll() {
    var fill = document.getElementById("pfill");
    function onScroll() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      fill.style.width = Math.min(100, Math.max(0, pct)) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- lifecycle ---------- */
  function end() {
    if (SCORM.connected) { commitSession(); SCORM.finish(); }
  }
  window.addEventListener("pagehide", end);
  window.addEventListener("beforeunload", function () {
    if (SCORM.connected) commitSession();
  });

  /* ---------- go ---------- */
  build();
  setStatusIfNew();
  wireQuiz();
  wireScroll();
  var prior = SCORM.get("cmi.core.lesson_status");
  if (prior === "passed" || prior === "failed") {
    if (!restore()) { updatePill(prior); }
  }
})();
