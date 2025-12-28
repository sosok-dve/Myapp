const btn = document.getElementById("toggle-theme");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") document.body.classList.add("dark");

function updateThemeText() {
  btn.textContent = document.body.classList.contains("dark")
    ? "الوضع النهاري"
    : "الوضع الليلي";
}
updateThemeText();

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeText();
});

const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function createPetals(containerId, count, front=false) {
  const box = document.getElementById(containerId);
  if (!box) return;

  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "rose-petal";

    const w = rand(front ? 10 : 12, front ? 18 : 26);
    const h = w * rand(1.25, 1.55);
    const x = rand(0, 100);
    const dur = rand(front ? 10 : 14, front ? 18 : 26);
    const delay = rand(-dur, 0);
    const drift = rand(-28, 28);
    const rot = rand(-60, 60);
    const op = rand(front ? 0.55 : 0.55, front ? 0.85 : 0.85);
    const blur = rand(front ? 0.0 : 0.1, front ? 0.35 : 0.55);

    p.style.setProperty("--w", `${w}px`);
    p.style.setProperty("--h", `${h}px`);
    p.style.setProperty("--x", `${x}vw`);
    p.style.setProperty("--dur", `${dur}s`);
    p.style.setProperty("--delay", `${delay}s`);
    p.style.setProperty("--drift", `${drift}px`);
    p.style.setProperty("--r", `${rot}deg`);
    p.style.setProperty("--o", `${op}`);
    p.style.setProperty("--b", `${blur}px`);

    box.appendChild(p);
  }
}

if (!reduceMotion) {

  createPetals("roseBack", 36, false);
  createPetals("roseFront", 18, true);
}
