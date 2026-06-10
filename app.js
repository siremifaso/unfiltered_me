const STORAGE_KEY = "unfilteredMeFinalStateV3";

function getAppIconMarkup(size = "small") {
  return `
    <span class="app-title-icon ${size}" aria-hidden="true">
      <svg class="app-icon-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="icon-badge" x="4" y="6" width="56" height="52" rx="20" />
        <path class="icon-leaf" d="M33 15c1-6 7-10 13-9-1 7-5 12-13 14" />
        <path class="icon-stem" d="M31 17c2 2 3 5 3 8" />
        <path class="icon-body" d="M32 20c-12 0-20 9-20 20 0 10 8 18 20 18s20-8 20-18c0-11-8-20-20-20Z" />
        <circle class="icon-eye" cx="25.5" cy="35.5" r="2.6" />
        <circle class="icon-eye" cx="38.5" cy="35.5" r="2.6" />
        <path class="icon-mouth" d="M26 42c2.1 2.6 9.9 2.6 12 0" />
        <circle class="icon-blush" cx="20.5" cy="40" r="3.2" />
        <circle class="icon-blush" cx="43.5" cy="40" r="3.2" />
        <path class="icon-heart" d="M46.4 16.7c1.8-2.3 5.1-2.4 6.7-.5 1.7 2 1.5 5.1-.5 6.9-1.6 1.5-3.4 2.6-6.2 4.5-2.8-1.9-4.6-3-6.2-4.5-2-1.8-2.2-4.9-.5-6.9 1.6-1.9 4.9-1.8 6.7.5Z" />
      </svg>
    </span>`;
}

function decorateInterfaceIcons() {
  const brandMark = document.getElementById("brandMark");
  if (brandMark && !brandMark.querySelector(".app-title-icon")) {
    brandMark.innerHTML = getAppIconMarkup("brand");
  }
  document.querySelectorAll(".nav-mascot").forEach((slot) => {
    if (!slot.querySelector(".app-title-icon")) slot.innerHTML = getAppIconMarkup("nav");
  });
}


const viewTitles = {
  home: "企劃首頁",
  checkin: "今日 Check-in",
  creature: "小真獸",
  fragments: "真實碎片",
  tasks: "反演算法任務",
  garden: "真實自我花園",
  report: "本週報告",
};

const batteryLabels = { high: "高能量", medium: "中能量", low: "低能量", veryLow: "極低能量" };
const batteryMeta = {
  high: { percent: 100, level: 5, tone: "green" },
  medium: { percent: 60, level: 3, tone: "yellow" },
  low: { percent: 40, level: 2, tone: "yellow" },
  veryLow: { percent: 20, level: 1, tone: "red" },
};
const mismatchLabels = { low: "落差輕微", medium: "有明顯落差", high: "落差偏大" };

const profileOptions = {
  color: [
    { id: "cream", label: "奶油白", hint: "溫暖柔軟" },
    { id: "green", label: "草綠", hint: "像小芽一樣" },
    { id: "blue", label: "霧藍", hint: "安靜清透" },
    { id: "purple", label: "淡紫", hint: "夢境感" },
  ],
  shape: [
    { id: "round", label: "圓圓型", hint: "安心可愛" },
    { id: "droplet", label: "水滴型", hint: "敏感細膩" },
    { id: "fluffy", label: "毛球型", hint: "柔軟蓬蓬" },
    { id: "cloud", label: "雲朵型", hint: "輕飄療癒" },
  ],
  eyes: [
    { id: "sleepy", label: "睡眼", hint: "慢慢陪伴" },
    { id: "round", label: "圓眼", hint: "好奇觀察" },
    { id: "dot", label: "豆豆眼", hint: "單純呆萌" },
    { id: "shy", label: "害羞眼", hint: "溫柔內向" },
  ],
  feature: [
    { id: "leaf", label: "葉子耳朵", hint: "自然感" },
    { id: "horn", label: "小角", hint: "一點勇氣" },
    { id: "antenna", label: "軟軟觸角", hint: "接收感受" },
  ],
  accessory: [
    { id: "blanket", label: "小毯子", hint: "可以休息" },
    { id: "backpack", label: "小背包", hint: "帶著碎片" },
    { id: "flower", label: "小花", hint: "不完美也開花" },
    { id: "star", label: "小星星", hint: "保留微光" },
  ],
  personality: [
    { id: "quiet", label: "安靜型", hint: "不急著說話" },
    { id: "lively", label: "活潑型", hint: "輕輕拉你回來" },
    { id: "shy", label: "害羞型", hint: "懂得躲一下" },
    { id: "companion", label: "陪伴型", hint: "一直在旁邊" },
  ],
};
const profileDefaults = { name: "小真獸", color: "green", shape: "round", eyes: "round", feature: "leaf", accessory: "blanket", personality: "companion" };
const personalityLabels = { quiet: "安靜型", lively: "活潑型", shy: "害羞型", companion: "陪伴型" };

const creatorIntroSlides = [
  {
    eyebrow: "Step 1 · What is it?",
    title: "小真獸是什麼？",
    text: "小真獸不是普通寵物，而是你真實自我的陪伴者。它會把那些還來不及被好好說出的感受，變成一個你看得見、能被陪伴的存在。",
    badges: ["真實自我陪伴者", "不是績效型寵物", "可愛但有意義"],
    locations: [
      { title: "開場設定", copy: "一開始由你親手創造牠的樣子。", icon: "✨" },
      { title: "小真獸頁", copy: "之後你可以隨時回來看看牠。", icon: "👀" },
    ],
    creature: { battery: "high", mismatch: "low", form: "glow", stateName: "剛誕生的小真獸" },
    profile: { color: "cream", shape: "round", eyes: "round", feature: "leaf", accessory: "star", personality: "companion" },
  },
  {
    eyebrow: "Step 2 · What does it do?",
    title: "它有什麼功用？",
    text: "它會依照你的公我、私我、身體感受與 Ego Battery 改變狀態。當你很有能量時，它會發光；當你很疲憊時，它會提醒你先休息。",
    badges: ["公我 / 私我落差", "Ego Battery", "反美化提醒"],
    locations: [
      { title: "今日 Check-in", copy: "你填完紀錄後，它會立刻回應你今天的狀態。", icon: "📝" },
      { title: "陪伴回饋", copy: "它不是評分你，而是提醒你靠近自己。", icon: "💛" },
    ],
    creature: { battery: "medium", mismatch: "high", form: "wobble", stateName: "正在提醒你注意內外落差" },
    profile: { color: "green", shape: "fluffy", eyes: "sleepy", feature: "antenna", accessory: "blanket", personality: "quiet" },
  },
  {
    eyebrow: "Step 3 · Where will you see it?",
    title: "之後會在哪裡看到它？",
    text: "你會在首頁、今日 Check-in、小真獸頁和本週報告看到它。它會陪你一起累積真實碎片，但不會出現在真實花園裡，讓花園只保留植物成長。",
    badges: ["首頁陪伴", "週報回顧", "不出現在花園"],
    locations: [
      { title: "首頁 / 小真獸頁", copy: "看見今天的小真獸狀態與提醒。", icon: "🏠" },
      { title: "本週報告", copy: "整理一週能量與真實變化。", icon: "📊" },
      { title: "真實自我花園", copy: "這裡只有植物，不會出現小真獸。", icon: "🌿" },
    ],
    creature: { battery: "high", mismatch: "low", form: "listen", stateName: "準備和你一起長期陪伴" },
    profile: { color: "blue", shape: "cloud", eyes: "shy", feature: "leaf", accessory: "flower", personality: "lively" },
  },
];

const defaultCreature = {
  battery: "medium",
  mismatch: "low",
  form: "settled",
  stateName: "安靜坐著，陪你留下今天的一片真實",
  warningWords: [],
  bodySignals: [],
  reflection: "今天可以先從一小片真實開始，不需要一次弄懂全部的自己。",
};

const taskDefinitions = [
  { id: "no-photo", name: "不拍照任務", description: "今天遇到一個美好的瞬間，不拍照，只用文字記下來。", purpose: "練習生活不一定要被觀看", reward: "記憶苔", gardenType: "moss", symbol: "記" },
  { id: "anti-recommend", name: "反推薦任務", description: "今天不要點進系統推薦內容，主動選一個自己真正想看的東西。", purpose: "拿回主動選擇權", reward: "選擇果", gardenType: "fruit", symbol: "選" },
  { id: "five-senses", name: "五感採集任務", description: "記錄某個地方的氣味、聲音或觸感。", purpose: "回到身體經驗", reward: "感官草", gardenType: "grass", symbol: "感" },
  { id: "no-performance", name: "不表演任務", description: "找一個時刻，不刻意表現得很好。", purpose: "放下社交角色", reward: "皺皺花", gardenType: "flower", symbol: "真" },
  { id: "private-protection", name: "私我保護任務", description: "寫下一件不想公開，但對自己重要的事。", purpose: "保護內在世界", reward: "休息菇", gardenType: "mushroom", symbol: "私" },
  { id: "slow-reply", name: "慢回覆任務", description: "不急著回訊息，先感受自己真正想不想回。", purpose: "建立社交界線", reward: "界線藤", gardenType: "vine", symbol: "界" },
  { id: "no-audience", name: "沒有觀眾任務", description: "做一件不需要被任何人知道的小事。", purpose: "建立自我價值感", reward: "安靜湖", gardenType: "lake", symbol: "靜" },
];

const gardenTypes = {
  grass: { name: "感官草", meaning: "回到身體與當下", className: "plant-grass", mark: "感", image: "assets/plants/sensory-grass.png" },
  mushroom: { name: "休息菇", meaning: "允許自己休息", className: "plant-mushroom", mark: "息", image: "assets/plants/rest-mushroom.png" },
  mirror: { name: "鏡子花", meaning: "看見比較焦慮", className: "plant-mirror", mark: "鏡", image: "assets/plants/mirror-flower.png" },
  vine: { name: "界線藤", meaning: "建立自我界線", className: "plant-vine", mark: "界", image: "assets/plants/boundary-vine.png" },
  moss: { name: "記憶苔", meaning: "保存不被觀看的回憶", className: "plant-moss", mark: "記", image: "assets/plants/memory-moss.png" },
  fruit: { name: "選擇果", meaning: "拿回選擇權", className: "plant-fruit", mark: "選", image: "assets/plants/choice-fruit.png" },
  flower: { name: "皺皺花", meaning: "接納不完美", className: "plant-flower", mark: "真", image: "assets/plants/wrinkled-flower.png" },
  lake: { name: "安靜湖", meaning: "回到非數位空間", className: "plant-lake", mark: "靜", image: "assets/plants/quiet-lake.png" },
};

const wordBanks = {
  lowEnergy: ["疲憊", "很累", "累", "想睡", "壓力", "撐", "耗", "麻木", "沒力", "沒有力氣", "不想動"],
  veryLowEnergy: ["撐不住", "快不行", "很痛苦", "很崩潰", "極累", "完全沒力氣"],
  highEnergy: ["期待", "清楚", "自在", "有力氣", "平靜", "穩定", "想探索", "好奇", "舒服"],
  publicPositive: ["積極", "開心", "冷靜", "配合", "自信", "沒事", "都可以", "很好", "穩定", "好相處", "正常"],
  privateDifficult: ["疏離", "疲憊", "害怕", "不舒服", "不確定", "焦慮", "不安", "委屈", "生氣", "空", "孤單"],
  body: ["氣味", "味道", "聲音", "觸感", "肩膀", "頭", "呼吸", "胸口", "胃", "手", "腳", "空氣", "疲憊", "雨", "悶"],
  warning: ["沒關係", "還好", "應該", "算了", "都可以", "沒事", "反正", "隨便"],
  boundaries: ["拒絕", "不舒服", "界線", "不想", "不要", "先想一下", "需要時間"],
  comparison: ["比較", "羨慕", "不夠好", "別人", "社群", "限動", "推薦", "演算法", "濾鏡"],
};

let state = loadState();
let draftProfile = { ...state.profile };
let currentFragmentModalId = null;
let currentCreatorStep = "intro";
let introSlideIndex = 0;
let introAutoplayTimer = null;

function $(selector) { return document.querySelector(selector); }
function $all(selector) { return Array.from(document.querySelectorAll(selector)); }

function setup() {
  $("#todayLabel").textContent = new Intl.DateTimeFormat("zh-Hant", { month: "long", day: "numeric", weekday: "long" }).format(new Date());
  renderProfileChoices();
  bindEvents();
  renderAll();
  decorateInterfaceIcons();
  if (!state.profileCreated) showCreator(true); else hideCreator();
}

function bindEvents() {
  $all("[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  $all("[data-view-shortcut]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.viewShortcut)));
  $("#checkinForm").addEventListener("submit", handleCheckinSubmit);
  $("#resetButton").addEventListener("click", resetData);
  $("#demoButton").addEventListener("click", loadDemoData);
  $("#editCreatureButton").addEventListener("click", () => showCreator(false));
  $("#editCreatureInline").addEventListener("click", () => showCreator(false));
  $("#profileForm").addEventListener("submit", handleProfileSubmit);
  $("#introPrevButton").addEventListener("click", () => stepIntroSlide(-1));
  $("#introNextButton").addEventListener("click", handleIntroNext);
  $("#skipIntroButton").addEventListener("click", transitionToCustomizer);
  $("#startCustomizeButton").addEventListener("click", transitionToCustomizer);
  $("#creatureName").addEventListener("input", (event) => {
    draftProfile.name = event.target.value.trim() || "小真獸";
    renderCreatorPreview();
  });
}

function bindFragmentModalEvents() {
  const modal = document.getElementById("fragmentModal");
  if (!modal || modal.dataset.bound === "true") return;
  modal.dataset.bound = "true";

  modal.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-modal-action], [data-fragment-close]");
    if (!actionTarget) return;
    event.preventDefault();
    event.stopPropagation();
    if (actionTarget.hasAttribute("data-fragment-close") || actionTarget.dataset.modalAction === "close") {
      closeFragmentModal();
      return;
    }
    if (actionTarget.dataset.modalAction === "prev") {
      stepFragmentModal(-1);
      return;
    }
    if (actionTarget.dataset.modalAction === "next") {
      stepFragmentModal(1);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (modal.getAttribute("aria-hidden") === "true") return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeFragmentModal();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepFragmentModal(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepFragmentModal(1);
    }
  });
}


function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return createInitialState();
    return normalizeState(JSON.parse(saved));
  } catch {
    return createInitialState();
  }
}
function normalizeState(parsed) {
  return {
    entries: Array.isArray(parsed.entries) ? parsed.entries : [],
    tasks: parsed.tasks && typeof parsed.tasks === "object" ? parsed.tasks : {},
    garden: Array.isArray(parsed.garden) ? parsed.garden : [],
    creature: { ...defaultCreature, ...(parsed.creature || {}) },
    profile: { ...profileDefaults, ...(parsed.profile || {}) },
    profileCreated: Boolean(parsed.profileCreated),
  };
}
function createInitialState() {
  return { entries: [], tasks: {}, garden: [], creature: { ...defaultCreature }, profile: { ...profileDefaults }, profileCreated: false };
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function renderProfileChoices() {
  Object.entries(profileOptions).forEach(([group, options]) => {
    const container = document.querySelector(`[data-choice-group="${group}"]`);
    container.innerHTML = options.map((option) => `
      <button class="choice-button" type="button" data-profile-group="${group}" data-profile-value="${option.id}">
        ${option.label}<small>${option.hint}</small>
      </button>
    `).join("");
  });
  $all("[data-profile-group]").forEach((button) => {
    button.addEventListener("click", () => {
      draftProfile[button.dataset.profileGroup] = button.dataset.profileValue;
      updateChoiceSelection();
      renderCreatorPreview();
    });
  });
}
function updateChoiceSelection() {
  $all("[data-profile-group]").forEach((button) => {
    button.classList.toggle("selected", draftProfile[button.dataset.profileGroup] === button.dataset.profileValue);
  });
  $("#creatureName").value = draftProfile.name || "";
}
function showCreator(isFirstTime) {
  draftProfile = { ...profileDefaults, ...state.profile };
  $("#creatorGate").classList.add("active");
  $("#appShell").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "hidden";
  updateChoiceSelection();
  renderCreatorPreview();
  introSlideIndex = 0;
  renderCreatorIntro();
  setCreatorStep(isFirstTime ? "intro" : "customize");
}
function hideCreator() {
  stopIntroAutoplay();
  $("#creatorGate").classList.remove("active");
  $("#appShell").removeAttribute("aria-hidden");
  document.body.style.overflow = "";
}
function setCreatorStep(step) {
  currentCreatorStep = step;
  const intro = $("#creatorIntroStep");
  const customizer = $("#creatorCustomizerStep");
  if (intro) intro.classList.toggle("active", step === "intro");
  if (customizer) customizer.classList.toggle("active", step === "customize");
  if (step === "intro") {
    renderCreatorIntro();
    startIntroAutoplay();
  } else {
    stopIntroAutoplay();
    setTimeout(() => $("#creatureName")?.focus(), 80);
  }
}
function renderCreatorIntro() {
  const slide = creatorIntroSlides[introSlideIndex] || creatorIntroSlides[0];
  $("#introWelcomeFigure").innerHTML = renderCreatureStage(slide.creature, "intro-hero", { ...profileDefaults, ...(slide.profile || {}) });
  $("#introSceneEyebrow").textContent = slide.eyebrow;
  $("#introSceneTitle").textContent = slide.title;
  $("#introSceneText").textContent = slide.text;
  $("#introLead").textContent = slide.text;
  $("#introBadges").innerHTML = slide.badges.map((badge) => `<span class="intro-badge"><span class="intro-badge-icon">${getAppIconMarkup("nav")}</span>${escapeHtml(badge)}</span>`).join("");
  $("#introLocations").innerHTML = `<div class="intro-location-list">${slide.locations.map((item) => `<div class="intro-location"><span class="intro-location-icon">${item.icon}</span><div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.copy)}</small></div></div>`).join("")}</div>`;
  $("#introSteps").innerHTML = creatorIntroSlides.map((_, index) => `<span class="intro-step ${index === introSlideIndex ? "active" : ""}" aria-hidden="true"></span>`).join("");
  $("#introPreview").innerHTML = renderCreatureStage(slide.creature, "large", { ...profileDefaults, ...(slide.profile || {}) });
  const nextButton = $("#introNextButton");
  if (nextButton) nextButton.textContent = introSlideIndex === creatorIntroSlides.length - 1 ? "開始設定" : "下一張";
}
function stepIntroSlide(direction) {
  introSlideIndex = (introSlideIndex + direction + creatorIntroSlides.length) % creatorIntroSlides.length;
  renderCreatorIntro();
  restartIntroAutoplay();
}
function handleIntroNext() {
  if (introSlideIndex === creatorIntroSlides.length - 1) {
    transitionToCustomizer();
    return;
  }
  stepIntroSlide(1);
}
function transitionToCustomizer() {
  stopIntroAutoplay();
  const intro = $("#creatorIntroStep");
  const customizer = $("#creatorCustomizerStep");
  if (!intro || !customizer) { setCreatorStep("customize"); return; }
  intro.classList.add("transition-out");
  window.setTimeout(() => {
    setCreatorStep("customize");
    intro.classList.remove("transition-out");
    customizer.classList.add("transition-in");
    window.setTimeout(() => customizer.classList.remove("transition-in"), 520);
  }, 220);
}
function startIntroAutoplay() {
  stopIntroAutoplay();
  introAutoplayTimer = window.setInterval(() => {
    if (currentCreatorStep !== "intro") return;
    introSlideIndex = (introSlideIndex + 1) % creatorIntroSlides.length;
    renderCreatorIntro();
  }, 4200);
}
function stopIntroAutoplay() {
  if (!introAutoplayTimer) return;
  window.clearInterval(introAutoplayTimer);
  introAutoplayTimer = null;
}
function restartIntroAutoplay() {
  if (currentCreatorStep !== "intro") return;
  startIntroAutoplay();
}

function handleProfileSubmit(event) {
  event.preventDefault();
  state.profile = { ...profileDefaults, ...draftProfile, name: draftProfile.name || "小真獸" };
  state.profileCreated = true;
  saveState();
  hideCreator();
  renderAll();
}
function renderCreatorPreview() {
  const prototypeSummary = [optionLabel("color", draftProfile.color), optionLabel("shape", draftProfile.shape), optionLabel("eyes", draftProfile.eyes), optionLabel("feature", draftProfile.feature), optionLabel("accessory", draftProfile.accessory), optionLabel("personality", draftProfile.personality)].join("・");
  $("#creatorPreview").innerHTML = `${renderCreatureStage({ ...state.creature, form: "glow", battery: "high", mismatch: "low", stateName: "正在被創造的小真獸" }, "large", draftProfile)}<div class="prototype-summary"><strong>目前雛型</strong><span>${escapeHtml((draftProfile.name || "小真獸") + "｜" + prototypeSummary)}</span><small>這個雛型會保留現在的可愛圖標風格，再依照你的選擇慢慢變化。</small></div>`;
}


function hasCheckinToday() {
  return state.entries.some((entry) => isSameLocalDay(new Date(entry.date), new Date()));
}
function getTodayEntry() {
  return state.entries.find((entry) => isSameLocalDay(new Date(entry.date), new Date())) || null;
}
function renderCheckin() {
  const form = $("#checkinForm");
  if (!form) return;
  const alreadyDone = hasCheckinToday();
  const todayEntry = getTodayEntry();
  const textareas = form.querySelectorAll("textarea");
  const submitButton = $("#checkinSubmitButton");
  const message = $("#checkinLimitMessage");
  textareas.forEach((field) => {
    field.disabled = alreadyDone;
    field.readOnly = alreadyDone;
    if (!alreadyDone) field.placeholder = field.getAttribute("data-original-placeholder") || field.placeholder;
    if (alreadyDone) {
      if (!field.getAttribute("data-original-placeholder")) field.setAttribute("data-original-placeholder", field.placeholder);
      field.placeholder = "今天已完成紀錄，明天再來留下新的一片真實。";
    }
  });
  if (submitButton) {
    submitButton.disabled = alreadyDone;
    submitButton.textContent = alreadyDone ? "今天已完成 Check-in" : "生成真實碎片";
  }
  if (message) {
    message.innerHTML = alreadyDone && todayEntry
      ? `<p class="callout success">你今天已經完成一次 Check-in，所以今天只會生成 1 片真實碎片。<br><small>完成時間：${escapeHtml(formatDate(todayEntry.date))}</small></p>`
      : `<p class="callout soft">每天只能輸入一次 Check-in，讓真實碎片維持一天一片的節奏。</p>`;
  }
}

function switchView(view) {
  $all(".view").forEach((section) => section.classList.remove("active"));
  const target = $(`#view-${view}`);
  if (target) target.classList.add("active");
  $all("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("active", active);
    if (button.classList.contains("nav-item")) button.setAttribute("aria-current", active ? "page" : "false");
  });
  $("#viewTitle").textContent = viewTitles[view] || "Unfiltered Me";
  closeFragmentModal();
  decorateInterfaceIcons();
}

function handleCheckinSubmit(event) {
  event.preventDefault();
  if (hasCheckinToday()) {
    renderCheckin();
    return;
  }
  const formData = {
    publicSelf: $("#publicSelf").value.trim(),
    privateSelf: $("#privateSelf").value.trim(),
    bodySignal: $("#bodySignal").value.trim(),
    unlikeMoment: $("#unlikeMoment").value.trim(),
  };
  if (!Object.values(formData).some(Boolean)) {
    $("#companionCopy").innerHTML = `<p class="callout">今天的小真獸還沒有收到線索。只要寫下一句也可以，不需要完整。</p>`;
    return;
  }
  const analysis = analyzeEntry(formData);
  const entry = { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), date: new Date().toISOString(), ...formData, analysis };
  state.entries.unshift(entry);
  state.creature = analysis.creature;
  addGardenFromEntry(entry);
  saveState();
  $("#checkinForm").reset();
  renderAll();
  switchView("fragments");
}

function analyzeEntry(entry) {
  const combined = `${entry.publicSelf} ${entry.privateSelf} ${entry.bodySignal} ${entry.unlikeMoment}`;
  const warningWords = findMatches(combined, wordBanks.warning);
  const bodySignals = findMatches(entry.bodySignal, wordBanks.body);
  const lowEnergyMatches = findMatches(combined, wordBanks.lowEnergy);
  const veryLowMatches = findMatches(combined, wordBanks.veryLowEnergy);
  const highEnergyMatches = findMatches(combined, wordBanks.highEnergy);
  const publicKeywords = findMatches(entry.publicSelf, wordBanks.publicPositive);
  const privateKeywords = findMatches(entry.privateSelf, wordBanks.privateDifficult);
  const boundaries = findMatches(combined, wordBanks.boundaries);
  const comparison = findMatches(combined, wordBanks.comparison);
  const mismatchScore = publicKeywords.length * 2 + privateKeywords.length * 2 + warningWords.length + (entry.unlikeMoment ? 2 : 0) + (comparison.length ? 1 : 0);
  const mismatch = mismatchScore >= 8 ? "high" : mismatchScore >= 4 ? "medium" : "low";
  let battery = "medium";
  if (veryLowMatches.length > 0 || lowEnergyMatches.length >= 4) battery = "veryLow";
  else if (lowEnergyMatches.length >= 1) battery = "low";
  else if (highEnergyMatches.length >= 2 && mismatch !== "high") battery = "high";
  const form = getCreatureForm({ battery, mismatch, warningWords, bodySignals, boundaries });
  const stateName = getCreatureStateName({ battery, mismatch, warningWords, bodySignals, boundaries });
  const inconsistency = getInconsistencyText({ mismatch, warningWords });
  const truthLine = getTruthLine({ battery, mismatch, boundaries, comparison });
  const reflection = getCompanionReflection({ battery, mismatch, warningWords });
  const cloudWords = makeCloudWords({ entry, warningWords, bodySignals, publicKeywords, privateKeywords, boundaries, comparison });
  return {
    battery, batteryLabel: batteryLabels[battery], mismatch, mismatchLabel: mismatchLabels[mismatch], warningWords, bodySignals, publicKeywords, privateKeywords, inconsistency, truthLine, cloudWords,
    creature: { battery, mismatch, form, stateName, warningWords, bodySignals, reflection },
  };
}
function findMatches(text, words) { return words.filter((word) => text.includes(word)); }
function getCreatureForm({ battery, mismatch, warningWords, bodySignals, boundaries }) {
  if (battery === "veryLow") return "curl";
  if (battery === "low") return "droop";
  if (boundaries.length > 0) return "boundary";
  if (mismatch === "high") return "wobble";
  if (warningWords.length > 0) return "blink";
  if (bodySignals.length > 0) return "listen";
  if (battery === "high") return "glow";
  return "settled";
}
function getCreatureStateName({ battery, mismatch, warningWords, bodySignals, boundaries }) {
  if (battery === "veryLow") return "縮成一顆安靜的小球，先把自己保護起來";
  if (battery === "low") return "披上毯子，慢慢把能量收回來";
  if (boundaries.length > 0) return "伸出界線觸角，練習溫柔地拒絕";
  if (mismatch === "high") return "左右晃動，像在找回公我與私我的重心";
  if (warningWords.length > 0) return "停下來眨眼，提醒你聽見真話";
  if (bodySignals.length > 0) return "抬頭傾聽身體傳來的感官訊號";
  if (battery === "high") return "能量發光，準備探索更多真實線索";
  return "安靜坐著，陪你留下今天的一片真實";
}
function getInconsistencyText({ mismatch, warningWords }) {
  if (mismatch === "high") return "今天的公我與私我距離偏大，像是有一個自己在撐住場面，另一個自己正在等你回頭看見。";
  if (mismatch === "medium") return "今天有一段落差值得被留下，不需要急著解釋，也不需要馬上變好。";
  if (warningWords.length > 0) return `你用了「${warningWords.join("、")}」，這可能是你把感受放到後面的線索。`;
  return "目前沒有偵測到明顯落差，今天的你可能比較接近自己。";
}
function getTruthLine({ battery, mismatch, boundaries, comparison }) {
  if (battery === "veryLow") return "今天真正的我，需要先把自己放回安全、安靜的位置。";
  if (battery === "low") return "今天真正的我，需要被允許休息，而不是立刻變好。";
  if (boundaries.length > 0) return "今天真正的我，正在練習把不舒服說成一個界線。";
  if (comparison.length > 0) return "今天真正的我，不需要被別人的生活速度定義。";
  if (mismatch === "high") return "今天真正的我，可能藏在那個沒有說出口的疲憊後面。";
  if (mismatch === "medium") return "今天真正的我，正在從扮演裡慢慢露出來。";
  return "今天真正的我，可以是一個不需要被修飾的普通片刻。";
}
function getCompanionReflection({ battery, mismatch, warningWords }) {
  const name = state?.profile?.name || "小真獸";
  if (battery === "veryLow") return `今天先不用分析自己。${name}會陪你把節奏放慢，先喝水、洗澡、早點睡，或讓自己安靜一下。`;
  if (battery === "low") return `今天的${name}能量比較低。先停止追問原因，讓身體有一點空間回來。`;
  if (warningWords.length > 0) return `你今天用了「${warningWords.join("、")}」。這些詞也許是在幫你撐住場面，但你的感受不用那麼快被整理好。`;
  if (mismatch === "high") return `${name}開始左右晃動。它不是要拆穿你，而是提醒你：那個沒被看見的自己也在場。`;
  if (battery === "high") return `今天的${name}有力氣探索。可以多問自己一句：我現在真正想靠近的是什麼？`;
  return `今天的${name}安靜眨眼。能把感受留下來，本身就是一種靠近自己。`;
}
function makeCloudWords({ entry, warningWords, bodySignals, publicKeywords, privateKeywords, boundaries, comparison }) {
  const raw = `${entry.publicSelf} ${entry.privateSelf} ${entry.bodySignal} ${entry.unlikeMoment}`.split(/[，。、；：！？\s]+/).map((word) => word.trim()).filter((word) => word.length >= 2 && word.length <= 8);
  return [...new Set([...publicKeywords, ...privateKeywords, ...warningWords, ...bodySignals, ...boundaries, ...comparison, ...raw])].slice(0, 12);
}

function addGardenFromEntry(entry) {
  const text = `${entry.publicSelf} ${entry.privateSelf} ${entry.bodySignal} ${entry.unlikeMoment}`;
  const additions = [];
  if (entry.analysis.bodySignals.length) additions.push("grass");
  if (["low", "veryLow"].includes(entry.analysis.battery)) additions.push("mushroom");
  if (findMatches(text, wordBanks.comparison).length) additions.push("mirror");
  if (findMatches(text, wordBanks.boundaries).length) additions.push("vine");
  if (text.includes("不拍照") || text.includes("沒有拍照")) additions.push("moss");
  if (text.includes("選擇") || text.includes("真正想")) additions.push("fruit");
  if (entry.analysis.mismatch !== "low") additions.push("flower");
  [...new Set(additions)].forEach((type) => addGardenItem(type, "checkin", entry.id));
}
function addGardenItem(type, source, sourceId = null, date = new Date().toISOString()) {
  if (!gardenTypes[type]) return;
  state.garden.unshift({ id: `${type}-${Date.now()}-${Math.random().toString(16).slice(2)}`, type, source, sourceId, date });
}

function renderGardenThumb(type, extraClass = "", altText = "") {
  const plant = gardenTypes[type];
  if (!plant) return "";
  const alt = altText || plant.name;
  return `<img class="garden-thumb ${extraClass}" src="${plant.image}" alt="${alt}">`;
}

function completeTask(taskId) {
  const task = taskDefinitions.find((item) => item.id === taskId);
  if (!task) return;
  const completed = Boolean(state.tasks[taskId]?.completed);
  state.tasks[taskId] = { completed: !completed, completedAt: !completed ? new Date().toISOString() : null };
  if (!completed) addGardenItem(task.gardenType, "task", task.id);
  else state.garden = state.garden.filter((item) => item.sourceId !== task.id);
  saveState();
  renderAll();
}

function renderAll() {
  renderCreature();
  renderCheckin();
  renderFragments();
  renderTasks();
  renderGarden();
  renderReport();
  decorateInterfaceIcons();
}
function renderCreature() {
  $("#heroCreature").innerHTML = renderCreatureStage(state.creature, "large");
  $("#creaturePreview").innerHTML = renderCreatureStage(state.creature, "");
  $("#creatureLarge").innerHTML = renderCreatureStage(state.creature, "large");
  $("#companionCopy").innerHTML = `<p class="callout">${escapeHtml(state.creature.reflection)}</p>`;
  const statusItems = [
    ["小真獸名稱", state.profile.name || "小真獸"],
    ["客製化外型", getProfileSummary()],
    ["Ego Battery", renderBattery(state.creature.battery), true],
    ["公我與私我落差", mismatchLabels[state.creature.mismatch] || "落差輕微"],
    ["小真獸狀態", state.creature.stateName],
    ["真話提醒", state.creature.warningWords.length ? state.creature.warningWords.join("、") : "尚未偵測到修飾語"],
    ["感官光點", state.creature.bodySignals.length ? state.creature.bodySignals.join("、") : "尚未偵測到身體或空間訊號"],
  ];
  $("#creatureStatus").innerHTML = statusItems.map(([title, value, html]) => `<article class="status-card"><h4>${title}</h4>${html ? value : `<p>${escapeHtml(value)}</p>`}</article>`).join("");
}
function getProfileSummary() {
  const p = state.profile;
  return [optionLabel("color", p.color), optionLabel("shape", p.shape), optionLabel("eyes", p.eyes), optionLabel("feature", p.feature), optionLabel("accessory", p.accessory), optionLabel("personality", p.personality)].join("、");
}
function optionLabel(group, id) { return (profileOptions[group].find((item) => item.id === id) || {}).label || id; }
function renderBattery(battery) {
  const meta = batteryMeta[battery] || batteryMeta.medium;
  const cells = Array.from({ length: 5 }, (_, index) => `<span class="battery-cell ${index < meta.level ? "filled" : ""}"></span>`).join("");
  return `<div class="battery-meter ${meta.tone}" aria-label="Ego Battery ${meta.percent}%"><div class="battery-shell">${cells}</div><span class="battery-tip" aria-hidden="true"></span><strong>${meta.percent}%</strong></div>`;
}
function renderCreatureStage(creature, sizeClass, profileOverride = null) {
  const profile = { ...profileDefaults, ...(profileOverride || state.profile) };
  const form = creature.form || "settled";
  const creatureClasses = ["creature", creature.battery, `form-${form}`, `color-${profile.color}`, `shape-${profile.shape}`, `eyes-${profile.eyes}`, `personality-${profile.personality}`].join(" ");
  const stageClasses = ["creature-stage", sizeClass, creature.mismatch === "high" ? "double-shadow" : ""].filter(Boolean).join(" ");
  return `
    <div class="${stageClasses}" aria-label="小真獸目前狀態：${escapeHtml(creature.stateName)}">
      <div class="creature-shadow"></div>
      <div class="${creatureClasses}">
        <div class="aura"></div>
        <div class="shape-bobble left"></div><div class="shape-bobble right"></div>
        ${renderFeature(profile.feature)}
        ${renderAccessory(profile.accessory)}
        <div class="creature-body"></div>
        <div class="creature-belly"></div>
        <div class="creature-highlight"></div>
        <div class="creature-heart"></div>
        <div class="eye left"><span></span></div><div class="eye right"><span></span></div>
        <div class="blush left"></div><div class="blush right"></div>
        <div class="mouth"></div>
        <div class="arm left"></div><div class="arm right"></div>
        <div class="foot left"></div><div class="foot right"></div>
        <div class="boundary-ring"></div><div class="question-mark">?</div>
        <div class="sensory-dot dot-a"></div><div class="sensory-dot dot-b"></div><div class="sensory-dot dot-c"></div>
        <div class="personality-badge">${escapeHtml(personalityLabels[profile.personality] || "陪伴型")}</div>
      </div>
    </div>`;
}
function renderFeature(feature) {
  if (feature === "leaf") return `<div class="feature leaf-main"></div><div class="feature leaf-stem"></div>`;
  if (feature === "horn") return `<div class="feature horn-left"></div><div class="feature horn-right"></div>`;
  return `<div class="feature antenna-left"></div><div class="feature antenna-right"></div><div class="feature antenna-tip left"></div><div class="feature antenna-tip right"></div>`;
}
function renderAccessory(accessory) {
  if (accessory === "blanket") return `<div class="accessory blanket always"></div>`;
  if (accessory === "backpack") return `<div class="accessory backpack"></div>`;
  if (accessory === "flower") return `<div class="accessory flower"></div>`;
  return `<div class="accessory star">★</div>`;
}

function renderFragments() {
  const orderedEntries = [...state.entries].sort((a, b) => new Date(a.date) - new Date(b.date));
  $("#entryCount").textContent = `${orderedEntries.length} 片`;
  $("#fragmentProgress").innerHTML = renderFragmentProgress(orderedEntries);
  if (!orderedEntries.length) {
    $("#fragmentList").innerHTML = `<div class="empty-state">還沒有真實碎片。完成一次 Check-in 後，這裡會開始出現你的真實拼圖碎片。</div>`;
    return;
  }
  $("#fragmentList").innerHTML = `<div class="fragment-board">${orderedEntries.map((entry, index) => renderFragmentCard(entry, index, orderedEntries.length)).join("")}</div>`;
  $all("[data-fragment-id]").forEach((button) => button.addEventListener("click", () => openFragmentModal(button.dataset.fragmentId)));
}
function renderFragmentProgress(entries) {
  const count = entries.length;
  const weekTarget = 7;
  const monthTarget = 30;
  const weekPercent = Math.min(100, Math.round((count / weekTarget) * 100));
  const monthPercent = Math.min(100, Math.round((count / monthTarget) * 100));
  const milestone = count >= 30 ? { title: "30 日完整拼圖達成！", copy: "你已經開始把一整個月的真實自我慢慢拼回來了。", tone: "gold" } : count >= 7 ? { title: "7 日拼圖解鎖！", copy: "你已經完成一週的真實拼圖，現在可以更清楚看見自己的輪廓。", tone: "green" } : { title: "正在拼回真實的自己", copy: "每一次記錄，都是把一小片自己重新放回原位。", tone: "soft" };
  return `<div class="fragment-progress-shell ${milestone.tone}"><div class="milestone-banner"><div><p class="eyebrow">Puzzle Progress</p><h4>${milestone.title}</h4><p>${milestone.copy}</p></div><div class="milestone-badge ${count >= 7 ? "active" : ""}"> ${count >= 30 ? "🏆" : count >= 7 ? "✨" : "🧩"} </div></div><div class="fragment-progress-grid"><article class="progress-card"><strong>7 日拼圖牆</strong><div class="progress-bar"><span style="width:${weekPercent}%"></span></div><p>${Math.min(count, weekTarget)}/${weekTarget} 片</p></article><article class="progress-card"><strong>30 日長期拼圖</strong><div class="progress-bar warm"><span style="width:${monthPercent}%"></span></div><p>${Math.min(count, monthTarget)}/${monthTarget} 片</p></article><article class="progress-card piece-map"><strong>本週拼圖碎片</strong><div class="piece-dots">${Array.from({length: Math.min(Math.max(count, 7), 14)}, (_, i) => `<span class="piece-dot ${i < count ? "filled" : ""}"></span>`).join("")}</div><p>點擊任一碎片可查看完整內容</p></article></div></div>`;
}
function renderFragmentCard(entry, index, total) {
  const a = entry.analysis || analyzeEntry(entry);
  const cols = 4;
  const row = Math.floor(index / cols) + 1;
  const col = (index % cols) + 1;
  const pieceTone = ["warm", "cream", "sage", "peach"][index % 4];
  const leftMode = col > 1 ? "socket" : "edge";
  const rightMode = (col < cols && index + 1 < total) ? "tab" : "edge";
  const topMode = index - cols >= 0 ? "socket" : "edge";
  const bottomMode = index + cols < total ? "tab" : "edge";
  return `<button class="fragment-piece tone-${pieceTone} left-${leftMode} right-${rightMode} top-${topMode} bottom-${bottomMode}" type="button" data-fragment-id="${entry.id}" style="--piece-row:${row}; --piece-col:${col};"><span class="puzzle-node left ${leftMode}"></span><span class="puzzle-node right ${rightMode}"></span><span class="puzzle-node top ${topMode}"></span><span class="puzzle-node bottom ${bottomMode}"></span><div class="fragment-piece-inner"><div class="fragment-piece-top"><div><p class="eyebrow">${formatShortDate(entry.date)} · 第 ${index + 1} 片</p><h4>真實碎片</h4></div><span class="tag">${a.batteryLabel} · ${a.mismatchLabel}</span></div><p class="fragment-piece-quote">${escapeHtml(a.truthLine)}</p><div class="fragment-mini-grid">${pieceCell("今日公我", entry.publicSelf || "尚未記錄")}${pieceCell("今日私我", entry.privateSelf || "尚未記錄")}${pieceCell("身體訊號", entry.bodySignal || "尚未記錄")}${pieceCell("不像自己的時刻", entry.unlikeMoment || "尚未記錄")}${pieceCell("不一致點", a.inconsistency)}${pieceCell("今日關鍵詞", (a.warningWords.length ? a.warningWords.join("、") : "真實靠近中"))}</div><div class="fragment-piece-footer"><span class="piece-progress">拼圖進度 ${index + 1}/${total}</span><span class="piece-date-full">點擊查看完整拼圖</span></div></div></button>`;
}
function pieceCell(title, value) { return `<div class="fragment-cell"><strong>${title}</strong><span>${escapeHtml(value)}</span></div>`; }
function openFragmentModal(fragmentId) {
  const orderedEntries = [...state.entries].sort((a, b) => new Date(a.date) - new Date(b.date));
  const index = orderedEntries.findIndex((entry) => entry.id === fragmentId);
  if (index === -1) return;
  currentFragmentModalId = fragmentId;
  const entry = orderedEntries[index];
  const a = entry.analysis || analyzeEntry(entry);
  const modal = document.getElementById("fragmentModal");
  document.getElementById("fragmentModalContent").innerHTML = `<div class="fragment-modal-head"><div><p class="eyebrow">Fragment Detail</p><h3 id="fragmentModalTitle">第 ${index + 1} 片真實碎片</h3></div><span class="tag">${a.batteryLabel} · ${a.mismatchLabel}</span></div><p class="fragment-modal-truth">${escapeHtml(a.truthLine)}</p><div class="fragment-modal-grid">${modalCell("日期", formatDate(entry.date))}${modalCell("今日公我", entry.publicSelf || "尚未記錄")}${modalCell("今日私我", entry.privateSelf || "尚未記錄")}${modalCell("身體訊號", entry.bodySignal || "尚未記錄")}${modalCell("不像自己的時刻", entry.unlikeMoment || "尚未記錄")}${modalCell("不一致點", a.inconsistency)}${modalCell("關鍵詞", a.warningWords.length ? a.warningWords.join("、") : "真實靠近中")}${modalCell("小真獸狀態", a.creature?.stateName || state.creature.stateName)}</div>`;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  updateFragmentModalNav(index, orderedEntries.length);
}
function updateFragmentModalNav(index, total) {
  const prevButton = document.getElementById("fragmentPrev");
  const nextButton = document.getElementById("fragmentNext");
  if (prevButton) prevButton.textContent = `上一片（${index === 0 ? total : index} / ${total}）`;
  if (nextButton) nextButton.textContent = `下一片（${index + 2 > total ? 1 : index + 2} / ${total}）`;
}
function modalCell(title, value) { return `<div class="fragment-modal-cell"><strong>${title}</strong><p>${escapeHtml(value)}</p></div>`; }
function closeFragmentModal() {
  currentFragmentModalId = null;
  const modal = document.getElementById("fragmentModal");
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
function stepFragmentModal(direction) {
  const orderedEntries = [...state.entries].sort((a, b) => new Date(a.date) - new Date(b.date));
  if (!orderedEntries.length) return;
  const currentIndex = orderedEntries.findIndex((entry) => entry.id === currentFragmentModalId);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + direction + orderedEntries.length) % orderedEntries.length;
  openFragmentModal(orderedEntries[nextIndex].id);
}
function renderTasks() {


  $("#taskGrid").innerHTML = taskDefinitions.map((task) => {
    const completed = Boolean(state.tasks[task.id]?.completed);
    const rewardPlant = gardenTypes[task.gardenType];
    return `<article class="task-card ${completed ? "completed" : ""}"><div class="task-top"><div><h4>${task.name}</h4><p>${task.description}</p></div><span class="task-symbol" aria-hidden="true">${task.symbol}</span></div><span class="tag">${task.purpose}</span><div class="task-reward"><div class="task-reward-visual">${renderGardenThumb(task.gardenType, "small", `${task.reward} 插圖`)}</div><div><p class="task-reward-title">完成後會長出「${task.reward}」</p><p class="task-reward-copy">${rewardPlant ? rewardPlant.meaning : ""}</p></div></div><button class="task-button" type="button" data-task-id="${task.id}">${completed ? "已完成，點擊可取消" : "標記完成"}</button></article>`;
  }).join("");
  $all("[data-task-id]").forEach((button) => button.addEventListener("click", () => completeTask(button.dataset.taskId)));
}
function renderGarden() {
  const weeklyPlants = getWeeklyPlantGrowth();
  const totalGrowth = weeklyPlants.reduce((sum, plant) => sum + plant.count, 0);
  const speciesCount = weeklyPlants.length;
  const entriesThisWeek = state.entries.filter((entry) => isWithinCurrentWeek(entry.date)).length;
  const levelMeta = getGardenLevel(totalGrowth);
  $("#gardenCount").textContent = `本週 ${totalGrowth} 次生長`;
  $("#gardenDashboard").innerHTML = renderGardenDashboard({ totalGrowth, speciesCount, entriesThisWeek, levelMeta, weeklyPlants });
  if (!weeklyPlants.length) {
    $("#gardenField").innerHTML = `<div class="empty-state">本週花園還在等待第一個真實片刻。完成 Check-in 或任務後，植物會從小芽開始長大。</div>`;
  } else {
    $("#gardenField").innerHTML = `<div class="garden-sky-note">${levelMeta.name} · ${levelMeta.copy}</div><div class="garden-path"></div>${weeklyPlants.map(renderPlant).join("")}`;
  }
  $("#gardenLegend").innerHTML = Object.values(gardenTypes).map((item) => `<article class="garden-chip">${renderGardenThumb(Object.keys(gardenTypes).find((key) => gardenTypes[key] === item), "legend", `${item.name} 插圖`)}<div><strong>${item.name}</strong><span>${item.meaning}</span></div></article>`).join("");
}
function renderGardenDashboard({ totalGrowth, speciesCount, entriesThisWeek, levelMeta, weeklyPlants }) {
  const favorite = [...weeklyPlants].sort((a, b) => b.count - a.count)[0];
  const nextStep = levelMeta.nextTarget ? `距離下一級還差 ${Math.max(0, levelMeta.nextTarget - totalGrowth)} 次生長` : "本週已達到最高花園等級";
  return `<div class="garden-dashboard-grid"><article class="garden-stat"><span>花園等級</span><strong>${levelMeta.name}</strong><p>${levelMeta.copy}</p></article><article class="garden-stat"><span>本週植物種類</span><strong>${speciesCount} 種</strong><p>${favorite ? `最常出現的是 ${favorite.name}` : "還沒有植物長出來"}</p></article><article class="garden-stat"><span>真實紀錄</span><strong>${entriesThisWeek} 次</strong><p>每一次真實書寫都會讓花園更飽滿。</p></article><article class="garden-stat special"><span>下一個解鎖</span><strong>${nextStep}</strong><div class="progress-bar"><span style="width:${levelMeta.progress}%"></span></div></article></div>`;
}
function getGardenLevel(totalGrowth) {
  if (totalGrowth >= 16) return { name: "繁盛花園", copy: "你已經開始穩定地照顧自己的內在世界。", progress: 100, nextTarget: null };
  if (totalGrowth >= 10) return { name: "開花花園", copy: "花園開始有明顯的層次，像你逐漸清楚的真實感受。", progress: Math.round((totalGrowth / 16) * 100), nextTarget: 16 };
  if (totalGrowth >= 5) return { name: "萌芽花園", copy: "不只是種子，你正在讓真實自己長出模樣。", progress: Math.round((totalGrowth / 10) * 100), nextTarget: 10 };
  return { name: "種子花園", copy: "只要願意留下第一片真實，花園就會開始有生命。", progress: Math.round((totalGrowth / 5) * 100), nextTarget: 5 };
}
function renderPlant(plant, index) {
  const level = Math.min(4, Math.max(1, plant.count));
  const row = Math.floor(index / 4);
  const col = index % 4;
  const left = 14 + col * 20 + (row % 2 ? 7 : 0);
  const y = 34 + row * 58;
  return `<article class="growing-plant level-${level}" style="--x:${left}%; --y:${y}px;"><div class="plant-visual">${renderGardenThumb(plant.type, "stage", `${plant.name} 插圖`)}</div><div><strong>${plant.name}</strong><span>${plant.count} 次 · ${plant.meaning}</span></div></article>`;
}
function getWeeklyPlantGrowth() {
  const counts = {};
  state.garden.filter((item) => isWithinCurrentWeek(item.date)).forEach((item) => { if (gardenTypes[item.type]) counts[item.type] = (counts[item.type] || 0) + 1; });
  return Object.entries(counts).map(([type, count]) => ({ type, count, ...gardenTypes[type] }));
}
function renderReport() {
  const weekEntries = state.entries.filter((entry) => isWithinCurrentWeek(entry.date));
  const weeklyPlants = getWeeklyPlantGrowth();
  const completedTasks = taskDefinitions.filter((task) => state.tasks[task.id]?.completed);
  const largestGap = [...weekEntries].sort((a, b) => mismatchRank(b.analysis?.mismatch) - mismatchRank(a.analysis?.mismatch))[0];
  const warningWords = countWords(weekEntries.flatMap((entry) => entry.analysis?.warningWords || []));
  const publicWords = countWords(weekEntries.flatMap((entry) => entry.analysis?.publicKeywords || []));
  const privateWords = countWords(weekEntries.flatMap((entry) => entry.analysis?.privateKeywords || []));
  const cards = [
    ["本週自我輪廓", buildWeekSummary(weekEntries)],
    ["Ego Battery", renderWeeklyBatteryFlow(weekEntries), true],
    ["最常出現的公我", topCount(publicWords) || "資料還不夠"],
    ["最常出現的私我", topCount(privateWords) || "資料還不夠"],
    ["最大落差時刻", largestGap ? `${formatShortDate(largestGap.date)}：${largestGap.analysis.mismatchLabel}` : "尚未出現"],
    ["真話提醒", topCount(warningWords) || "本週尚未偵測到修飾語"],
    ["花園生長", weeklyPlants.map((plant) => `${plant.name} ${plant.count}`).join("、") || "本週尚未生長"],
    ["反演算法任務", completedTasks.map((task) => task.name).join("、") || "本週尚未完成任務"],
    ["下週反濾鏡提醒", getWeeklyReminder(weekEntries)],
  ];
  $("#reportGrid").innerHTML = cards.map(([title, value, html]) => `<article class="report-card"><h4>${title}</h4>${html ? value : `<p>${escapeHtml(value)}</p>`}</article>`).join("");
}
function buildWeekSummary(entries) {
  if (!entries.length) return "完成一次 Check-in 後，小真獸會開始整理本週的自我輪廓。";
  const lowCount = entries.filter((entry) => ["low", "veryLow"].includes(entry.analysis?.battery)).length;
  const highGapCount = entries.filter((entry) => entry.analysis?.mismatch === "high").length;
  if (lowCount >= Math.max(2, entries.length / 2)) return "這週的你像一張正在慢慢降噪的底片，最重要的不是更亮，而是先把自己安放好。";
  if (highGapCount >= Math.max(2, entries.length / 2)) return "這週的你像一幅正在拼合的雙面肖像，一面應付世界，一面把私我找回來。";
  return "這週的你正在累積自己的形狀，每一片真實碎片都讓小真獸更清楚。";
}
function renderWeeklyBatteryFlow(entries) {
  if (!entries.length) return "<p>完成 Check-in 後會出現本週能量格。</p>";
  return `<div class="weekly-battery-flow">${entries.slice().reverse().map((entry) => { const meta = batteryMeta[entry.analysis?.battery || "medium"] || batteryMeta.medium; return `<span class="battery-dot ${meta.tone}" title="${formatShortDate(entry.date)} ${meta.percent}%"></span>`; }).join("")}</div>`;
}
function getWeeklyReminder(entries) {
  if (!entries.length) return "先完成一次 Check-in，小真獸會從第一片真實開始觀察。";
  if (entries.some((entry) => ["veryLow", "low"].includes(entry.analysis?.battery))) return "下週可以少扮演一點沒事的人，先替身體留下休息的位置。";
  if (entries.some((entry) => entry.analysis?.mismatch === "high")) return "下週可以觀察：我是不是太快把真正的感受藏起來。";
  return "下週可以繼續保留那些不需要被演算法看見的小片刻。";
}

function resetData() {
  if (!window.confirm("確定要清除所有本機紀錄嗎？這會重置碎片、任務、花園與小真獸。")) return;
  state = createInitialState();
  draftProfile = { ...state.profile };
  saveState();
  renderAll();
  switchView("home");
  showCreator(true);
}
function loadDemoData() {
  const now = new Date();
  const demoProfile = { name: "Mimi", color: "green", shape: "fluffy", eyes: "shy", feature: "leaf", accessory: "flower", personality: "companion" };
  const demoEntries = [
    { daysAgo: 6, publicSelf: "我今天看起來很配合，也一直說都可以。", privateSelf: "其實有點累，還有一點委屈，想慢慢把步調放下來。", bodySignal: "肩膀很緊，呼吸有點淺，手心微微發熱。", unlikeMoment: "明明不太想答應，卻還是先說了沒關係。" },
    { daysAgo: 5, publicSelf: "我表面上很冷靜，像是沒有被影響。", privateSelf: "看到朋友的限動和社群貼文時，我開始比較，覺得自己不夠好。", bodySignal: "胸口悶悶的，走廊裡有一點冷冷的風。", unlikeMoment: "我一直滑推薦內容，卻忘了自己真正想看什麼。" },
    { daysAgo: 4, publicSelf: "我看起來還是很有精神，也很想把事情做好。", privateSelf: "其實有點不舒服，也需要一點自己的空間。", bodySignal: "胃悶悶的，脖子僵僵的。", unlikeMoment: "訊息跳出來時，我第一次先說我想一下、需要時間。" },
    { daysAgo: 3, publicSelf: "我今天看起來很平靜，沒有特別想表現什麼。", privateSelf: "內心其實很柔軟，也想留下一個只屬於自己的時刻。", bodySignal: "傍晚的風很涼，天空有橘色的光，鞋底踩在地上很實。", unlikeMoment: "看到漂亮的夕陽時，我沒有拍照，只在心裡記住那個瞬間。" },
    { daysAgo: 2, publicSelf: "我今天看起來很正常，像平常一樣在做事。", privateSelf: "其實我開始想拿回選擇權，不想一直跟著演算法走。", bodySignal: "耳邊的音樂很清楚，手指滑手機時有點乾。", unlikeMoment: "我沒有點推薦影片，而是選擇真正想讀的一篇文章。" },
    { daysAgo: 1, publicSelf: "我對外看起來還是撐得住，也努力保持開心。", privateSelf: "其實我非常疲憊，只想休息，不想再表演自己很好。", bodySignal: "眼睛酸酸的，頭有點重，整個人沒力。", unlikeMoment: "我第一次承認自己真的累了，晚上提早去睡。" },
    { daysAgo: 0, publicSelf: "我今天看起來比較自在，也有力氣把注意力放回自己。", privateSelf: "內心平靜很多，想保留一些沒有觀眾的小小快樂。", bodySignal: "空氣很舒服，腳步慢下來時，聞到樹葉和陽光的味道。", unlikeMoment: "我去散步、沒有急著回訊息，也做了一件沒有人知道的小事。" },
  ];
  const demoTaskIds = ["five-senses", "no-photo", "slow-reply", "anti-recommend", "private-protection", "no-performance", "no-audience"];
  state = createInitialState();
  state.profile = demoProfile;
  state.profileCreated = true;
  demoEntries.forEach((item) => {
    const date = new Date(now);
    date.setDate(now.getDate() - item.daysAgo);
    date.setHours(20, 10, 0, 0);
    const formData = { publicSelf: item.publicSelf, privateSelf: item.privateSelf, bodySignal: item.bodySignal, unlikeMoment: item.unlikeMoment };
    const analysis = analyzeEntry(formData);
    const entry = { id: `demo-${item.daysAgo}`, date: date.toISOString(), ...formData, analysis };
    state.entries.unshift(entry);
    state.creature = analysis.creature;
    addGardenFromEntry(entry);
  });
  demoTaskIds.forEach((taskId, index) => {
    const task = taskDefinitions.find((item) => item.id === taskId);
    const date = new Date(now);
    date.setDate(now.getDate() - (6 - index));
    date.setHours(21, 0, 0, 0);
    state.tasks[taskId] = { completed: true, completedAt: date.toISOString() };
    addGardenItem(task.gardenType, "task", task.id, date.toISOString());
  });
  // 額外讓花園更豐富一些
  [
    ["flower", 2], ["grass", 1], ["mirror", 4], ["vine", 0], ["moss", 3], ["fruit", 2], ["mushroom", 1], ["lake", 0]
  ].forEach(([type, daysAgo]) => {
    const bonusDate = new Date(now);
    bonusDate.setDate(now.getDate() - daysAgo);
    bonusDate.setHours(18, 30, 0, 0);
    addGardenItem(type, "bonus", `bonus-${type}-${daysAgo}`, bonusDate.toISOString());
  });
  saveState();
  renderAll();
  hideCreator();
  switchView("home");
}

function countWords(words) { return words.reduce((counts, word) => { if (word) counts[word] = (counts[word] || 0) + 1; return counts; }, {}); }
function topCount(counts) { return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([word, count]) => `${word} (${count})`).join("、"); }
function mismatchRank(mismatch) { return { low: 1, medium: 2, high: 3 }[mismatch] || 0; }
function isSameLocalDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isWithinCurrentWeek(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const start = new Date(now);
  const day = start.getDay() || 7;
  start.setDate(start.getDate() - day + 1);
  start.setHours(0, 0, 0, 0);
  return date >= start;
}
function formatDate(dateString) { return new Intl.DateTimeFormat("zh-Hant", { month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(dateString)); }
function formatShortDate(dateString) { return new Intl.DateTimeFormat("zh-Hant", { month: "numeric", day: "numeric" }).format(new Date(dateString)); }
function escapeHtml(value) { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;"); }

window.openFragmentModal = openFragmentModal;
window.closeFragmentModal = closeFragmentModal;
window.stepFragmentModal = stepFragmentModal;
document.addEventListener("DOMContentLoaded", setup);
