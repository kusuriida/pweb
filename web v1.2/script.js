const reviewsContainer = document.querySelector('.reviews');

// Duplicate the reviews for infinite scroll effect
const reviews = document.querySelectorAll('.review');
reviews.forEach(review => {
    const clone = review.cloneNode(true);
    reviewsContainer.appendChild(clone);
});

// Scroll the reviews container continuously
let scrollAmount = 0;
function scrollReviews() {
    scrollAmount++;
    if (scrollAmount >= reviewsContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll position for infinite effect
    }
    reviewsContainer.scrollLeft = scrollAmount;
    requestAnimationFrame(scrollReviews);
}

scrollReviews();
