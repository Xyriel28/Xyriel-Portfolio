window.onload = function () {
  alert("Enjoy My Portfolio Website!");
};
function showSection(sectionId) {
  let sections = document.querySelectorAll(".content");

  sections.forEach(function (section) {
    section.classList.remove("active");
    section.style.display = "none";
  });

  let activeSection = document.getElementById(sectionId);

  activeSection.style.display = "block";

  setTimeout(() => {
    activeSection.classList.add("active");
  }, 10);
}