document.addEventListener("DOMContentLoaded", function() {
    const smokeContainer = document.getElementById('smoke-container');

    if (!smokeContainer) {
        console.warn("Smoke container not found.");
        return;
    }

    function createSmokePuff() {
        const puff = document.createElement('div');
        puff.classList.add('smoke-puff');

        // Optional: Add slight random horizontal drift
        const drift = (Math.random() - 0.5) * 100; // Random value between -50px and 50px
        puff.style.setProperty('--drift', `${drift}px`);

        // Optional: Add slight variation in size
        // const size = 15 + Math.random() * 15; // Size between 15px and 30px
        // puff.style.width = `${size}px`;
        // puff.style.height = `${size}px`;

        smokeContainer.appendChild(puff);

        // Remove puff after animation completes to prevent memory leaks
        puff.addEventListener('animationend', () => {
            puff.remove();
        });
    }

    // Create smoke puffs at intervals (e.g., every 300ms)
    setInterval(createSmokePuff, 300);

    // Create an initial puff
     createSmokePuff();
});