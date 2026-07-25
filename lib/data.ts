export type Project = {
  slug: string;
  hash: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  techStack: string[];
  tags: string[];
  repoUrl: string;
  role: string;
};

export const socials = {
  github: "https://github.com/NethraDivyani",
  linkedin: "https://www.linkedin.com/in/nethra-divyani-5a5352220/",
  email: "nethradivyani0511@gmail.com",
};

export const roles = [
  "BSc (Hons) Software Engineering Graduate",
  "AI & Full-Stack Developer",
  "Java & Python Enthusiast",
  "Curious about Applied ML",
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "PHP", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Flask", "Streamlit", "Bootstrap", "ASP.NET"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "IntelliJ IDEA", "MySQL", "VS Code"],
  },
  {
    title: "Foundations",
    skills: ["OOP", "Data Structures", "DBMS", "Web Development"],
  },
  {
    title: "Currently Exploring",
    skills: ["Applied ML", "Predictive Modeling"],
  },
];

export const projects: Project[] = [
  {
    slug: "flood-prediction-system",
    hash: "7c7ac97",
    title: "Flood Prediction System",
    summary:
      "A Python project exploring how environmental data can be used to anticipate flood risk — a step into applied data science alongside traditional software work.",
    problem:
      "Flood risk is hard to communicate ahead of time without a way to translate raw environmental data into a clear signal people can act on.",
    approach:
      "Built a Python-based pipeline that processes environmental data and produces a flood-risk prediction, applying data science fundamentals alongside standard software engineering practice.",
    techStack: ["Python", "Data Science"],
    tags: ["Python", "Data Science"],
    repoUrl: "https://github.com/NethraDivyani/ai-based-flood-prediction-system",
    role: "Solo project",
  },
  {
    slug: "pahana-edu-billing-system",
    hash: "c19b3d4",
    title: "Pahana Edu Billing System",
    summary:
      "An online billing system built for a bookshop, covering customer accounts, item billing, and record-keeping — developed in IntelliJ IDEA.",
    problem:
      "A bookshop needed a reliable way to manage customer accounts and generate accurate bills without relying on manual, error-prone record-keeping.",
    approach:
      "Designed and implemented a Java application using object-oriented principles to manage customers, items, and billing records, with a focus on data accuracy and maintainable structure.",
    techStack: ["Java", "OOP", "IntelliJ IDEA"],
    tags: ["Java", "OOP", "Billing"],
    repoUrl: "https://github.com/NethraDivyani/github-intellij-PahanaEduBillingSystem",
    role: "Solo project",
  },
  {
    slug: "cinema-web-site",
    hash: "8e40a12",
    title: "Cinema Web Site",
    summary:
      "A PHP-driven website for a cinema, handling dynamic content on the server side for a browsing and booking-style experience.",
    problem:
      "A cinema-goer needs an easy way to browse films and showings online instead of relying on static, hard-to-update listings.",
    approach:
      "Built a server-rendered PHP site to handle dynamic content, structuring pages around browsing films and showtimes.",
    techStack: ["PHP", "HTML", "CSS"],
    tags: ["PHP", "Web Dev"],
    repoUrl: "https://github.com/NethraDivyani/Cinema-Web-Site",
    role: "Solo project",
  },
  {
    slug: "restaurant-web-site",
    hash: "2d581bf",
    title: "Restaurant Web Site",
    summary:
      "A front-end website built for a restaurant — menus, layout, and presentation designed around a clean browsing experience.",
    problem:
      "A restaurant needs a simple, presentable web page where visitors can view the menu and get a feel for the place before visiting.",
    approach:
      "Structured and styled a front-end site from scratch with HTML and CSS, focused on clear menu presentation and layout.",
    techStack: ["HTML", "CSS"],
    tags: ["HTML", "CSS"],
    repoUrl: "https://github.com/NethraDivyani/Restaurent-Web-site",
    role: "Solo project",
  },
  {
    slug: "online-shoe-shop",
    hash: "95c7a0e",
    title: "Online Shoe Shop",
    summary:
      "A front-end e-commerce site for an online shoe store — product layout, browsing, and structure built from scratch with HTML.",
    problem:
      "An online shoe store needs a browsable product catalog that lays out items clearly for a first-time visitor.",
    approach:
      "Built the front-end structure and product layout from scratch with HTML, focusing on a clean browsing experience.",
    techStack: ["HTML", "CSS"],
    tags: ["HTML", "E-Commerce"],
    repoUrl: "https://github.com/NethraDivyani/Online-Shoe-Shop",
    role: "Solo project",
  },
];
