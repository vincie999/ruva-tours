document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. Mobile Navigation Toggle
  // ==========================================
  const menuButton = document.getElementById('menuButton');
  const navLinks = document.getElementById('navLinks');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link on mobile
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 2. Reviews System (Submit & Display)
  // ==========================================
  loadReviews();

  // Attach click listener to review submit button if present
  const submitBtn = document.getElementById('submitReviewBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', submitReview);
  }
});

// Function to handle submitting a new review
function submitReview() {
  const nameInput = document.getElementById("reviewerName");
  const ratingInput = document.getElementById("reviewerRating");
  const textInput = document.getElementById("reviewText");

  if (!nameInput || !textInput) return;

  const name = nameInput.value.trim();
  const rating = ratingInput ? ratingInput.value : 5;
  const text = textInput.value.trim();

  if (!name || !text) {
    alert("Please fill in your name and review before submitting.");
    return;
  }

  const newReview = {
    name: name,
    stars: "★".repeat(rating) + "☆".repeat(5 - rating),
    text: text,
    date: new Date().toLocaleDateString()
  };

  // Save to browser storage
  let reviews = JSON.parse(localStorage.getItem("ruva_reviews")) || [];
  reviews.unshift(newReview);
  localStorage.setItem("ruva_reviews", JSON.stringify(reviews));

  // Reset inputs
  nameInput.value = "";
  textInput.value = "";

  // Reload the reviews list
  loadReviews();
}

// Function to render reviews on the page
function loadReviews() {
  const reviewsList = document.getElementById("reviewsList");
  if (!reviewsList) return;

  let reviews = JSON.parse(localStorage.getItem("ruva_reviews")) || [
    { name: "Sarah J.", stars: "★★★★★", text: "Amazing tour! Punctual, friendly, and great service.", date: "12/02/2026" },
    { name: "David M.", stars: "★★★★★", text: "Very smooth trip. Highly recommended!", date: "28/01/2026" }
  ];

  reviewsList.innerHTML = "";

  reviews.forEach(review => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="stars">${review.stars}</div>
      <p>"${review.text}"</p>
      <div class="author">— ${review.name} <small>(${review.date})</small></div>
    `;
    reviewsList.appendChild(card);
  });
}
