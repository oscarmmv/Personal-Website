document.addEventListener('DOMContentLoaded', function() {
    const backClicked = sessionStorage.getItem('click-back');

    // Hide the video if back was clicked
    if (!backClicked) {
        // If back was NOT clicked, play video and add delay
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

        const content = document.querySelector('.content');
        content.style.opacity = '0';
        
        setTimeout(() => {
            content.style.transition = 'opacity 2s ease-out';
            content.style.opacity = '1';
        }, 3000); // 3 seconds delay

        setTimeout(() => {
            document.getElementById('animated-video').remove();
        }, 3000);

        const scrollbarWidth = getScrollbarWidth();
        document.body.classList.add('no-overflow');
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        setTimeout(() => {
            document.body.classList.remove('no-overflow');
            document.body.style.paddingRight = '';
        }, 3000);
    } else {
        // If back was clicked, remove video immediately
        const video = document.getElementById('animated-video');
        if (video) {
            video.remove();
        }
        // Clear session storage for future fresh loads
        sessionStorage.removeItem('click-back');
    }
});
