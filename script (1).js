// Function to create tiny hearts
function explodeHearts() {
    for (let i = 0; i < 20; i++) {
        const tinyHeart = document.createElement('div');
        tinyHeart.classList.add('heart');

        // Random position near main heart
        tinyHeart.style.left = (image.offsetLeft + Math.random() * 100 - 50) + 'px';
        tinyHeart.style.top = (image.offsetTop + Math.random() * 100 - 50) + 'px';

        document.body.appendChild(tinyHeart);

        // Remove heart after animation
        setTimeout(() => {
            tinyHeart.remove();
        }, 2000);
    }
}

// Modify Yes Button Click
yesBtn.addEventListener('click', () => {
    mainText.textContent = "Yay! You made my day ❤️";
    image.style.display = "none"; // hide main heart
    yesSound.play();
    document.body.style.background = "linear-gradient(to bottom, #ff69b4, #ffb6c1)";
    explodeHearts();
});
