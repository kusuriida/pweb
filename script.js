const reviewsContainer = document.querySelector('.reviews');

const reviews = document.querySelectorAll('.review');
reviews.forEach(review => {
    const clone = review.cloneNode(true);
    reviewsContainer.appendChild(clone);
});

let scrollAmount = 0;
function scrollReviews() {
    scrollAmount++;
    if (scrollAmount >= reviewsContainer.scrollWidth / 2) {
        scrollAmount = 0; 
    }
    reviewsContainer.scrollLeft = scrollAmount;
    requestAnimationFrame(scrollReviews);
}

scrollReviews();

