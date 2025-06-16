// script.js

// Search functionality
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.querySelector('input[name="search"]').value.toLowerCase();
  const videos = document.querySelectorAll(".video-card");

  videos.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});

// Alert on video click
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;
    alert(`You clicked on: "${title}"`);
  });
});

// Dark mode toggle
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
