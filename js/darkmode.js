function updateThemeButton() {
  const btn = document.querySelector(".toggle-btn");
  if (!btn) return;

  const isDark = document.body.classList.contains("dark");
  btn.textContent = isDark ? "Light" : "Dark";
  btn.setAttribute("aria-pressed", String(isDark));
}

function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeButton();
}

if (localStorage.getItem("portfolio-theme") === "dark") {
  document.body.classList.add("dark");
}

updateThemeButton();
