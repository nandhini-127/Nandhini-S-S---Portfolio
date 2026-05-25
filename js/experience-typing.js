// ================= TYPING EFFECT =================
function typeText(elementId, text, speed = 100) {
  const el = document.getElementById(elementId);
  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect
typeText('experienceTitle', 'Experience');
typeText('certificateTitle', 'Certificates');
typeText('workshopTitle', 'Workshops');