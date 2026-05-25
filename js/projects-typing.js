const projectsText = "Projects";
const projectsElement = document.getElementById("projects-typing");
let projectsIndex = 0;

function typeProjects() {
  if (!projectsElement) return;

  if (projectsIndex === 0) {
    projectsElement.textContent = "";
  }

  if (projectsIndex < projectsText.length) {
    projectsElement.textContent += projectsText.charAt(projectsIndex);
    projectsIndex += 1;
    setTimeout(typeProjects, 80);
  }
}

typeProjects();
