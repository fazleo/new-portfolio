function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle i");

  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
  }
}
