/*
تشغيل الوضع الليلي
وإظهار البطاقات عند التمرير
*/

// زر الوضع الليلي
const btn = document.getElementById("toggle-theme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  btn.textContent = document.body.classList.contains("dark")
    ? "الوضع النهاري"
    : "الوضع الليلي";
});

// إظهار البطاقات تدريجيًا
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

// عند التمرير
window.addEventListener("scroll", revealOnScroll);

// عند فتح الصفحة
revealOnScroll();
