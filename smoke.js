document.addEventListener("DOMContentLoaded", function() {
    const smokeContainer = document.getElementById('smoke-container');

    if (!smokeContainer) {
        console.warn("Smoke container not found.");
        return;
    }

    document.addEventListener("mousemove", (e) => {
        const rect = smokeContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        mouseOffsetX = e.clientX - centerX; // distanza mouse dal centro
    });

    function createSmokePuff() {
        const puff = document.createElement('div');
        puff.classList.add('smoke-puff');

        
        const isMobile = window.innerWidth <= 768;
        let drift;
        
        if (isMobile) {
            drift = (mouseOffsetX / 5) + (Math.random() * 30 - 15);
        } 
        else {
        drift = (mouseOffsetX / 4) + (Math.random() * 100 - 50);
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