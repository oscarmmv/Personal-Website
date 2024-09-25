document.addEventListener('DOMContentLoaded', function() {
    // Check if the animation has already been played
    if (!sessionStorage.getItem('animationPlayed')) {
        document.getElementById('animated-video').addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        function getScrollbarWidth() {
            const container = document.createElement('div');
            document.body.appendChild(container);
            container.style.overflow = 'scroll';
            container.style.width = '50px';
            container.style.height = '50px';
            const inner = document.createElement('div');
            container.appendChild(inner);
            inner.style.width = '100%';
            const scrollbarWidth = container.offsetWidth - inner.offsetWidth;
            document.body.removeChild(container);

            return scrollbarWidth;
        }

        setTimeout(() => {
            document.getElementById('animated-video').remove();
        }, 3000); 

        const overlays = document.querySelectorAll('#overlay, #overlay2');
        const scrollbarWidth = getScrollbarWidth();
        document.body.classList.add('no-overflow');
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        setTimeout(() => {
            overlays.forEach(overlay => overlay.remove());
            document.body.classList.remove('no-overflow');
            document.body.style.paddingRight = '';
        }, 3000);

        // Set the flag in session storage
        sessionStorage.setItem('animationPlayed', 'true');
    }
});