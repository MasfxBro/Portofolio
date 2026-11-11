const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
let currentLanguage = "en";
let currentProject = 0;
let activeSkill = "coding";

function readLanguage() {
  try {
    const saved = localStorage.getItem("maliq-language");
    return saved === "id" ? "id" : "en";
  } catch (error) {
    console.warn("Preferensi bahasa tidak dapat dibaca.", error);
    return "en";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("maliq-language", language);
  } catch (error) {
    console.warn("Preferensi bahasa tidak dapat disimpan.", error);
  }
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = translations[language][element.dataset.i18n];
    if (translation) element.textContent = translation;
  });
  document.querySelectorAll(".language-toggle").forEach((button) => {
    button.setAttribute(
      "aria-label",
      language === "en"
        ? "Change language to Indonesian"
        : "Ganti bahasa ke Inggris",
    );
  });
  document.querySelectorAll(".education__switch").forEach((button) => {
    button.setAttribute(
      "aria-label",
      language === "en"
        ? "Switch elementary school story"
        : "Ganti cerita sekolah dasar",
    );
  });
  renderProject();
  renderSkills(activeSkill);
  renderElementaryStory();
}

function setupLanguageToggle() {
  currentLanguage = readLanguage();
  document.querySelectorAll(".language-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = currentLanguage === "en" ? "id" : "en";
      saveLanguage(nextLanguage);
      applyLanguage(nextLanguage);
    });
  });
  applyLanguage(currentLanguage);
}

function setupMobileNavigation() {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
    menu.classList.toggle("is-open", !expanded);
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      menu.classList.remove("is-open");
    });
  });
}

function setupScrollSpy() {
  const links = [...document.querySelectorAll(".nav__link")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle(
            "is-active",
            link.hash === `#${entry.target.id}`,
          ),
        );
      });
    },
    { rootMargin: "-35% 0px -55% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
}

function renderProject() {
  const content = document.querySelector("#project-content");
  if (
    !content ||
    !document.querySelector("#project-folder").classList.contains("is-open")
  )
    return;
  const project = projects[currentProject];
  const translatedDescriptions = {
    id: [
      "Proyek pribadi untuk Uji Sertifikasi Kompetensi. Proyek ini membantu pengguna menemukan film atau serial TV berdasarkan konteks umum menggunakan AI.",
      "Proyek untuk sekolah yang membuka jurusan baru: Manajemen Logistik. Proyek ini mendukung kegiatan pembelajaran berbasis digital dan teknologi.",
      "Proyek pemantauan yang saya kembangkan untuk keperluan pribadi selama menjalani magang. Proyek ini ditujukan bagi guru untuk memantau siswa yang sedang magang.",
      "Proyek yang saya kerjakan bersama seorang teman selama magang di sebuah perusahaan. Proyek ini dibuat untuk memenuhi kebutuhan pengelolaan jadwal pertemuan di kantor.",
      "adalah proyek yang sedang saya kembangkan bersama siswa dari salah satu jurusan di sekolah, yaitu Layanan Perbankan Syariah. Kami membangun situs perbankan berdasarkan data yang mereka kumpulkan. Situs ini dikembangkan sebagai proyek kelompok.",
      "adalah proyek kelas yang dinamis. Proyek ini terinspirasi dari tugas bertema situs berita yang diberikan guru dan menjadi proyek pertama saya. Saya mengambil inspirasi tata letak dan desain dari iNews, detikcom, dan Kompas.com.",
    ],
    en: projects.map((item) => item.description),
  };
  const notes =
    currentLanguage === "id"
      ? [
          "Proyek Uji Sertifikasi Kompetensi",
          "Terbatas, hanya untuk sekolah",
          "",
          "Proyek magang",
          "",
          "Proyek pembelajaran",
        ]
      : projects.map((item) => item.note);
  const description = translatedDescriptions[currentLanguage][currentProject];
  content.innerHTML = `<p><strong><em>${project.name}</em></strong> ${description}</p>${project.url ? `<a class="project-window__link" href="${project.url}" target="_blank" rel="noopener noreferrer">Check the web ↗</a>` : ""}${notes[currentProject] ? `<p class="project-window__note">${notes[currentProject]}</p>` : ""}`;
  document.querySelector("#project-window-title").textContent = project.name;
  document.querySelector("#project-count").textContent =
    `${currentProject + 1} / ${projects.length}`;
  const preview = document.querySelector(".project-folder__preview");
  preview.hidden = false;
  preview.src = project.image;
  preview.alt = `${project.name} screenshot`;
  preview.onerror = () => {
    preview.hidden = true;
    console.error(`Gambar proyek tidak dapat dimuat: ${project.image}`);
  };
  document.querySelector('[data-project-step="-1"]').hidden =
    currentProject === 0;
  document.querySelector('[data-project-step="1"]').hidden =
    currentProject === projects.length - 1;
}

function setProjectOpen(isOpen) {
  const folder = document.querySelector("#project-folder");
  if (!folder) return;
  folder.classList.toggle("is-open", isOpen);
  folder.setAttribute("aria-expanded", String(isOpen));
  folder.setAttribute(
    "aria-label",
    isOpen ? "Close project folder" : "Open project folder",
  );
  document.querySelector(".project-controls").hidden = !isOpen;
  if (isOpen) renderProject();
  else {
    currentProject = 0;
    document.querySelector("#project-content").innerHTML =
      `<p class="project-window__intro" data-i18n="projectIntro">${translations[currentLanguage].projectIntro}</p>`;
    document.querySelector("#project-window-title").textContent = "";
  }
}

function setupProjects() {
  const folder = document.querySelector("#project-folder");
  if (!folder) return;
  folder.addEventListener("click", () =>
    setProjectOpen(!folder.classList.contains("is-open")),
  );
  if ("IntersectionObserver" in window) {
    const preloadObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        const image = new Image();
        image.src = projects[0].image;
        image.onerror = () =>
          console.error(
            `Gambar proyek tidak dapat dimuat: ${projects[0].image}`,
          );
        observer.disconnect();
      },
      { rootMargin: "150px" },
    );
    preloadObserver.observe(folder);
  }
  document.querySelectorAll("[data-project-step]").forEach((button) => {
    button.addEventListener("click", () => {
      currentProject = Math.max(
        0,
        Math.min(
          projects.length - 1,
          currentProject + Number(button.dataset.projectStep),
        ),
      );
      renderProject();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (
      !folder.classList.contains("is-open") ||
      event.target.closest("a, button, input, textarea")
    )
      return;
    if (event.key === "ArrowRight")
      currentProject = Math.min(projects.length - 1, currentProject + 1);
    else if (event.key === "ArrowLeft")
      currentProject = Math.max(0, currentProject - 1);
    else return;
    renderProject();
  });
  let touchStart = 0;
  folder.addEventListener(
    "touchstart",
    (event) => {
      touchStart = event.changedTouches[0].clientX;
    },
    { passive: true },
  );
  folder.addEventListener(
    "touchend",
    (event) => {
      if (!folder.classList.contains("is-open")) return;
      const delta = event.changedTouches[0].clientX - touchStart;
      if (Math.abs(delta) < 40) return;
      currentProject = Math.max(
        0,
        Math.min(projects.length - 1, currentProject + (delta < 0 ? 1 : -1)),
      );
      renderProject();
    },
    { passive: true },
  );
}

function renderSkills(category) {
  const grid = document.querySelector("#skills-grid");
  if (!grid) return;
  activeSkill = category;
  const labels = {
    en: { coding: "Coding", tools: "Tools", soft: "Soft Skills" },
    id: {
      coding: "Pemrograman",
      tools: "Perangkat",
      soft: "Keterampilan Interpersonal",
    },
  };
  grid.innerHTML = "";
  skills[category].forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card";
    const image = document.createElement("img");
    image.src = `assets/icons/${skill.icon}`;
    image.alt = "";
    image.width = 48;
    image.height = 48;
    image.loading = "lazy";
    image.onerror = () => {
      image.replaceWith(
        Object.assign(document.createElement("span"), {
          className: "skill-card__fallback",
          textContent: skill.name.slice(0, 1),
        }),
      );
      console.error(`Ikon keahlian tidak dapat dimuat: ${skill.icon}`);
    };
    const name = document.createElement("span");
    name.textContent = skill.name;
    card.append(image, name);
    grid.append(card);
  });
  document.querySelectorAll("[data-skill-tab]").forEach((tab) => {
    const selected = tab.dataset.skillTab === category;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  const activeTab = document.querySelector(`[data-skill-tab="${category}"]`);
  document
    .querySelector("#skill-panel")
    .setAttribute("aria-labelledby", activeTab.id);
  document.querySelector("#skills-symbol").textContent =
    category === "coding" ? "</>" : category === "tools" ? "⌘" : "••";
  document
    .querySelector("#skills-symbol")
    .setAttribute("aria-label", labels[currentLanguage][category]);
}

function setupSkillTabs() {
  const tabs = [...document.querySelectorAll("[data-skill-tab]")];
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => renderSkills(tab.dataset.skillTab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key))
        return;
      event.preventDefault();
      const nextIndex =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? tabs.length - 1
            : (index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) %
              tabs.length;
      tabs[nextIndex].focus();
      renderSkills(tabs[nextIndex].dataset.skillTab);
    });
  });
}

function setupHeroChoices() {
  const choices = [...document.querySelectorAll(".hero__choice")];
  choices.forEach((choice) => {
    choice.addEventListener("mouseenter", () => {
      if (matchMedia("(hover: hover)").matches)
        choices.forEach((item) =>
          item.classList.toggle("is-primary", item === choice),
        );
    });
    choice.addEventListener("focus", () =>
      choices.forEach((item) =>
        item.classList.toggle("is-primary", item === choice),
      ),
    );
  });
  document
    .querySelector(".hero__actions")
    ?.addEventListener("mouseleave", () => {
      choices.forEach((item, index) =>
        item.classList.toggle("is-primary", index === 0),
      );
    });
}

function renderElementaryStory() {
  const school = document.querySelector("#elementary-school");
  if (!school) return;
  const entries =
    currentLanguage === "id"
      ? [
          {
            school: "SDS NIAGA EKASARI",
            years: "2015 — 2018",
            description:
              "Saat itu, saya pertama kali memulai sekolah. Di tempat inilah saya belajar berpikir, berbicara, dan membangun rasa percaya diri.",
          },
          {
            school: "SDN 04 BINTARO",
            years: "2018 — 2021",
            description:
              "Setelah tiga tahun di sekolah dasar sebelumnya, saya memutuskan pindah ke sekolah ini. Saya belajar menghargai perbedaan dan tetap menjadi diri sendiri tanpa mengikuti langkah orang lain.",
          },
        ]
      : education.slice(0, 2);
  const entry = entries[window.elementaryStoryIndex || 0];
  school.textContent = entry.school;
  document.querySelector("#elementary-years").textContent = entry.years;
  document.querySelector("#elementary-description").textContent =
    entry.description;
}

function setupElementaryStory() {
  const button = document.querySelector(".education__switch");
  if (!button) return;
  window.elementaryStoryIndex = 0;
  button.addEventListener("click", () => {
    window.elementaryStoryIndex = window.elementaryStoryIndex === 0 ? 1 : 0;
    const item = document.querySelector("#elementary-entry");
    item.classList.add("is-changing");
    window.setTimeout(
      () => {
        renderElementaryStory();
        item.classList.remove("is-changing");
      },
      reducedMotion ? 0 : 140,
    );
  });
}

function setupContactLinks() {
  document.querySelectorAll("[data-contact]").forEach((link) => {
    const type = link.dataset.contact;
    const destination = contactLinks[type];
    if (!destination) return;
    if (type === "email") {
      link.href = destination.startsWith("mailto:")
        ? destination
        : `mailto:${destination}?subject=Hello%20Maliq`;
    } else if (type === "whatsapp") {
      link.href = `https://wa.me/${destination}?text=${encodeURIComponent("Hi nice to meet you!")}`;
    } else {
      link.href = destination;
    }
    if (type !== "email") {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    link.setAttribute(
      "aria-label",
      `${type[0].toUpperCase()}${type.slice(1)} contact`,
    );
  });
}

function init() {
  setupLanguageToggle();
  setupMobileNavigation();
  setupScrollSpy();
  setupReveal();
  setupProjects();
  setupSkillTabs();
  setupHeroChoices();
  setupElementaryStory();
  setupContactLinks();
}

init();
