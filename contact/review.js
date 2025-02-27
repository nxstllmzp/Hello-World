document.addEventListener("DOMContentLoaded", function () {
    const reviewStars = document.querySelectorAll(".review-stars");

    reviewStars.forEach(starContainer => {
        let rating = parseInt(starContainer.getAttribute("data-rating"), 10);
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("span");
            star.innerHTML = "★";
            star.classList.add("star");
            if (i < rating) {
                star.classList.add("filled");
            }
            starContainer.appendChild(star);
        }
    });
});
