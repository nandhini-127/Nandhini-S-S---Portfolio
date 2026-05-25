const skillsText = "Skills";
const skillsElement = document.getElementById("skills-typing");
let skillsIndex = 0;

function typeTitle() {
  if (!skillsElement) return;

  if (skillsIndex === 0) {
    skillsElement.textContent = "";
  }

  if (skillsIndex < skillsText.length) {
    skillsElement.textContent += skillsText.charAt(skillsIndex);
    skillsIndex += 1;
    setTimeout(typeTitle, 80);
  }
}

typeTitle();
