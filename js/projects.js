const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
});

function reveal() {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();