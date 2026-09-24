// Replace this sample content to make the workspace yours.
export const profile = {
  name: "Alex Morgan",
  initials: "am",
  role: "Design-minded developer",
  location: "Brooklyn, New York",
  timezone: "America/New_York",
  email: "hello@example.com",
  github: "https://github.com",
  headline: "Good things happen at the intersection.",
  intro:
    "I’m Alex, a developer who cares as much about how things feel as how they work. I turn thoughtful ideas into useful digital experiences.",
  available: true,
};
export const files = [
  { slug: "", name: "welcome.md", icon: "md", label: "Welcome" },
  { slug: "about", name: "about.md", icon: "md", label: "About me" },
  { slug: "projects", name: "projects.ts", icon: "ts", label: "Projects" },
  { slug: "journal", name: "journal.md", icon: "md", label: "Journal" },
  { slug: "contact", name: "contact.json", icon: "{}", label: "Contact" },
];
export const projects = [
  {
    id: "orbit",
    name: "Orbit",
    kind: "Product design & development",
    description:
      "A quieter place to organize your work. A task manager built around focus, flow, and a little breathing room.",
    stack: ["Astro", "TypeScript", "CSS"],
    year: "2025",
    color: "mint",
  },
  {
    id: "forma",
    name: "Forma",
    kind: "Design systems & tooling",
    description:
      "Small components. Endless possibilities. An accessible component library for making the web feel a little more considered.",
    stack: ["React", "Storybook", "Figma"],
    year: "2025",
    color: "peach",
  },
  {
    id: "fieldnotes",
    name: "Fieldnotes",
    kind: "Creative development",
    description:
      "A digital garden for curious minds. A lightweight writing space for ideas that aren’t quite finished yet.",
    stack: ["Astro", "MDX", "TypeScript"],
    year: "2024",
    color: "blue",
  },
];
export const articles = [
  {
    id: "small-details",
    title: "The small details are the big details",
    date: "June 12, 2025",
    tag: "Design engineering",
    body: "The best interfaces rarely announce themselves. They make the next step feel obvious. A useful label, a generous hit target, a loading state that explains what is happening: these decisions add up to trust.\n\nI like to start with the ordinary moments. What happens when a list is empty? Can someone finish the task using a keyboard? Does the layout survive a longer title? Craft lives in those questions.\n\nBefore adding another effect, I try to make one everyday interaction a little clearer.",
  },
  {
    id: "less-javascript",
    title: "A little less JavaScript, a little more web",
    date: "May 24, 2025",
    tag: "Development",
    body: "A personal website is a good place to remember how much the browser already knows. Links navigate. Forms collect information. HTML gives content a structure before a script ever arrives.\n\nFor this template, Astro renders the pages ahead of time. Small scripts add a command palette, a theme preference, and a playful terminal. The portfolio remains readable without them.\n\nMy starting question is simple: what is the smallest amount of code that makes this experience better?",
  },
  {
    id: "side-projects",
    title: "Making room for side projects",
    date: "April 8, 2025",
    tag: "Process",
    body: "Not every project needs a launch plan. Sometimes the point is to learn a tool, explore a visual idea, or solve a tiny problem for yourself.\n\nI keep the first version deliberately small: one useful interaction, one finished screen, one thing I can share. Constraints make it easier to finish and easier to notice what matters.\n\nA little curiosity, given a little time, can become something worth keeping.",
  },
];
