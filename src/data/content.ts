export const portfolioData = {
  hero: {
    name: "Yudho Prameswara",
    role: "Frontend Developer",
    headline: "Building Scalable Enterprise Web Applications.",
    description: "I'm a Frontend Developer with 2 years of professional IT experience, specializing in Angular and Vue. Previously worked as a Full Stack Developer with Java Spring Boot. Strong background in dashboard visualization, document management, and enterprise-scale solutions.",
  },
  about: {
    title: "About Me",
    content: "With a Bachelor's degree in Physics Engineering from Telkom University and training as a Full Stack Developer, I have transitioned into crafting user-friendly enterprise applications. I excel in translating complex UI/UX designs into high-quality components and building transactional systems. From Angular and Vue on the frontend to Java Spring Boot under the hood—I ensure every application is robust, scalable, and optimized for real-world enterprise needs."
  },
  skills: [
    { 
      category: "Frontend", 
      items: ["Angular (v16–20)", "Vue 3", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] 
    },
    { 
      category: "UI & Libraries", 
      items: ["Angular Material", "Vuetify", "TinyMCE", "CK Editor", "ApexCharts", "Chart.js", "jsPDF"] 
    },
    { 
      category: "Backend & Tools", 
      items: ["Java (Spring Boot, MVC)", "MSSQL / PostgreSQL", "Git / GitLab CI/CD", "Docker", "REST API", "Figma"] 
    }
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Indocyber Global Technology",
      duration: "2024 – Present",
      description: "Working on enterprise-scale projects for PLN. Upgraded systems from Angular v14 to v18, integrated TinyMCE for rich-text editing/PDF generation, built Vue+TypeScript interactive dashboards using ApexCharts, and implemented complete master CRUD modules."
    },
    {
      role: "Full Stack Developer",
      company: "Indocyber Global Technology",
      duration: "2023 – 2024",
      description: "Developed a Library Management System using Java Spring Boot (MVC) and JavaScript. Implemented secure JWT authentication, transactional backend logic for borrowing/penalties, and designed relational schemas in MSSQL Server."
    }
  ],
  projects: [
    {
      title: "AMS Corporate System (PLN)",
      techStack: ["Angular 18", "TypeScript", "TinyMCE", "PDF"],
      description: "Internal correspondence system for corporate document workflows. Integrated rich-text editing and dynamic PDF generation/validation modules. Upgraded architecture for better performance.",
      image: "/placeholder1.png",
      gitHubLink: "#",
      liveLink: "#"
    },
    {
      title: "Business Development Control Tower",
      techStack: ["Vue 3", "ApexCharts", "TypeScript"],
      description: "Developed interactive business monitoring dashboards utilizing ApexCharts, and built robust master CRUD modules using reusable frontend components.",
      image: "/placeholder2.png",
      gitHubLink: "#",
      liveLink: "#"
    },
    {
      title: "Digital Asset Management System (DAMS)",
      techStack: ["Vue", "TypeScript", "Vuetify"],
      description: "Developed responsive user interfaces by translating complex UI/UX designs. Implemented custom photos, video, and document viewer integrations.",
      image: "/placeholder3.png",
      gitHubLink: "#",
      liveLink: "#"
    },
    {
      title: "Library Management System",
      techStack: ["Java Spring Boot", "JavaScript", "MSSQL"],
      description: "A Full Stack Enterprise Application featuring user management, borrowing/return transactions, penalty logic, and completely secured using JWT authentication.",
      image: "/placeholder4.png",
      gitHubLink: "#",
      liveLink: "#"
    }
  ],
  contact: {
    email: "yudhoprameswara@gmail.com",
    linkedin: "https://linkedin.com/in/yudhoprameswara",
    github: "https://github.com/yudhoprameswara",
    phone: "083813111189"
  }
};
