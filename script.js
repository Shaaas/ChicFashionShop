// Newsletter fun animation
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('🎉 Thanks for subscribing! Check your inbox for surprises.');
    newsletterForm.reset();
});

// Surprise product clicks
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`👗 You clicked on ${card.dataset.name}! Amazing choice 😎`);
    });
});
