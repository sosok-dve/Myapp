/*
تشغيل وإيقاف الوضع الليلي
*/

const btn = document.getElementById("toggle-theme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  btn.textContent = document.body.classList.contains("dark")
    ? "الوضع النهاري"
    : "الوضع الليلي";
});
