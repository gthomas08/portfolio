const palette = document.querySelector<HTMLDialogElement>("#command-palette")!;
const search = document.querySelector<HTMLInputElement>("#file-search")!;
const results = [
  ...document.querySelectorAll<HTMLAnchorElement>("[data-search]"),
];
let selected = 0;
const visibleResults = () => results.filter((r) => !r.hidden);
function selectResult(index: number) {
  const visible = visibleResults();
  selected = Math.max(0, Math.min(index, visible.length - 1));
  results.forEach((r) => r.classList.remove("highlighted"));
  visible[selected]?.classList.add("highlighted");
}
function openSearch() {
  palette.showModal();
  search.value = "";
  results.forEach((r) => (r.hidden = false));
  document.querySelector("#search-empty")!.setAttribute("hidden", "");
  selectResult(0);
  search.focus();
}
function toggleSidebar() {
  const open = document.body.classList.toggle("sidebar-toggled");
  document
    .querySelector(".mobile-menu")
    ?.setAttribute("aria-expanded", String(open));
}
function toggleTerminal() {
  const terminal = document.querySelector<HTMLElement>(".terminal")!;
  terminal.hidden = !terminal.hidden;
  if (!terminal.hidden)
    document.querySelector<HTMLInputElement>("#terminal-input")!.focus();
}
function updateThemeLabel() {
  document.querySelector("#theme-name")!.textContent =
    document.documentElement.dataset.theme === "light"
      ? "One Light"
      : "One Dark";
}
function toggleTheme() {
  const theme =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {}
  updateThemeLabel();
}
updateThemeLabel();
document.querySelectorAll<HTMLElement>("[data-action]").forEach((button) =>
  button.addEventListener("click", () => {
    (
      ({
        search: openSearch,
        "close-search": () => palette.close(),
        sidebar: toggleSidebar,
        terminal: toggleTerminal,
        theme: toggleTheme,
      }) as Record<string, () => void>
    )[button.dataset.action!]?.();
  }),
);
search.addEventListener("input", () => {
  results.forEach(
    (r) =>
      (r.hidden = !r.dataset
        .search!.toLowerCase()
        .includes(search.value.toLowerCase())),
  );
  document.querySelector<HTMLElement>("#search-empty")!.hidden =
    visibleResults().length > 0;
  selectResult(0);
});
palette.addEventListener("click", (e) => {
  if (e.target === palette) {
    const r = palette.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      palette.close();
  }
});
palette.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    selectResult(selected + (e.key === "ArrowDown" ? 1 : -1));
  }
  if (e.key === "Enter" && e.target === search) {
    e.preventDefault();
    visibleResults()[selected]?.click();
  }
});
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "p")) {
    e.preventDefault();
    palette.open ? palette.close() : openSearch();
  }
  if ((e.metaKey || e.ctrlKey) && e.key === "`") {
    e.preventDefault();
    toggleTerminal();
  }
  if (e.key === "Escape") {
    document.body.classList.remove("sidebar-toggled");
    document
      .querySelector(".mobile-menu")
      ?.setAttribute("aria-expanded", "false");
  }
});
const terminalForm = document.querySelector<HTMLFormElement>("#terminal-form")!;
const terminalInput =
  document.querySelector<HTMLInputElement>("#terminal-input")!;
const output = document.querySelector<HTMLElement>(".terminal-output")!;
const routes: Record<string, string> = {
  welcome: "/",
  experience: "/experience/",
  projects: "/projects/",
  education: "/education/",
  skills: "/skills/",
  contact: "/contact/",
};
terminalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const raw = terminalInput.value.trim();
  terminalInput.value = "";
  if (!raw) return;
  const [cmd, arg] = raw.toLowerCase().split(/\s+/);
  if (cmd === "clear") {
    output.textContent = "";
    return;
  }
  const line = document.createElement("div");
  line.textContent = `~ % ${raw}`;
  output.append(line);
  const answer = document.createElement("div");
  if (cmd === "help")
    answer.textContent =
      "Commands: help, ls, open <page>, experience, projects, education, skills, contact, theme, clear";
  else if (cmd === "ls")
    answer.textContent =
      "welcome.md  projects.ts  experience.md  education.md  skills.md  contact.json";
  else if (cmd === "theme") {
    toggleTheme();
    answer.textContent = "Theme switched.";
  } else if (cmd === "open" || cmd in routes) {
    const route =
      routes[(cmd === "open" ? arg || "" : cmd).replace(/\.(md|ts|json)$/, "")];
    if (route) {
      location.assign(route);
      return;
    }
    answer.textContent = "File not found. Type ls to list available files.";
  } else
    answer.textContent = `Unknown command: ${cmd}. Type help for available commands.`;
  output.append(answer);
  output.scrollTop = output.scrollHeight;
});
