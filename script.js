// زر الوضع الليلي
const btn = document.getElementById("toggle-theme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark")
    ? "الوضع النهاري"
    : "الوضع الليلي";
});

// إظهار البطاقات عند النزول
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      card.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// تشغيلها مرة عند الفتح
revealOnScroll();
