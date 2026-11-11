const projects = [
  {
    name: "MovieFinder",
    description:
      "A personal project for a Competency Certification Exam. A project designed for users who want to discover movies or TV series based on general context using AI.",
    note: "For Competency Certification Exam project",
    image: "assets/images/projects/moviefinder.png",
    url: "",
  },
  {
    name: "Warehouse Management System",
    description:
      "A project designed for schools that offer a new major: Logistics Management. This project supports digital and technology-based learning activities.",
    note: "Restricted, just only for school",
    image: "assets/images/projects/wms.png",
    url: "",
  },
  {
    name: "Internship Monitoring",
    description:
      "A project I developed for my own monitoring purposes during my internship. The project is intended for teachers to use in monitoring students who are participating in internships.",
    note: "",
    image: "assets/images/projects/internship.png",
    url: "https://smkn20jktmagang.great-site.net/",
  },
  {
    name: "Visitor Management System",
    description:
      "A project I worked on during my internship at a company with a friend. This project was created to meet the need for a system to manage meeting schedules at an office.",
    note: "For internship project",
    image: "assets/images/projects/vms.png",
    url: "",
  },
  {
    name: "Bank Madani Syariah",
    description:
      "is my next project, in which I'm collaborating directly with students from one of the school's departments: Sharia Banking Services. We're building a banking website based on data they've collected. This website is being developed as a group project.",
    note: "",
    image: "assets/images/projects/bank-madani.png",
    url: "https://madanisyariah.great-site.net/",
  },
  {
    name: "SportNews",
    description:
      "is a dynamic project from my class. It was inspired by a news website theme assigned by my teacher, and it also became my first project. I drew inspiration for the layout and design from iNews, detikcom, and Kompas.com.",
    note: "Learning projects only",
    image: "assets/images/projects/sportnews.png",
    url: "",
  },
];

const skills = {
  coding: [
    { name: "HTML", icon: "html.svg" },
    { name: "CSS", icon: "css.svg" },
    { name: "JavaScript", icon: "js.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "SQL", icon: "sql.svg" },
    { name: "Laravel", icon: "laravel.svg" },
    { name: "Tailwind CSS", icon: "tailwind.svg" },
    { name: "MySQL", icon: "mysql.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
  ],
  tools: [
    { name: "Visual Studio Code", icon: "vscode.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "Laragon", icon: "laragon.svg" },
    { name: "Figma", icon: "figma.svg" },
    { name: "Claude", icon: "claude.svg" },
    { name: "Canva", icon: "canva.svg" },
    { name: "ChatGPT", icon: "chatgpt.svg" },
  ],
  soft: [
    { name: "Problem Solving", icon: "problem-solving.svg" },
    { name: "Teamwork", icon: "teamwork.svg" },
    { name: "Time Management", icon: "time-management.svg" },
    { name: "Communication", icon: "communication.svg" },
    { name: "Critical Thinking", icon: "critical thinking.svg" },
    { name: "Creative", icon: "creative.svg" },
    { name: "Detail", icon: "detail.svg" },
  ],
};

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Me",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact Me",
    heroGreeting: "Hi, I'm",
    heroRole: "Software Engineering Student.",
    heroProjects: "View my projects",
    heroAbout: "About myself",
    scrollExplore: "SCROLL TO EXPLORE",
    aboutLabel: "01 — A little stories about me",
    aboutOpening: "Hello, my name is Maliq.",
    aboutParagraph1:
      "I am a Software Engineering student with a strong interest in technology and new ideas. To me, Software Engineering is more than a field of study. It is a stepping stone toward understanding how technology develops and how an idea can become something real. My curiosity drives me to keep experimenting, learn from my mistakes, and follow the changes happening in the technology world.",
    aboutParagraph2:
      "This website is a record of my learning journey. Here I collect the projects I have built, and it will keep growing over time.",
    readStories: "Read my stories",
    projectsLabel: "02 — This is all of my works",
    projectsTitle: "Projects",
    folderHint: "Click to see all projects",
    projectIntro:
      "This is where I document all of my projects—from the most recent ones to the ones I worked on before that.",
    skillsLabel: "03 — That helps me",
    skillsTitle: "Skills that connect.",
    skillsDescription:
      "Good digital work lives where technology, craft, and collaboration meet.",
    coding: "Coding",
    tools: "Tools",
    softSkills: "Soft Skills",
    contactLabel: "04 — LET'S MAKE SOMETHING GOOD",
    contactTitle1: "Have an idea?",
    contactTitle2: "Let's talk it through.",
    contactDescription:
      "I am always happy to meet thoughtful people, hear new perspectives, and explore meaningful work together.",
    backHome: "Back →",
    aboutBreadcrumb: "About me",
    aboutTitle1: "I confident",
    aboutTitle2: "I curious",
    aboutTitle3: "I increased.",
    aboutBelief:
      "I believe that a good piece of work is not just about its appearance or function. What matters most is whether it respects the people who use it. That belief guides the way I learn, collaborate, and create.",
    pathTitle: "My Early",
    pathHand: "Path.",
    pathQuote:
      "Each chapter introduces me some new knowledge, a broader perspective, and another reason to keep learning.",
    education: "Education",
    switchStory: "↻ Switch story",
    educationMiddle:
      "As I moved up to middle school, I began to explore my identity—from discovering my hobbies to figuring out my future path.",
    educationHigh:
      "Moving up another level, I finally enrolled in a vocational school. I chose software engineering as my major. And from that point on, my interests, talents, and life path became even clearer—from my career plans to my life during college.",
    journeyClosing1: "That is my",
    journeyClosing2: "journey",
    journeyClosing3: "so far.",
    returnHome: "← RETURN HOME",
  },
  id: {
    navHome: "Beranda",
    navAbout: "Tentang Saya",
    navProjects: "Proyek",
    navSkills: "Keahlian",
    navContact: "Hubungi Saya",
    heroGreeting: "Hai, saya",
    heroRole: "Pelajar Rekayasa Perangkat Lunak.",
    heroProjects: "Lihat proyek saya",
    heroAbout: "Tentang diri saya",
    scrollExplore: "GULIR UNTUK MENJELAJAH",
    aboutLabel: "01 — Sedikit cerita tentang saya",
    aboutOpening: "Halo, nama saya Maliq.",
    aboutParagraph1:
      "Saya adalah pelajar Rekayasa Perangkat Lunak yang memiliki ketertarikan besar pada teknologi dan gagasan baru. Bagi saya, Rekayasa Perangkat Lunak lebih dari sekadar bidang studi. Ini adalah pijakan untuk memahami perkembangan teknologi dan cara mewujudkan sebuah gagasan. Rasa ingin tahu mendorong saya untuk terus bereksperimen, belajar dari kesalahan, dan mengikuti perubahan di dunia teknologi.",
    aboutParagraph2:
      "Situs ini merupakan catatan perjalanan belajar saya. Di sini saya mengumpulkan proyek yang telah saya buat, dan isinya akan terus bertambah.",
    readStories: "Baca cerita saya",
    projectsLabel: "02 — Inilah karya-karya saya",
    projectsTitle: "Proyek",
    folderHint: "Klik untuk melihat semua proyek",
    projectIntro:
      "Di sini saya mendokumentasikan semua proyek, mulai dari yang terbaru hingga yang pernah saya kerjakan sebelumnya.",
    skillsLabel: "03 — Hal yang membantu saya",
    skillsTitle: "Keahlian yang saling terhubung.",
    skillsDescription:
      "Karya digital yang baik memadukan teknologi, keterampilan, dan kolaborasi.",
    coding: "Pemrograman",
    tools: "Perangkat",
    softSkills: "Keterampilan Interpersonal",
    contactLabel: "04 — MARI CIPTAKAN SESUATU YANG BAIK",
    contactTitle1: "Punya gagasan?",
    contactTitle2: "Mari kita bicarakan.",
    contactDescription:
      "Saya senang bertemu orang-orang yang penuh pertimbangan, mendengar sudut pandang baru, dan menjajaki karya yang bermakna.",
    backHome: "Kembali →",
    aboutBreadcrumb: "Tentang saya",
    aboutTitle1: "Saya percaya diri",
    aboutTitle2: "Saya ingin tahu",
    aboutTitle3: "Saya berkembang.",
    aboutBelief:
      "Saya percaya bahwa karya yang baik tidak hanya dinilai dari tampilan atau fungsinya. Hal terpenting adalah apakah karya itu menghormati orang yang menggunakannya. Keyakinan tersebut memandu cara saya belajar, bekerja sama, dan berkarya.",
    pathTitle: "Perjalanan",
    pathHand: "Awal.",
    pathQuote:
      "Setiap bab memberi saya pengetahuan baru, sudut pandang yang lebih luas, dan alasan lain untuk terus belajar.",
    education: "Pendidikan",
    switchStory: "↻ Ganti cerita",
    educationMiddle:
      "Saat memasuki sekolah menengah pertama, saya mulai mengenali jati diri—mulai dari menemukan hobi hingga merencanakan masa depan.",
    educationHigh:
      "Pada jenjang berikutnya, saya masuk sekolah kejuruan dan memilih jurusan Rekayasa Perangkat Lunak. Sejak saat itu, minat, bakat, dan arah hidup saya semakin jelas, mulai dari rencana karier hingga kehidupan kuliah.",
    journeyClosing1: "Begitulah",
    journeyClosing2: "perjalanan",
    journeyClosing3: "saya sejauh ini.",
    returnHome: "← KEMBALI KE BERANDA",
  },
};

const education = [
  {
    school: "SDS NIAGA EKASARI",
    years: "2015 — 2018",
    description:
      "Back then, it was my first time starting school. It was the first place that taught me how to think, speak, and build my self-confidence",
  },
  {
    school: "SDN 04 BINTARO",
    years: "2018 — 2021",
    description:
      "After three years at my previous elementary school, I decided to transfer to this one. There, I learned even more about respecting differences and staying true to myself without following in others' footsteps.",
  },
  {
    school: "SMPN 10 TANGERANG SELATAN",
    years: "2021 — 2024",
    description:
      "As I moved up to middle school, I began to explore my identity—from discovering my hobbies to figuring out my future path.",
  },
  {
    school: "SMKN 20 JAKARTA",
    years: "2024 — Now",
    description:
      "Moving up another level, I finally enrolled in a vocational school. I chose software engineering as my major. And from that point on, my interests, talents, and life path became even clearer—from my career plans to my life during college.",
  },
];

const contactLinks = {
  email: "elmaliqsakbar99@gmail.com",
  linkedin: "https://www.linkedin.com/in/elmaliq-safatoriq-akbar-550847388/",
  instagram: "https://www.instagram.com/maliqsjx/",
  whatsapp: "6285216318190",
};
