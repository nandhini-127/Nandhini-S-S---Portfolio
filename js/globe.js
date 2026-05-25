const canvas = document.getElementById("globe");
const ctx = canvas ? canvas.getContext("2d") : null;

if (canvas && ctx) {
  canvas.width = 500;
  canvas.height = 500;

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = 178;

  const skills = [
    "Python", "SQL",
    "NumPy", "Pandas", "Scikit-learn", "Machine Learning",
    "Deep Learning", "Statistics", "Excel", "Power BI",
    "Git", "GitHub", "MySQL", "Flask", "FastAPI",
    "SVD++", "TF-IDF", "Clustering", "RFM Analysis"
  ];

  const points = skills.map((skill, index) => {
    const phi = Math.acos(-1 + (2 * index) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;

    return {
      x: radius * Math.cos(theta) * Math.sin(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(phi),
      text: skill
    };
  });

  let angle = 0;

  function color(name) {
    return getComputedStyle(document.body).getPropertyValue(name).trim();
  }

  function drawGlobe() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const accent = color("--accent") || "#0f766e";
    const textColor = color("--text") || "#17202a";

    for (let lat = -80; lat <= 80; lat += 15) {
      for (let lon = 0; lon < 360; lon += 15) {
        const x = radius * Math.cos(lon * Math.PI / 180) * Math.cos(lat * Math.PI / 180);
        const y = radius * Math.sin(lat * Math.PI / 180);
        const z = radius * Math.sin(lon * Math.PI / 180) * Math.cos(lat * Math.PI / 180);

        const rx = x * Math.cos(angle) - z * Math.sin(angle);
        const rz = x * Math.sin(angle) + z * Math.cos(angle);
        const scale = 300 / (300 + rz);
        const px = cx + rx * scale;
        const py = cy + y * scale;
        const opacity = 0.18 + ((rz + radius) / (2 * radius)) * 0.5;

        ctx.beginPath();
        ctx.arc(px, py, Math.max(1.2, 2 * scale), 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(accent, opacity);
        ctx.fill();
      }
    }

    points.forEach((point) => {
      const x = point.x * Math.cos(angle) - point.z * Math.sin(angle);
      const z = point.x * Math.sin(angle) + point.z * Math.cos(angle);
      const scale = 300 / (300 + z);
      const px = cx + x * scale;
      const py = cy + point.y * scale;
      const opacity = 0.38 + ((z + radius) / (2 * radius)) * 0.55;

      ctx.fillStyle = hexToRgba(textColor, opacity);
      ctx.font = `${Math.max(11, 14 * scale)}px Arial`;
      ctx.fillText(point.text, px, py);
    });

    angle += 0.003;
    requestAnimationFrame(drawGlobe);
  }

  function hexToRgba(value, opacity) {
    if (!value.startsWith("#")) {
      return value;
    }

    const hex = value.replace("#", "");
    const chars = hex.length === 3 ? hex.split("").map((char) => char + char).join("") : hex;
    const r = parseInt(chars.slice(0, 2), 16);
    const g = parseInt(chars.slice(2, 4), 16);
    const b = parseInt(chars.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  drawGlobe();
}
