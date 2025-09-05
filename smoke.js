document.addEventListener("DOMContentLoaded", function() {
    const smokeContainer = document.getElementById('smoke-container');

    if (!smokeContainer) {
        console.warn("Smoke container not found.");
        return;
    }

    function createSmokePuff() {
        const puff = document.createElement('div');
        puff.classList.add('smoke-puff');

        
        const isMobile = window.innerWidth <= 768;
        let drift;
        
        if (isMobile) {
            drift = Math.random() * 30 + 50; //smoke drift up for mobile
        }
        else {
            drift = -(Math.random() * 300 + 200); //smoke drift between 300px and 200px to the left on desktop
        }

        puff.style.setProperty('--drift', `${drift}px`);

        const size = 15 + Math.random() * 15; // Size between 15px and 30px
        puff.style.width = `${size}px`;
        puff.style.height = `${size}px`;

        smokeContainer.appendChild(puff);

        // Remove puff after animation completes to prevent memory leaks
        puff.addEventListener('animationend', () => {
            puff.remove();
        });
    }

    // Create smoke puffs at intervals (e.g., every 300ms)
    setInterval(createSmokePuff, 200);

    // Create an initial puff
     createSmokePuff();
});