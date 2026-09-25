const themeBtn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");
if (saved === "dark") document.body.classList.add("dark");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});
