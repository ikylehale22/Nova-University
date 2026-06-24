/* Nova University — Course 10: Nova Events: Day Camps
   Course content data. Each module is one SCORM SCO. */
window.COURSE = {
  id: "NOVA-C10-DAYCAMPS",
  course: "Course 10",
  title: "Nova Events: Day Camps",
  subtitle: "Running a Great Camp Day from Start to Finish",
  audience: "Floor Team: Events",
  prerequisites: "Course 4: Safety & Risk Management  ·  Course 8: Nova Events",
  location: "Cedar Hill, TX",
  passPct: 67, // 2 of 3 knowledge-check questions
  modules: [
    /* ===================== MODULE 1 ===================== */
    {
      n: 1,
      title: "The Nova Day Camp Experience",
      subtitle: "What camps are, who they serve, and why they matter",
      objectives: [
        "Describe the Nova Day Camp product: session types, age range, and weekly themes",
        "Explain who creates the daily rotation and activities and what that means for your role",
        "Articulate why camp days are a direct extension of the Nova guest experience"
      ],
      blocks: [
        { type: "prose", html: "Day camps are one of the most visible things Nova does. Families who have never taken a class with us sign their children up for camp. Competitive gymnastics families send their athletes for a fun week. Neighbors hear about it and call the front desk. For many of the athletes in your group, camp may be their first time inside a gymnastics facility." },
        { type: "prose", html: "That means the experience you create during a camp day is not just about keeping kids busy. It is a direct representation of who Nova is." },
        { type: "banner", text: "Camp is Nova's brand in motion" },
        { type: "prose", html: "Understanding what the camp product actually is, how it is structured, and where your role fits is the foundation for everything else in this course." },
        { type: "heading", kicker: "The Product", title: "The Nova Day Camp at a glance" },
        { type: "list", items: [
          "Open to all children ages 5 to 13, members and non-members alike",
          "Offered during Spring Break, Thanksgiving Week, the week before Christmas, and two weeks each summer",
          "Each session includes gymnastics instruction, games, crafts, open gym activities, and a scheduled snack",
          "Camp themes change each session and are selected by ownership with input from the Special Events Director"
        ]},
        { type: "prose", html: "Sessions run Monday through Friday. Families may enroll for the full week, a single day, or a half-day option." },
        { type: "table", head: ["Session", "Hours", "Lunch required?"], rows: [
          ["All Day", "8:00 AM – 5:00 PM", "Yes"],
          ["Morning Session", "8:00 AM – 12:30 PM", "Yes"],
          ["Afternoon Session", "12:30 PM – 5:00 PM", "No"]
        ]},
        { type: "prose", html: "Campers enrolled in the All Day or Morning Session must bring a ready-to-eat sack lunch. Lunches must require no heating and must be easy for the camper to access independently. <strong>No food delivery services are permitted for campers.</strong>" },
        { type: "heading", kicker: "Your Role", title: "Who designs the camp day" },
        { type: "prose", html: "The Special Events Director creates the daily rotation schedule and all camp activities before each session begins. Themes are set by ownership. Your job as a camp Team Member is not to design the experience. <strong>It is to execute it at the highest level.</strong>" },
        { type: "prose", html: "That distinction matters. When every Team Member runs the same activities with the same energy and the same standard, the experience is consistent for every camper in every group. When individual Team Members improvise or skip activities they find inconvenient, the experience breaks down." },
        { type: "standard", title: "The camp day belongs to every camper", items: [
          "Every athlete in your group deserves a complete, full-effort camp day regardless of age, energy level, or behavior",
          "The rotation was designed for a reason. Your job is to bring it to life, not to edit it",
          "Seasonal camps are often the first Nova experience a family has. First impressions last."
        ]},
        { type: "scenario", text: "A parent drops off her 6-year-old on the first morning of camp. It is his first time in a gymnastics facility. He is nervous and does not want to leave his mom.", reflection: "What does a great first five minutes look like for this camper? What is your role in making him feel safe and excited to be here?" }
      ],
      quiz: [
        { q: "Who is responsible for creating the daily rotation schedule and activities for Nova Day Camps?", options: [
          "The camp Team Member assigned to each group",
          "The Special Events Director, before each session begins",
          "The front desk team on the morning of each camp day",
          "Ownership, at the start of each summer"
        ], answer: 1, explain: "The Special Events Director designs the full rotation and activities before each session. Ownership sets the themes. Your role is to execute the plan, not design it." },
        { q: "Which campers are required to bring a ready-to-eat sack lunch?", options: [
          "All campers, regardless of session",
          "Only campers who are enrolled for the full week",
          "Campers enrolled in the All Day or Morning Session",
          "Campers ages 5 to 8 only"
        ], answer: 2, explain: "All Day and Morning Session campers must bring a ready-to-eat lunch (no heating, no delivery). Afternoon-only campers do not need lunch." },
        { q: "A parent asks you at drop-off to change the afternoon activity schedule because her child does not like crafts. You should:", options: [
          "Agree to skip the craft activity for her child since they are in your group",
          "Tell her you will see what you can do and then decide during the day",
          "Let her know the rotation is set by the Special Events Director and all campers follow the same schedule",
          "Refer her to another Team Member who has more experience with camp"
        ], answer: 2, explain: "The rotation is fixed and applies to every camper. Politely explain that the schedule is set by the Special Events Director — don't edit or improvise it." }
      ]
    },

    /* ===================== MODULE 2 ===================== */
    {
      n: 2,
      title: "Your Group, Your Responsibility",
      subtitle: "Group ownership, role sheets, and the field-of-vision standard",
      objectives: [
        "Explain how campers are divided into groups and how role sheets are prepared",
        "State the supervision ratio and describe what it requires of you in practice",
        "Apply the field-of-vision standard throughout the entire camp day"
      ],
      blocks: [
        { type: "prose", html: "When you are assigned to a camp group, those athletes are your responsibility. Not the responsibility of the Team Member across the gym. Not a shared responsibility that floats between whoever happens to be nearby. <strong>Yours.</strong>" },
        { type: "prose", html: "That ownership is what makes camps safe and what makes them great. The moment a Team Member starts treating supervision as a collective task, gaps appear. Campers leave their group. Behaviors go unaddressed. Situations escalate that didn't have to." },
        { type: "banner", text: "Your group is your responsibility from arrival to departure" },
        { type: "heading", kicker: "Setup", title: "How groups are formed" },
        { type: "list", items: [
          "The front desk prepares group role sheets before each camp day begins",
          "Campers are divided into even groups by age",
          "Walk-ins and late registrations are manually added to the role sheet by the front desk team",
          "You receive your role sheet before your group arrives — review it before the day starts",
          "Your role sheet tells you who is in your group. Know those names."
        ]},
        { type: "prose", html: "The supervision ratio at Nova Day Camps is <strong>18 campers per Team Member</strong>. That ratio is a maximum, not a target. Whether you have 6 campers or 18, the standard for supervision does not change." },
        { type: "heading", kicker: "The Standard", title: "The field-of-vision standard" },
        { type: "prose", html: "Every camper in your group must be within your field of vision at all times. This is not a guideline. It is a non-negotiable standard. In practice, this means:" },
        { type: "practice", items: [
          { title: "Stay on your feet", text: "You do not sit down while supervising your group. Standing keeps you mobile and aware." },
          { title: "Position yourself deliberately", text: "Before any activity, think about where you need to stand to see all of your campers at once." },
          { title: "Track your count", text: "Know how many campers are in your group at all times. If the number does not match, find out why immediately." },
          { title: "Bathroom protocol", text: "Campers may use the restroom one at a time. They go alone. You remain with your group and monitor the time." }
        ]},
        { type: "standard", title: "Supervision is not passive", items: [
          "Active supervision means you are watching, moving, and engaged — not standing still waiting for something to happen",
          "If a camper is out of your sight, even briefly, that is a supervision gap",
          "Do not rely on other Team Members to cover your group. You own it."
        ]},
        { type: "heading", kicker: "Policy", title: "Personal items & water bottles" },
        { type: "list", items: [
          "Campers are not permitted to bring personal items into the gym for any reason",
          "Water bottles are permitted on the floor only if they have a lid that seals completely",
          "No open-top cups, sports bottles without lids, or food items on the gym floor",
          "If a camper arrives with a prohibited item, direct them to store it with their bag before joining the group"
        ]},
        { type: "compare", rows: [
          { nova: "I know I have 14 campers. After the bathroom break I count again before we move to the next station.", not: "I sent one kid to the bathroom and kept going. I figured they'd catch up." },
          { nova: "I position myself at the corner of the floor so I can see all 16 campers during open gym.", not: "I stand near the group I'm talking to and check on the others every few minutes." },
          { nova: "A camper brought a tablet to show their friends. I ask them to put it in their bag before we start.", not: "I let the camper keep the tablet since they were just showing friends and it wasn't a big deal." }
        ]},
        { type: "scenario", text: "You are leading your group through a rotation and you count only 11 campers. You had 12 at the last station. No one in the group knows where the missing camper went.", reflection: "What do you do right now? Walk through your immediate steps." }
      ],
      quiz: [
        { q: "What is the maximum supervision ratio for Nova Day Camp groups?", options: [
          "10 campers per Team Member",
          "15 campers per Team Member",
          "18 campers per Team Member",
          "20 campers per Team Member"
        ], answer: 2, explain: "The maximum is 18 campers per Team Member — and it's a ceiling, not a target. The supervision standard is the same whether you have 6 campers or 18." },
        { q: "A camper asks to use the restroom during an activity. What is the correct procedure?", options: [
          "Send them with a buddy so they are not alone",
          "Ask them to wait until the activity is finished",
          "Send them one at a time and remain with your group while monitoring the time",
          "Walk them to the restroom yourself and leave the group briefly"
        ], answer: 2, explain: "Campers go one at a time, alone. You stay with your group and monitor the time — never leave your group to escort a single camper." },
        { q: "Who is responsible for adding walk-in campers and late registrations to the group role sheets?", options: [
          "The camp Team Member, at the start of their group's first activity",
          "The Special Events Director, before each session",
          "The front desk team, manually on the prepared role sheets",
          "Any available Team Member who is not currently supervising a group"
        ], answer: 2, explain: "The front desk prepares and updates role sheets, including adding walk-ins and late registrations manually. Always review your sheet before the day begins." }
      ]
    },

    /* ===================== MODULE 3 ===================== */
    {
      n: 3,
      title: "The Camp Day in Motion",
      subtitle: "Rotations, snack and lunch, allergy protocol, and daily procedures",
      objectives: [
        "Follow the daily rotation completely and explain when deviation is permitted",
        "Describe snack and lunch procedures including supervision and timing",
        "Apply Nova's allergy protocol before and during snack distribution"
      ],
      blocks: [
        { type: "prose", html: "The daily rotation is the operational spine of a camp day. It tells you where to be, what to do, and when to do it. When every Team Member follows the rotation with the same commitment, the day runs smoothly and every camper gets the experience Nova promised their family." },
        { type: "prose", html: "When Team Members skip stations, rush through activities, or substitute their own ideas, the experience becomes inconsistent. Some campers get a great day. Others get a version of it. That is not the Nova standard." },
        { type: "banner", text: "Follow the rotation. Complete every activity." },
        { type: "heading", kicker: "Rotations", title: "Rotation standards" },
        { type: "list", items: [
          "Your daily rotation is prepared by the Special Events Director before the session begins",
          "You are expected to complete every assigned station and activity",
          "Do not skip, shorten, or substitute any activity without a specific reason you cannot complete it",
          "If you genuinely cannot complete an assigned station (equipment issue, safety concern), notify your supervisor immediately — do not simply move on",
          "Your pace and energy set the tone. If you are engaged, your group will be engaged."
        ]},
        { type: "heading", kicker: "Meals", title: "Snack & lunch" },
        { type: "prose", html: "Every Nova Day Camp day includes a scheduled snack. Both the Morning Session and the Afternoon Session include snack time. The All Day Session includes both snack time and a lunch break. Meals happen in the party room." },
        { type: "list", items: [
          "You supervise your own group during snack and lunch — this is not a break from supervision, it is part of your shift",
          "You distribute the scheduled Nova snack to your campers at the designated time",
          "Campers may eat their own snacks during snack time as well",
          "All Day and Morning Session campers must bring a ready-to-eat lunch — no heating required, no food delivery services permitted",
          "Your own snack or meal break happens during your group's meal time",
          "Remain present and attentive with your group throughout the entire meal period"
        ]},
        { type: "heading", kicker: "Safety", title: "Allergy protocol" },
        { type: "prose", html: "Allergies are a safety matter. Nova's allergy protocol exists to protect campers and to ensure every Team Member responds the same way. Read this section carefully." },
        { type: "practice", items: [
          { title: "Before you distribute any snack", text: "Check your role sheet for allergy flags before distributing anything. The front desk flags known allergies at registration. If a camper is flagged and the scheduled snack contains or may contain their allergen, that camper does not receive the Nova-provided snack. Do not make substitutions. If they have their own food, they may eat that." },
          { title: "When in doubt, withhold", text: "If you are unsure whether a snack is safe for a flagged camper, withhold it and notify the front desk immediately. Do not guess." },
          { title: "If a camper shows signs of a reaction", text: "Do not leave the camper. Send another camper or call out to get the front desk immediately. The front desk will call 911 if there are any signs of anaphylaxis: hives, swelling, difficulty breathing, or vomiting. Stay with the camper and keep them calm. Do not administer any medication — Nova Team Members are not authorized to give any medication to any camper under any circumstances." },
          { title: "EpiPen awareness", text: "If a parent has disclosed a severe allergy and provided an EpiPen, be aware that it exists and where it is stored. Nova Team Members are currently not trained to administer EpiPens. If a reaction occurs, your job is to get the front desk immediately and stay with the camper. Emergency services will be called." }
        ]},
        { type: "standard", title: "Allergy protocol is not optional", items: [
          "Check the role sheet for allergy flags before every single snack distribution — every day, every session",
          "When in doubt, withhold and notify. That is always the right call.",
          "Never administer medication. Your job is to get help and stay with the camper."
        ]},
        { type: "scenario", text: "You are about to hand out the scheduled afternoon snack — peanut butter crackers. You check your role sheet and notice one camper has a peanut allergy flagged. The camper did not bring their own snack today.", reflection: "Walk through exactly what you do. What do you say to the camper? Who do you contact?" }
      ],
      quiz: [
        { q: "You arrive at an assigned activity station and find the equipment is unavailable due to a setup issue. What should you do?", options: [
          "Skip the station and move your group to the next one on the rotation",
          "Create a substitute activity on your own so the group does not lose time",
          "Notify your supervisor immediately and await instruction rather than moving on independently",
          "Ask another Team Member what they did with their group and copy that"
        ], answer: 2, explain: "If you genuinely can't complete a station, notify your supervisor immediately — don't skip, substitute, or improvise on your own." },
        { q: "Before distributing the scheduled snack, you notice a camper has a nut allergy flagged on their role sheet. Today's snack contains almonds. What do you do?", options: [
          "Give the camper a smaller portion and watch them closely for any reaction",
          "Ask the camper if they think it is okay for them to eat it",
          "Withhold the Nova snack from that camper and notify the front desk",
          "Find a different snack from the kitchen to substitute for that camper"
        ], answer: 2, explain: "A flagged camper does not receive a snack that contains their allergen. Withhold it and notify the front desk — never substitute or guess. The camper may eat their own food if they brought it." },
        { q: "A camper in your group begins showing signs of a reaction during snack time. Your immediate first step is to:", options: [
          "Administer their EpiPen if one is available in their bag",
          "Move the group away and call the parent directly",
          "Stay with the camper and send for the front desk immediately",
          "Finish supervising the group first, then notify the front desk when the group is settled"
        ], answer: 2, explain: "Do not leave the camper. Send someone or call out to get the front desk immediately, stay with the camper, and keep them calm. Nova Team Members do not administer any medication." }
      ]
    },

    /* ===================== MODULE 4 ===================== */
    {
      n: 4,
      title: "Check-In, Check-Out, and Guests",
      subtitle: "How campers arrive and depart, and your role at each touchpoint",
      objectives: [
        "Describe how camp check-in is handled and what the camp Team Member's role is",
        "Explain the checkout process and how to handle a pickup request",
        "Identify appropriate guest interactions during a camp day"
      ],
      blocks: [
        { type: "prose", html: "Camp families are guests. They are trusting Nova with their child for an entire day, sometimes an entire week. Every interaction they have with our team, from the moment they walk in to the moment they pick up their child, shapes how they feel about Nova." },
        { type: "prose", html: "Understanding how check-in and checkout work — and knowing exactly what your role is at each point — keeps the day running smoothly and keeps guests feeling confident." },
        { type: "heading", kicker: "Arrival", title: "Check-in" },
        { type: "prose", html: "Check-in is owned by the front desk. As a camp Team Member, your role at check-in is minimal by design — the front desk has the process, the tools, and the information. Your job is to be ready to receive your group once check-in is complete." },
        { type: "list", items: [
          "Families check in using the iPad kiosk at the front desk",
          "All families create an account and agree to Nova's policies and waivers when they first register — this happens through the website during enrollment",
          "Camp enrollment is completed online through Nova's website or in person at the front desk",
          "Payment is required at the time of enrollment",
          "The front desk prepares the group role sheets using enrollment data before each camp day",
          "Walk-ins and late registrations are handled by the front desk and added manually to the appropriate role sheet"
        ]},
        { type: "banner", text: "Every pickup goes through the front desk" },
        { type: "heading", kicker: "Departure", title: "Checkout" },
        { type: "prose", html: "Checkout is the moment that matters most to a parent. They are coming to pick up their child. They want it to be easy and they want to feel confident their child is safe. Nova's checkout process is designed to deliver that." },
        { type: "steps", items: [
          { title: "Parent arrives", text: "The parent or authorized pickup person comes inside the facility and notifies the front desk that they are picking up their child." },
          { title: "Front desk contacts the floor", text: "The front desk, or a Team Member assigned to assist with checkout, retrieves the camper from their group." },
          { title: "Camper released to pickup person", text: "The camper is walked to the front and released directly to the authorized pickup person." }
        ]},
        { type: "heading", kicker: "Your Role", title: "What camp Team Members should know about checkout" },
        { type: "list", items: [
          "You do not release a camper to anyone on your own without being directed by the front desk",
          "If a parent approaches you directly on the floor asking to take their child, direct them to the front desk — every checkout goes through the front desk process",
          "Do not allow a camper to leave your group without authorization from the front desk",
          "If you are unsure whether a pickup is authorized, hold the camper with you and contact the front desk immediately"
        ]},
        { type: "standard", title: "Every pickup goes through the front desk", items: [
          "A parent who seems friendly and familiar does not change the process. All pickups go through the front desk.",
          "The checkout process exists to protect the camper. Treat it as non-negotiable.",
          "If a guest expresses frustration with the process, acknowledge their experience and direct them to the front desk with warmth."
        ]},
        { type: "prose", html: "During the camp day, your interactions with guests are limited. Parents drop off, they pick up. If a parent approaches you with a question during the day, be warm and helpful, but direct detailed questions to the front desk. You are responsible for your group. That does not stop because a guest wants to talk." },
        { type: "compare", rows: [
          { nova: "A parent approaches me on the floor and asks to take her son early. I let her know that all pickups go through the front desk and point her in the right direction.", not: "A parent I recognize asks to grab her kid early. I wave him over from the group since I know who she is." },
          { nova: "A parent asks me a question about tomorrow's schedule at drop-off. I let them know the front desk will have that information and get back to my group.", not: "I spend five minutes at drop-off answering a parent's questions about the rest of the week while my group waits." }
        ]},
        { type: "scenario", text: "A man arrives on the gym floor during afternoon activities and tells you he is picking up his daughter. You do not recognize him and he is not approaching from the front desk direction.", reflection: "What do you do? What do you say to him? What do you say to your group while you handle this?" }
      ],
      quiz: [
        { q: "A parent you recognize well approaches you on the floor and asks to take her child home early. What is the correct response?", options: [
          "Allow the pickup since you can visually confirm who she is",
          "Call out to the child and let them decide if they want to leave",
          "Direct her to the front desk and let her know all pickups go through that process",
          "Check your role sheet to confirm the child is in your group, then release them"
        ], answer: 2, explain: "Familiarity never changes the process. Every pickup goes through the front desk — direct the parent there warmly and keep the camper with your group until authorized." },
        { q: "Walk-in campers who register on the day of camp are added to group role sheets by:", options: [
          "The camp Team Member who has the most availability that day",
          "The Special Events Director at the start of each session",
          "The front desk team, manually on the prepared role sheets",
          "The camp Team Member assigned to the group with the most open spots"
        ], answer: 2, explain: "The front desk owns enrollment and role sheets — they manually add walk-ins and late registrations to the prepared sheets." },
        { q: "A parent stops you at drop-off to ask detailed questions about pricing and next week's camp schedule. You should:", options: [
          "Answer as fully as possible so the parent feels taken care of",
          "Tell them you are not allowed to discuss pricing",
          "Direct them to the front desk for that information and return to your group",
          "Ask another Team Member nearby to cover your group while you help the parent"
        ], answer: 2, explain: "Be warm, but route detailed questions to the front desk. Your responsibility to your group doesn't pause because a guest wants to talk." }
      ]
    },

    /* ===================== MODULE 5 ===================== */
    {
      n: 5,
      title: "Camper Conduct and Difficult Moments",
      subtitle: "Managing behavior, escalation, and the Nova standard for professionalism",
      objectives: [
        "Apply Nova's standard for managing camper behavior within the group setting",
        "Describe the escalation process when a situation exceeds your ability to resolve it",
        "Demonstrate the Nova standard of professionalism when discussing campers"
      ],
      blocks: [
        { type: "prose", html: "Working with children ages 5 to 13 in a high-energy environment means you will encounter challenging moments. A camper who refuses to participate. A conflict between two athletes in your group. A child who is homesick and crying. A camper who keeps leaving the group." },
        { type: "prose", html: "How you handle these moments is part of your job. How you talk about them afterward is also part of your job." },
        { type: "heading", kicker: "In the Group", title: "Managing behavior in your group" },
        { type: "prose", html: "Campers are not allowed to leave their group for any reason other than the restroom, and that happens one at a time. When a camper tests that boundary or disrupts the group, address it calmly and directly." },
        { type: "list", items: [
          "Address behavior privately when possible — public correction embarrasses campers and escalates situations",
          "Use clear, calm language. Tell the camper what you need them to do, not just what to stop.",
          "Redirect before escalating. Most behavior challenges resolve with a direct, confident redirection.",
          "Safety rules are non-negotiable. Enforce them every time, with every camper, without exception.",
          "If a camper is consistently disruptive or refuses to comply with safety instructions, escalate to your supervisor immediately"
        ]},
        { type: "banner", text: "Never speak negatively about a camper" },
        { type: "heading", kicker: "Professionalism", title: "The no-complaint standard" },
        { type: "prose", html: "This one matters. Never speak negatively about a camper to another Team Member, to a guest, or to anyone within earshot of other campers. Not in the gym. Not in the party room. Not in the parking lot." },
        { type: "prose", html: "This is not just about professionalism. It is about what kind of environment you are creating. When Team Members talk negatively about children, it changes how they treat those children. It changes how other Team Members treat those children. And it finds its way back to families." },
        { type: "standard", title: "Every camper deserves a fresh start", items: [
          "A camper who had a hard morning deserves the same energy and attention in the afternoon",
          "Frustration is normal. Expressing that frustration at the expense of a child is never acceptable.",
          "If you need to debrief a difficult situation, do it with your supervisor privately, not with other Team Members on the floor"
        ]},
        { type: "heading", kicker: "When to Get Help", title: "Escalation" },
        { type: "prose", html: "You are not expected to handle every situation alone. Knowing when to escalate and how to do it quickly is a skill." },
        { type: "practice", items: [
          { title: "Escalate immediately for", text: "A camper is injured or appears unwell. A camper cannot be located. A camper is in a physical altercation. A camper makes a statement about being hurt or unsafe at home. A camper has a potential allergic reaction." },
          { title: "Escalate after redirection fails", text: "A camper refuses to follow safety instructions after multiple calm redirections. A camper's behavior is disrupting the group in a way you cannot manage while maintaining supervision of the full group." },
          { title: "Do not wait to escalate", text: "If you are uncertain whether something requires escalation, escalate. It is always better to involve your supervisor than to manage a worsening situation alone." }
        ]},
        { type: "compare", rows: [
          { nova: "A camper is acting out during the rotation. I redirect calmly twice. When it continues, I notify my supervisor and stay with my group.", not: "A camper is acting out. I complain to the Team Member at the next station about how difficult this kid is." },
          { nova: "A camper is upset and crying. I get down to their level, speak calmly, and focus on helping them feel safe.", not: "A camper keeps crying. I tell them they need to stop because they are making the rest of the group uncomfortable." },
          { nova: "After a tough session, I talk privately with my supervisor about what happened so we can handle it better next time.", not: "After a tough session, I vent to the other camp Team Members about which campers were problems today." }
        ]},
        { type: "scenario", text: "Halfway through the afternoon session, a 7-year-old in your group tells you she does not want to do any more activities. She sits down on the mat and refuses to move. The rest of your group is waiting.", reflection: "What do you do in the next 60 seconds? What is your escalation trigger in this situation?" }
      ],
      quiz: [
        { q: "A camper has been disruptive during two straight activities and will not follow your redirection. What is the appropriate next step?", options: [
          "Tell the camper their parent will be called if they do not stop",
          "Remove the camper from the group and have them sit alone until they are ready",
          "Escalate to your supervisor while continuing to supervise the rest of your group",
          "Ask another Team Member to take over your group while you handle the situation"
        ], answer: 2, explain: "When calm redirection fails, escalate to your supervisor — while keeping supervision of your full group. You never hand your group off or isolate a camper on your own." },
        { q: "After a challenging morning session, you are frustrated with a specific camper. The correct way to handle that frustration is to:", options: [
          "Tell the other camp Team Members so they can be prepared if that camper joins their group",
          "Debrief privately with your supervisor if needed, and never speak negatively about the camper to others",
          "Note it on the role sheet so the front desk is aware for future sessions",
          "Address it directly with the camper's parent at pickup"
        ], answer: 1, explain: "The no-complaint standard: never speak negatively about a camper to anyone. If you need to debrief, do it privately with your supervisor. Every camper gets a fresh start." },
        { q: "Which situation requires immediate escalation to a supervisor, without attempting to resolve it yourself first?", options: [
          "A camper does not want to participate in the scheduled craft activity",
          "Two campers in your group are arguing about who finished an obstacle course first",
          "A camper cannot be located and is not with your group",
          "A camper asks to use the restroom during an activity"
        ], answer: 2, explain: "A camper who cannot be located is an immediate-escalation situation. The others are managed first with calm redirection or normal procedure." }
      ]
    }
  ]
};
