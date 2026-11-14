const COVERS = {
  casn: `<div class="frame"><div class="bar"><i></i><i></i><i></i></div><div class="fbody" style="padding:9% 8%;flex-direction:column;gap:6px">
    <span class="pill" style="background:#EAF0EA;color:#2F4A3A;align-self:flex-start">MODULE 2 · KNOWLEDGE CHECK</span>
    <div class="big-t">Which group is at greatest risk in this scenario?</div>
    <div class="opt"><i></i><div class="ln w55" style="margin:0"></div></div>
    <div class="opt on"><i></i><div class="ln dk w70" style="margin:0"></div></div>
    <div class="opt"><i></i><div class="ln w40" style="margin:0"></div></div>
    <div style="margin-top:auto" class="prog"><b style="width:62%"></b></div></div></div>`,
  aging: `<div class="frame"><div class="bar"><i></i><i></i><i></i></div><div class="fbody" style="padding:8%;gap:8%;align-items:center">
    <div style="flex:1"><span class="pill" style="background:#F1E6EA;color:#5A3646">LESSON 3</span><div class="big-t" style="margin:8px 0">Normal aging or a sign of something more?</div><div class="ln w85"></div><div class="ln w70"></div><div class="ln w55"></div></div>
    <div style="flex:1;display:flex;flex-direction:column;gap:6px">
      <div style="background:#F1E6EA;border-radius:8px 8px 8px 2px;padding:7px"><div class="ln dk w70" style="margin:0"></div><div class="ln w55"></div></div>
      <div style="background:#EAF0EA;border-radius:8px 8px 2px 8px;padding:7px;margin-left:18%"><div class="ln w85" style="margin:0"></div><div class="ln w40"></div></div>
      <div style="background:#F1E6EA;border-radius:8px 8px 8px 2px;padding:7px"><div class="ln w55" style="margin:0"></div></div></div></div></div>`,
  moodle: `<div class="frame"><div class="bar"><i></i><i></i><i></i></div><div class="fbody">
    <div style="width:30%;background:#EFE8DC;padding:8px;display:flex;flex-direction:column;gap:5px">
      <div class="ln dk w70"></div><div style="padding-left:8px"><div class="ln w85"></div><div class="ln w70"></div><div class="ln w55" style="background:#C99A4A"></div><div class="ln w70"></div></div><div class="ln dk w55"></div><div style="padding-left:8px"><div class="ln w70"></div><div class="ln w40"></div></div></div>
    <div style="flex:1;padding:9px;display:grid;grid-template-columns:1fr 1fr;gap:7px;align-content:start">
      <div class="big-t" style="grid-column:span 2;font-size:clamp(12px,1.3vw,16px)">Learning Hub</div>
      ${[1,2,3,4].map(i=>`<div style="border:1px solid #DCD3C4;border-radius:4px;overflow:hidden"><div style="height:22px;background:${['#37474C','#C99A4A','#2F4A3A','#8C4A32'][i-1]}"></div><div style="padding:5px"><div class="ln dk w70" style="margin:0 0 3px"></div><div class="ln w55" style="margin:0"></div></div></div>`).join('')}
    </div></div></div>`,
  sage: `<div class="frame"><div class="bar"><i></i><i></i><i></i></div><div class="fbody" style="padding:7%;flex-direction:column;gap:9px">
    <div style="display:flex;justify-content:space-between;align-items:baseline"><div class="big-t">Tokens &amp; components</div><span>v2024</span></div>
    <div style="display:flex;gap:5px;height:22%">${['#1F1B18','#2F4A3A','#3E7A5C','#C99A4A','#E8E0D2','#FBF8F2'].map(c=>`<div class="swatch" style="background:${c};border:1px solid #DCD3C4"></div>`).join('')}</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap"><span class="btn-s" style="background:#2F4A3A;color:#fff">Primary</span><span class="btn-s" style="border:1px solid #2F4A3A;color:#2F4A3A">Secondary</span><span class="btn-s" style="color:#2F4A3A;text-decoration:underline">Link</span><span class="btn-s" style="background:#E8E0D2;color:#8A7F72">Disabled</span></div>
    <div style="border:1px solid #DCD3C4;border-radius:4px;padding:6px"><div style="font-size:8px;color:#6B6158">Customer ID</div><div style="border:1.5px solid #2F4A3A;border-radius:3px;height:14px;margin-top:3px"></div></div>
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:3px 8px">${Array(9).fill(0).map((_,i)=>`<div class="ln ${i<3?'dk':''}" style="margin:2px 0"></div>`).join('')}</div></div></div>`,
  unicorn: `<div class="phone"><div style="display:flex;justify-content:space-between;align-items:center"><div class="ln dk w40" style="margin:0"></div><i style="width:12px;height:12px;border-radius:50%;background:#C99A4A;display:block"></i></div>
    <div class="big-t" style="font-size:13px">Find your charge</div>
    <div style="height:34%;border-radius:8px;background:linear-gradient(135deg,#D9C9AE,#C99A4A);position:relative"><i style="position:absolute;left:40%;top:40%;width:10px;height:10px;border-radius:50%;background:#2F4A3A;border:2px solid #fff;display:block"></i></div>
    ${[1,2].map(()=>`<div style="border:1px solid #DCD3C4;border-radius:6px;padding:5px;display:flex;gap:5px;align-items:center"><i style="width:14px;height:14px;border-radius:4px;background:#2F4A3A;display:block;flex:none"></i><div style="flex:1"><div class="ln dk w70" style="margin:0 0 3px"></div><div class="ln w40" style="margin:0"></div></div></div>`).join('')}
    <div style="margin-top:auto;background:#1F1B18;color:#FBF8F2;text-align:center;border-radius:6px;padding:5px;font-size:8px">Start</div></div>`,
  twu: `<div class="frame"><div class="bar"><i></i><i></i><i></i></div><div class="fbody" style="padding:8%;flex-direction:column;gap:5px">
    <span class="pill" style="background:#E7ECEE;color:#37474C;align-self:flex-start">FACULTY · BLENDED COURSE</span>
    <div class="big-t" style="margin-bottom:4px">Course outline</div>
    ${['Week 1 · Orientation','Week 2 · Core concepts','Week 3 · Case discussion','Week 4 · Assessment'].map((t,i)=>`<div style="display:flex;gap:7px;align-items:center;border-bottom:1px solid #E8E0D2;padding:4px 0"><i style="width:10px;height:10px;border-radius:50%;display:block;flex:none;${i<2?'background:#37474C':'border:1.5px solid #8A7F72'}"></i><span style="flex:1">${t}</span><span style="color:#8A7F72">${i<2?'done':'—'}</span></div>`).join('')}</div></div>`,
  pixelera: `<div class="frame" style="background:#2A2622;color:#FBF8F2"><div class="fbody" style="padding:8%;flex-direction:column;justify-content:center;gap:12px">
    <div class="big-t" style="color:#FBF8F2">Interactive timeline</div>
    <div style="position:relative;height:2px;background:#6B6158;margin:14px 0">${[0,22,45,68,92].map((l,i)=>`<i style="position:absolute;left:${l}%;top:-5px;width:12px;height:12px;border-radius:50%;background:${i==2?'#C99A4A':'#FBF8F2'};display:block"></i>`).join('')}</div>
    <div style="display:flex;justify-content:space-between;color:#BDB2A2"><span>1916</span><span>1939</span><span>1951</span><span>1976</span><span>2000</span></div>
    <div style="display:flex;gap:6px"><span class="btn-s" style="border:1px solid #6B6158">EN</span><span class="btn-s" style="border:1px solid #6B6158">FR</span></div></div></div>`
};

const CASES = [
  { id:"casn", img:"images/cases/casn-tick-identification.jpg", gallery:[["images/cases/casn-primary-prevention.jpg","Module 3: What is primary prevention? Content slide with photographic visual"],["images/cases/casn-tick-identification.jpg","Tick identification: click-to-reveal comparison of ticks and other arthropods"],["images/cases/casn-removing-a-tick.jpg","Activity: drag the tick-removal steps into the correct order"],["images/cases/casn-late-signs.jpg","Module 4: Late signs and symptoms of Lyme disease, with an anatomical illustration highlighting affected areas"]], f:["el"], color:"c-moss", layout:"wide",
    kicker:"Healthcare eLearning", year:"2024 – present",
    title:"Nursing education on populations at risk",
    dek:"Online modules for the Canadian Association of Schools of Nursing, including Vector-Borne Diseases modules on Primary and Secondary Prevention and Tertiary and Quaternary Prevention, Populations at Risk and Primordial Prevention.",
    tags:["Storyline","Rise","Scenarios","WCAG"],
    specs:{Client:"CASN, via eLearnza",Role:"eLearning developer",Tools:"Articulate Storyline & Rise",Audience:"Nursing educators & students"},
    challenge:`<p>Prevention concepts in public health are abstract. Students can define "primordial prevention" and still miss the signs in a real community. The client needed modules that make these ideas concrete and work well online.</p>`,
    steps:[["Analyze","Reviewed source material with subject matter experts and pinned down what learners must be able to recognize and do."],["Design","Chunked content into short lessons, each anchored by a realistic population scenario."],["Develop","Built interactions and knowledge checks in Storyline and Rise, simplifying dense clinical material."],["Evaluate","Ran stakeholder review cycles and checked accessibility before release."]],
    made:["A 69-page module on vector-borne disease prevention, organized into lessons with outcomes and critical thinking moments","Click-to-reveal tick identification and a drag-and-drop tick-removal sequencing activity","Scenario-based lessons on populations at risk","Knowledge checks with feedback, built to WCAG guidance"]
  },
  { id:"aging", img:"images/cases/capa-title.jpg", gallery:[["images/cases/capa-title.jpg","Title screen: Exploring Normal Aging and Major Neurocognitive Disorder"],["images/cases/capa-normal-aging.jpg","Normal aging: labelled comparison of a younger and an older brain"],["images/cases/capa-frontal-lobe.jpg","The frontal lobe: step-by-step reveal of functions and aging-related changes"],["images/cases/capa-what-is-major-ncd.jpg","What is major NCD? Click-to-learn cards"],["images/cases/capa-case-reflection.jpg","Case reflection: Jane Do, a guided three-step reflection with key takeaways"]], f:["el"], color:"c-plum",
    kicker:"Healthcare eLearning", year:"2024 – present",
    title:"Exploring normal aging and major neurocognitive disorder",
    dek:"A learning resource for CAPAPGPC that helps practitioners tell normal age-related change from signs of neurocognitive disorder.",
    tags:["Storyline","Case dialogue","Healthcare"],
    specs:{Client:"CAPAPGPC, via eLearnza",Role:"eLearning developer",Tools:"Articulate 360, multimedia",Audience:"Public administrators, guardians & conservators (PA | PG | PC Induction Academy)"},
    challenge:`<p>The line between normal aging and early neurocognitive disorder is subtle and emotionally charged. Learners need to practise noticing differences and responding with care, not just memorize criteria.</p>`,
    steps:[["Analyze","Worked from expert content to identify the distinctions practitioners most often confuse."],["Design","Built the course around conversations with older adults and families, so learners practise real observations."],["Develop","Produced interactions and multimedia that turn complex clinical content into clear, accessible steps."],["Evaluate","Refined content through client and SME review cycles."]],
    made:["A 64-page course in two sections: the aging brain, and what major neurocognitive disorder is","Labelled brain illustrations comparing younger and older brains, and a step-by-step frontal lobe reveal","Click-to-learn cards explaining the shift from \"dementia\" to major NCD","Case reflections (Jane Do, Bob Smith) with guided questions and key takeaways","Knowledge checks at the end of each topic"]
  },
  { id:"moodle", img:"images/cases/iecbc-cover.jpg", gallery:[["images/cases/iecbc-home-page.jpg","IEC-BC Learning home page: hero, value statements, topic filters with a course carousel, and footer"],["images/cases/iecbc-login.jpg","IEC-BC Learning login: split-screen layout with funded-learning messaging"]], f:["el","ux"], color:"c-ochre",
    kicker:"Learning UX", year:"2026",
    title:"A clearer Moodle Learning Hub for newcomer programs",
    dek:"Reviewing navigation, course organization and learner experience in IEC-BC's Moodle Learning Hub.",
    tags:["Moodle","Usability review","Accessibility"],
    specs:{Organization:"IEC-BC",Role:"Instructional designer",Tools:"Moodle, Figma",Audience:"Employers & newcomers"},
    challenge:`<p>IEC-BC's online learning serves employers and newcomers with very different goals and digital comfort. If the Learning Hub is hard to navigate, good content goes unused.</p>`,
    steps:[["Analyze","Reviewed learning briefs and met stakeholders to understand employer challenges and learner needs."],["Review","Audited Hub navigation, course structure and learner flows against usability and accessibility principles."],["Recommend","Proposed changes to course organization, labelling and accessibility."],["Support","Facilitated online training and demos so internal teams can adopt the resources with confidence."]],
    made:["Learning Hub usability and accessibility review","Recommendations for navigation and course organization","Online orientation resources for workforce programs"]
  },
  { id:"fast", img:"images/cases/fast-cover.jpg", gallery:[["images/cases/fast-home-page.jpg","Home page: hero, what you will do, stream finder with tabs, five-step journey and participant story"],["images/cases/fast-how-it-works-page.jpg","How FAST works: eligibility, video guide with transcript, five steps, language and pace, completion"],["images/cases/fast-community-partners-page.jpg","For community partners: three-step referral flow, partnership, shareable materials and FAQ accordion"]], f:["ux"], color:"c-moss", layout:"wide",
    kicker:"Web design · IEC-BC", year:"2026",
    title:"FAST: a program website for newcomers and the partners who refer them",
    dek:"Website design for FAST (Facilitating Access to Skilled Talent), IEC-BC's fully funded online program that helps immigrant talent prepare for work in Canada.",
    tags:["Web design","Information architecture","Accessibility"],
    specs:{Organization:"IEC-BC",Role:"UI/UX designer",Pages:"Home, How FAST works, For community partners and more",Audience:"Newcomers & community partners"},
    challenge:`<p>FAST serves two very different visitors. Newcomers need to quickly understand whether they're eligible, which of eight streams fits them and how to get started. Settlement and employment organizations need to know how to refer clients, with no agreement or quota required. Both had to find their path without reading a wall of program detail.</p>`,
    steps:[["Structure","Organized the site around the two audiences, with a dedicated page for community partners and clear Explore Streams and How FAST Works paths."],["Design","Built a consistent page system: green hero with a single clear call to action, eyebrow labels, check-mark lists, card grids and numbered step cards."],["Guide","Turned the participant journey into five numbered steps, from choosing a stream to getting a certificate, repeated wherever people decide to start."],["Support","Added a video guide with a readable transcript, an FAQ accordion, eligibility checklists and downloadable materials for partners."]],
    made:["Home page with a tabbed stream finder (2 foundational, 6 sector-specific streams)","How FAST works page with eligibility, video guide and five-step journey","Community partners page with a three-step referral flow, shareable materials and FAQs","Reusable components: heroes, step cards, stream cards, accordions and call-to-action bands"]
  },
  { id:"sage", img:"images/cases/sage-cover.jpg", gallery:[["images/cases/sage-design-system.jpg","Sage Design System: foundations, components and pattern sheets"],["images/cases/sage-300-cloud.jpg","Sage 300 Cloud redesign, before and after"],["images/cases/sage-intelligence-reports.jpg","Intelligence Reports modernization, before and after"]], f:["ux"], color:"c-slate", layout:"wide",
    kicker:"Product design · Design system", year:"2015 – 2023",
    title:"Sage 300: a design system and an accessible, modern UI",
    dek:"Eight years designing for Sage 300 Cloud. I built design system foundations, redesigned core screens and raised accessibility across the product.",
    tags:["Figma","Axure RP","Design system","WAI-ARIA"],
    specs:{Company:"Sage Software",Role:"Product designer & web developer",Tools:"Figma, Axure RP, HTML/CSS",Scale:"300+ web pages"},
    challenge:`<p>Sage 300 is a mature accounting product with many screens built over many years. Inconsistent patterns made it harder to learn and harder to make accessible.</p>`,
    steps:[["Discover","Ran needs discovery, user research and usability reviews with product and development teams."],["Systemize","Developed design system components and patterns in Figma so teams could design consistently."],["Redesign","Redesigned Sage 300 Cloud screens to the 2024 design system, and modernized Intelligence Reports in Axure RP."],["Validate","Improved accessibility across 300+ web pages, reaching 93% WCAG / WAI-ARIA compliance."]],
    made:["100+ wireframes and interactive prototypes","Design system components in Figma","Sage 300 Cloud UI redesign","Product demos and training for internal teams and clients"],
    outcome:"93% WCAG / WAI-ARIA compliance across 300+ pages."
  },
  { id:"unicorn", img:"images/cases/unicorn-redesign.jpg", fit:"contain", gallery:[["images/cases/unicorn-redesign.jpg","2026 redesign: dark theme, one key number per screen, age groups as stacked bars, and a floating tab bar"],["images/cases/unicorn-cover.jpg","Original design: Performance, Trends and Tour Management screens"],["images/cases/unicorn-screens.jpg","Original screens, user persona and dashboard features"]], f:["ux"], color:"c-sand", layout:"third",
    kicker:"Mobile app", year:"",
    title:"The Electric Unicorn mobile app",
    dek:"UX and UI design for a mobile app, from user flows to high-fidelity screens in Figma.",
    tags:["Figma","Mobile","Prototyping"],
    specs:{Client:"The Electric Unicorn",Role:"UX/UI designer",Tools:"Figma",Platform:"Mobile"},
    challenge:`<p>A mobile product needed a clear, friendly interface that helps users finish their main tasks quickly.</p>`,
    steps:[["Research","Defined target users and the core tasks the app had to support."],["Structure","Mapped user flows and wireframed key screens."],["Design","Built the visual language and high-fidelity screens in Figma."],["Prototype","Linked screens into an interactive prototype for review."]],
    made:["User flows and wireframes","High-fidelity mobile UI","Clickable Figma prototype","A 2026 redesign: dark theme, clearer hierarchy with one headline number per screen, a stacked-bar song ranking, an annotated trend chart and a next-show card with a capacity ring"]
  },
  { id:"starbucks", img:"images/cases/starbucks-cover.jpg", gallery:[["images/cases/starbucks-licensed-store-immersion.jpg","Licensed Store Immersion: illustrated map menu, with each building opening a topic and check marks tracking progress"],["images/cases/starbucks-global-overview.jpg","Global Overview of Licensed Stores: a scrolling streetscape where each building is a chapter"],["images/cases/starbucks-supporting-operations.jpg","Supporting Starbucks Operations: photo tile menu of eight topics, then summary, assessment and application"]], f:["el","ux"], color:"c-moss", layout:"third",
    kicker:"Corporate eLearning · Pixelera", year:"",
    title:"Starbucks licensed store training",
    dek:"A series of eLearning modules that introduces licensed store partners to Starbucks: the brand, how licensing works, and how to run day-to-day operations.",
    tags:["UI design","Flash","Gamified navigation"],
    specs:{Client:"Starbucks, via Pixelera",Role:"UI designer & Flash developer",Tools:"Adobe Flash, Photoshop, Illustrator",Audience:"Licensed store partners"},
    challenge:`<p>Licensed stores are run by partner businesses in airports, hotels and other locations, not by Starbucks itself. Their teams needed to learn the brand, the licensing model and the operating standards, and the training had to feel like Starbucks and keep people moving through a lot of content.</p>`,
    steps:[["Structure","Split the content into separate modules, each with its own topics, summary and assessment."],["Navigate","Designed a different visual menu for each module: an illustrated city map, a streetscape of buildings, and a photo tile grid."],["Track","Showed progress with check marks on finished topics and greyed-out sections that unlock in order."],["Support","Added a consistent toolbar with home, job aids, play and pause, replay, audio and closed captions, plus a How to Navigate guide."]],
    made:["Licensed Store Immersion module with an illustrated map menu","Global Overview of Licensed Stores module with a streetscape chapter menu","Supporting Starbucks Operations module with eight topic tiles, assessment and application","A shared player interface with job aids and closed captions"]
  },
  { id:"pixelera", img:"images/cases/nrc-timeline.jpg", gallery:[["images/cases/nrc-timeline.jpg","NRC interactive timeline: Presidents Wall"],["images/cases/health-canada-multimedia.jpg","Health Canada multimedia learning"],["images/cases/kiosk-shipbuilding.jpg","Beaubears Island kiosk: Shipbuilding, bilingual"],["images/cases/kiosk-nelson.jpg","Beaubears Island kiosk: Historic Village of Nelson"],["images/cases/youth-zone-1.jpg","Health Canada Youth Zone: interactive story"],["images/cases/youth-zone-2.jpg","Health Canada Youth Zone: choose-your-own-adventure"]], f:["el","ux"], color:"c-ink", layout:"third",
    kicker:"Government eLearning", year:"2005 – 2014",
    title:"Bilingual learning and kiosks for Health Canada and NRC",
    dek:"Nine years at Pixelera designing interactive tutorials, timelines, multimedia and touch-screen kiosks for 20+ public and enterprise clients.",
    tags:["Articulate","Flash","Bilingual","Kiosk"],
    specs:{Studio:"Pixelera, Ottawa",Role:"Web & e-Learning designer",Tools:"Articulate, Flash, Photoshop",Clients:"Health Canada, NRC, Starbucks & more"},
    challenge:`<p>Government clients needed learning that worked in both official languages, met accessibility expectations and still felt engaging.</p>`,
    steps:[["Collaborate","Worked closely with SMEs and project teams on content and goals."],["Design","Designed learner-centred interfaces for tutorials, timelines and kiosks."],["Develop","Built bilingual interactive modules in Articulate Storyline and Flash."],["Deliver","Managed several projects at once while keeping usability and accessibility standards high."]],
    made:["Health Canada eLearning and multimedia","NRC interactive tutorials and timeline","Touch-screen kiosks for Beaubears Island and the Montefiore Club"]
  }
];

/* ---------- Discipline keys ---------- */
const KEYS = { a:"Instructional design", b:"UI/UX design", c:"Accessibility", d:"Training & facilitation" };
const KCOL = { a:"var(--c-a)", b:"var(--c-b)", c:"var(--c-c)", d:"var(--c-d)" };
const caseKeys = { fast:"bc", casn:"ac", aging:"a", moodle:"bcd", sage:"bcd", unicorn:"b", starbucks:"ab", pixelera:"abc" };

/* ---------- Ticker ---------- */
const ORGS = [["Health Canada","gov"],["National Research Council","gov"],["CASN","nursing"],["Sage","software"],["Trinity Western University","higher-ed"],["IEC-BC","workforce"],["Starbucks","retail"],["Canadian War Museum","culture"],["FCM","municipal"],["Best Buy Canada","retail"]];
const orgHTML = ORGS.map(([n,t])=>`<span>${n}<em>${t}</em></span>`).join('');
document.getElementById('ticker').innerHTML = orgHTML + orgHTML.replace(/<span>/g,'<span aria-hidden="true">');

/* ---------- Experience list ---------- */
const CLIENTS = [
  ["IEC-BC","Instructional designer · 2026–","acd"],
  ["eLearnza","Freelance eLearning developer · 2023–","a"],
  ["Trinity Western University","Instructional designer / media developer","ad"],
  ["CASN","Nursing education modules","ac"],
  ["CAPAPGPC","Normal aging & neurocognitive disorder","a"],
  ["FCM","eLearning via eLearnza","a"],
  ["Sage Software","Product designer · 2015–2023","bcd"],
  ["Best Buy Canada","Digital media designer","b"],
  ["Pixelera","Web & eLearning designer · 2005–2014","abc"],
  ["Health Canada","eLearning, tutorials, Youth Zone site","ab"],
  ["National Research Council","Interactive tutorials & timeline","ab"],
  ["Canadian War Museum","Kiosk interface illustration","b"]
];
const list = document.getElementById('clients');
list.innerHTML = CLIENTS.map(([n,w,k],i)=>`<li data-k="${k}"><span class="n">${String(i+1).padStart(2,'0')}</span><span>${n}</span><span class="what">${w}</span><span class="sq" title="${[...k].map(x=>KEYS[x]).join(', ')}">${[...k].map(x=>`<i style="background:${KCOL[x]}"></i>`).join('')}</span></li>`).join('');

/* ---------- Skill x sector matrix ---------- */
const SECTORS=['Healthcare','Government','Higher-ed','Workforce','Software'];
const MATRIX={
  a:{name:'Instructional design', at:[1,1,1,1,0], note:'CASN, CAPAPGPC, Health Canada, NRC, TWU, IEC-BC'},
  b:{name:'UI/UX design',         at:[0,1,0,1,1], note:'Health Canada, NRC, IEC-BC Learning Hub, Sage'},
  c:{name:'Accessibility',        at:[1,1,1,1,1], note:'WCAG 2.1 & WAI-ARIA across every sector'},
  d:{name:'Training & facilitation', at:[0,0,1,1,1], note:'Faculty at TWU, teams at IEC-BC, clients at Sage'}
};
const rows=document.getElementById('mx-rows');
rows.innerHTML=Object.entries(MATRIX).map(([k,m])=>`
  <button type="button" class="mx-row" id="mx-${k}" data-k="${k}" aria-pressed="false" style="--k:${KCOL[k]}">
    <span class="mx-skill"><b>${k.toUpperCase()}</b><span><strong>${m.name}</strong><em>${m.note}</em></span></span>
    ${m.at.map((v,i)=>`<span class="mx-cell ${v?'on':''}" data-s="${SECTORS[i]}" title="${m.name}: ${SECTORS[i]}${v?'':' (not yet)'}"><i></i><span class="sr">${SECTORS[i]}: ${v?'yes':'no'}</span></span>`).join('')}
  </button>`).join('');
const knobs=document.getElementById('knobs');
knobs.innerHTML=Object.entries(MATRIX).map(([k,m])=>`
  <button type="button" class="knob-btn" id="knob-${k}" data-k="${k}" aria-pressed="false" style="--k:${KCOL[k]}">
    <span class="kc" aria-hidden="true"><b>${k.toUpperCase()}</b><i>→</i></span>
    <span class="kt"><b>${m.name}</b><span>${m.at.filter(Boolean).length} of 5 sectors</span></span>
  </button>`).join('');
function selectSkill(k){
  const cur=knobs.querySelector('.knob-btn[aria-pressed="true"]');
  const on=!(cur && cur.dataset.k===k);
  knobs.querySelectorAll('.knob-btn').forEach(x=>x.setAttribute('aria-pressed', on && x.dataset.k===k));
  rows.querySelectorAll('.mx-row').forEach(x=>x.setAttribute('aria-pressed', on && x.dataset.k===k));
  rows.classList.toggle('focus',on);
  list.querySelectorAll('li').forEach(li=>li.classList.toggle('dim', on && !li.dataset.k.includes(k)));
}
knobs.querySelectorAll('.knob-btn').forEach(b=>b.addEventListener('click',()=>selectSkill(b.dataset.k)));
rows.querySelectorAll('.mx-row').forEach(r=>r.addEventListener('click',()=>selectSkill(r.dataset.k)));

/* ---------- Projects ---------- */
const coverHTML = c => c.img ? `<img class="shot${c.fit==='contain'?' contain':''}" src="${c.img}" alt="" loading="lazy">` : COVERS[c.id];
const proj = document.getElementById('projects');
proj.innerHTML = CASES.map(c=>`
  <a class="proj" href="#cs-${c.id}">
    <div class="stage"><div class="cover ${c.color} ${c.img?'has-shot':''}" aria-hidden="true">${coverHTML(c)}</div></div>
    <div class="proj-meta">
      <h3>${c.title}</h3>
      <span class="yr">${c.kicker}${c.year?' · '+c.year:''}</span>
      <p>${c.dek}</p>
      <div class="proj-tags">${[...caseKeys[c.id]].map(k=>`<span><i style="background:${KCOL[k]}"></i>${KEYS[k]}</span>`).join('')}</div>
      <span class="go">Read case study <span aria-hidden="true">→</span></span>
    </div>
  </a>`).join('');

/* ---------- Case study view ---------- */
const home = document.getElementById('home-view'), cv = document.getElementById('case-view');
function renderCase(id){
  const i = CASES.findIndex(c=>c.id===id), c = CASES[i], nx = CASES[(i+1)%CASES.length];
  cv.innerHTML = `
    <a class="back" href="#work">← All work</a>
    <header class="case-head"><p class="slash">/work/${String(i+1).padStart(2,'0')} · ${c.kicker}${c.year?' · '+c.year:''}</p><h1>${c.title}</h1><p class="dek">${c.dek}</p></header>
    <div class="stage"><div class="cover ${c.color} ${c.img?'has-shot':''}" aria-hidden="true">${coverHTML(c)}</div></div>
    <dl class="specs">${Object.entries(c.specs).map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <div class="article">
      <h2>/challenge</h2><div class="txt">${c.challenge}</div>
      <h2>/process</h2><div class="txt"><ol class="steps">${c.steps.map(([a,b])=>`<li><b>${a}</b><span>${b}</span></li>`).join('')}</ol></div>
      <h2>/deliverables</h2><div class="txt"><ul>${c.made.map(m=>`<li>${m}</li>`).join('')}</ul></div>
      ${c.outcome?`<h2>/outcome</h2><div class="txt"><p class="outcome">${c.outcome}</p></div>`:''}
    </div>
    ${c.gallery?`<section class="gallery" aria-label="Project images"><h2 class="slash">/gallery</h2><div class="g-grid">${c.gallery.map(([src,cap])=>`<figure class="${src.includes('-page.')?'tall':''}"><a href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${cap}" loading="lazy"></a><figcaption>${cap}</figcaption></figure>`).join('')}</div></section>`:''}
    <div class="next"><span>Next case study</span><a href="#cs-${nx.id}">${nx.title} →</a></div>`;
}
function route(){
  const h = location.hash.slice(1), c = CASES.find(x=>'cs-'+x.id===h);
  if (c){ renderCase(c.id); home.hidden = true; cv.hidden = false; window.scrollTo(0,0); document.title = c.title+' · Inok Lim'; }
  else if (home.hidden){ home.hidden = false; cv.hidden = true; document.title = 'Inok Lim · Instructional & UI/UX Designer'; const t = h && document.getElementById(h); if (t) t.scrollIntoView(); }
}
window.addEventListener('hashchange', route); route();

/* ---------- Rotating word ---------- */
const words = ['design','build','simplify','teach','improve'], rot = document.getElementById('rot'); let wi = 0;
if (!matchMedia('(prefers-reduced-motion: reduce)').matches){
  setInterval(()=>{ rot.classList.add('out'); setTimeout(()=>{ wi=(wi+1)%words.length; rot.textContent=words[wi]; rot.classList.remove('out'); },350); },2400);
}

/* ---------- Reveal email ---------- */
const rb = document.getElementById('reveal-btn'), out = document.getElementById('email-out');
rb.addEventListener('click',()=>{ const o = out.hidden; out.hidden = !o; rb.setAttribute('aria-expanded', o); });
document.getElementById('copy-btn').addEventListener('click', async e=>{
  try{ await navigator.clipboard.writeText('inoklim@gmail.com'); e.target.textContent='Copied'; }
  catch{ e.target.textContent='Select & copy'; }
  setTimeout(()=>e.target.textContent='Copy',1800);
});

/* ---------- Top bar: hide on scroll down, show on scroll up ---------- */
const bar = document.getElementById('top-bar'); let lastY = scrollY, tick = false;
addEventListener('scroll',()=>{ if(tick) return; tick = true; requestAnimationFrame(()=>{
  const y = scrollY;
  if (y < 60){ bar.classList.remove('hide','solid'); }
  else if (y > lastY+4){ bar.classList.add('hide'); }
  else if (y < lastY-4){ bar.classList.remove('hide'); bar.classList.add('solid'); }
  lastY = y; tick = false; }); },{passive:true});
bar.addEventListener('focusin',()=>bar.classList.remove('hide'));

/* ---------- Hero course player ---------- */
(function(){
  const slides=[...document.querySelectorAll('.slide')], segs=[...document.querySelectorAll('.seg')];
  const prev=document.getElementById('prev'), next=document.getElementById('next'), n=document.getElementById('slide-n'), mod=document.getElementById('mod-title');
  let cur=0;
  function go(i){
    if(i<0||i>=slides.length) return;
    slides[cur].hidden=true; slides[cur].classList.remove('on');
    cur=i; slides[cur].hidden=false; void slides[cur].offsetWidth; slides[cur].classList.add('on');
    segs.forEach((s,k)=>{s.classList.toggle('on',k===cur);s.classList.toggle('done',k<cur);k===cur?s.setAttribute('aria-current','step'):s.removeAttribute('aria-current');});
    n.textContent=cur+1; mod.textContent=slides[cur].dataset.title;
    prev.disabled=cur===0;
    next.textContent= cur===slides.length-1 ? 'Restart ↺' : 'Next →';
    next.classList.remove('nudge');
    if(cur===0 && window.replayPresenter) window.replayPresenter();
  }
  next.addEventListener('click',()=>go(cur===slides.length-1?0:cur+1));
  prev.addEventListener('click',()=>go(cur-1));
  segs.forEach(s=>s.addEventListener('click',()=>go(+s.dataset.i)));
  document.getElementById('player').addEventListener('keydown',e=>{
    if(e.target.closest('.quiz')) return;
    if(e.key==='ArrowRight') go(cur+1); if(e.key==='ArrowLeft') go(cur-1);
  });
  next.classList.add('nudge');
  const fb=document.getElementById('fb');
  document.querySelectorAll('.q').forEach(q=>q.addEventListener('click',()=>{
    document.querySelectorAll('.q').forEach(x=>{x.setAttribute('aria-checked','false');x.classList.remove('right','wrong');});
    q.setAttribute('aria-checked','true');
    const ok=q.dataset.ok==='1'; q.classList.add(ok?'right':'wrong');
    fb.hidden=false;
    fb.innerHTML= ok ? '<b>Correct.</b> Instructional design keeps my interfaces easy to learn, and UI/UX keeps my courses easy to use.'
                     : '<b>Partly right.</b> I do that, and the other one too. Try the last option.';
  }));
})();

/* ---------- Presenter speech bubble ---------- */
(function(){
  const el=document.getElementById('bubble-text'); if(!el) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lines=["Hi, I'm Inok! Welcome to the course.","I design eLearning and the interfaces people learn on.","Ready? Press Next to start.","Or skip ahead to my case studies."];
  let li=0;
  function type(t,i=0){ el.textContent=t.slice(0,i); if(i<t.length) setTimeout(()=>type(t,i+1),38); else setTimeout(erase,2600); }
  function erase(){ const t=el.textContent; if(t.length){ el.textContent=t.slice(0,-1); setTimeout(erase,14); } else { li=(li+1)%lines.length; setTimeout(()=>type(lines[li]),250); } }
  el.textContent=''; setTimeout(()=>type(lines[0]),500);
})();

/* Respect reduced-motion for the presenter video */
(function(){
  const img=document.getElementById('presenter-anim'); if(!img) return;
  const anim=img.getAttribute('src');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches){ img.src=img.dataset.still; return; }
  // Play the clip once; replay it when the viewer comes back to slide 1
  window.replayPresenter=()=>{ img.src=''; img.src=anim; };
  // Replay when the hero scrolls back into view (after it has left the screen)
  if ('IntersectionObserver' in window){
    let wasOut=false;
    new IntersectionObserver(([e])=>{
      if(!e.isIntersecting){ wasOut=true; return; }
      if(wasOut && e.intersectionRatio>=0.5 && !img.closest('.slide').hidden){ wasOut=false; window.replayPresenter(); }
    },{threshold:[0,0.5]}).observe(img.closest('.presenter'));
  }
})();
