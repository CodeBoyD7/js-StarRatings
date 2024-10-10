const stars = document.querySelectorAll(".fa-star-o");
const ratingEmoji = ["😒", "😊", "😉", "😀", "😍"];
const emoji = document.querySelector(".emoji");
const count = document.querySelector(".count");
let currentRating = -1;

stars.forEach((star, index) => {
  star.dataset.rated = index + 1;
  star.addEventListener("mouseover", (event) => {
    const selectedStarIndex = event.target.dataset.rated;
    if (!selectedStarIndex) return;
    selectedStar(selectedStarIndex);
  });
  star.addEventListener("click", (event) => {
    const selectedStarIndex = event.target.dataset.rated;
    currentRating = selectedStarIndex;
    selectedStar(currentRating);
  });
  star.addEventListener("mouseleave", () => {
    selectedStar(currentRating);
  });
});

function selectedStar(starStatus) {
  stars.forEach((star, index) => {
    if (index < starStatus) {
      star.classList.replace("fa-star-o", "fa-star");
    } else {
      star.classList.replace("fa-star", "fa-star-o");
    }
  });

  count.textContent = starStatus > 0 ? starStatus : 0;
  emoji.textContent = starStatus > 0 ? ratingEmoji[starStatus - 1] : "😍";
  emoji.style.transform = "scale(1.1)";

  setTimeout(() => {
    emoji.style.transform = "scale(1)";
  }, 150);
}
