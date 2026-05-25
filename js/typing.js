const text = [
  "Aspiring Data Scientist",
  "Aspiring AI Engineer",
  "Machine Learning Engineer",
  "Data Analyst"
];

let i = 0;
let j = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  if (!typingElement) return;

  const current = text[i];
  typingElement.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j += 1;
    setTimeout(type, 90);
    return;
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (isDeleting && j > 0) {
    j -= 1;
    setTimeout(type, 45);
    return;
  }

  isDeleting = false;
  i = (i + 1) % text.length;
  setTimeout(type, 250);
}

type();
