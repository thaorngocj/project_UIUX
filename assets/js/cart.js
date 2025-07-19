let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountEl.textContent = cartCount;
    });
});