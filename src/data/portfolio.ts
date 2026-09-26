// Update this file with your own resume details and file navigation.
export const profile = {
  name: "George Thomas",
  initials: "GT",
  role: "Software Engineer",
  location: "Patras, Greece",
};

export const files = [
  { slug: "", name: "welcome.md", icon: "md", label: "Welcome" },
  { slug: "projects", name: "projects.ts", icon: "ts", label: "Projects" },
  {
    slug: "experience",
    name: "experience.md",
    icon: "md",
    label: "Experience",
  },
  { slug: "education", name: "education.md", icon: "md", label: "Education" },
  { slug: "skills", name: "skills.md", icon: "md", label: "Skills" },
  { slug: "contact", name: "contact.json", icon: "{}", label: "Contact" },
  { slug: "agents", name: "AGENTS.md", icon: "md", label: "AGENTS.md" },
];

export const contactLinks = [
  { key: "x", label: "X", url: "https://x.com/geo_thomas_" },
  { key: "github", label: "GitHub", url: "https://github.com/gthomas08" },
  {
    key: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gthomas08",
  },
];

export const projects = [
  {
    id: "beforedoors",
    name: "BeforeDoors",
    kind: "Hackathon submission",
    event: "Convex All Gas Hackathon",
    description:
      "Makes venue access information easier to understand before a visit.",
    repositoryUrl: "https://github.com/gthomas08/beforedoors",
    eventUrl: "https://www.convex.dev/hackathons/all-gas",
    liveUrl: "https://adventurous-toad-482.convex.site",
  },
];

export const experience = [
  {
    company: "EY",
    role: "Software Engineer",
    dates: "July 2023 – Present",
    location: "Patras, Greece",
    arrangement: "Hybrid",
    description:
      "I work on products, focusing on their underlying systems and architecture while also building frontend and agentic AI features.",
  },
  {
    company: "Citrix",
    role: "Software Engineer Intern",
    dates: "March 2022 – May 2022",
    location: "Patras, Greece",
    arrangement: "Remote",
    description:
      "I worked on user workflows and data-driven actions for an application delivery management system.",
  },
];

export const education = {
  degree: "Computer Engineering & Informatics",
  level: "Integrated M.Sc",
  institution: "University of Patras",
  dates: "2017 – 2022",
  grade: "7.51",
  location: "Patras, Greece",
  thesis:
    "Implementation of multi-factor authentication for web applications via the Shibboleth infrastructure",
  thesisUrl:
    "https://nemertes.library.upatras.gr/server/api/core/bitstreams/3f06bf72-cdb1-499c-8b53-81c934d46e1e/content",
  thesisGithubUrl: "https://github.com/gthomas08/TOTP-Manager",
  thesisWikiUrl:
    "https://github.com/gthomas08/TOTP-Manager/wiki/Shibboleth-IdP-Integration",
};

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Go", "C#"],
  },
  {
    category: "Web Technologies & Tools",
    skills: [
      "Node.js",
      "React",
      "Next.js",
      "FastAPI",
      ".NET",
      "REST APIs",
      "OpenAPI",
      "Git",
      "Docker",
    ],
  },
  {
    category: "Cloud & Search Engines",
    skills: [
      "Azure",
      "Elasticsearch",
      "Kubernetes",
      "OpenTelemetry",
      "Grafana",
    ],
  },
  {
    category: "Databases",
    skills: ["Postgres", "Qdrant", "MongoDB", "MSSQL"],
  },
];

export const certificate = {
  name: "DevOps With Docker",
  issuer: "University of Helsinki (MOOC)",
  url: "https://github.com/gthomas08/DevOps-With-Docker",
};

export const spokenLanguages = [
  { name: "Greek", level: "Native" },
  { name: "English", level: "C2" },
];
