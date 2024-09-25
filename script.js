document.addEventListener('DOMContentLoaded', function() {
    const swup = new Swup();

    // Create the wrapper div
    const wrapperDiv = document.createElement('div');
    wrapperDiv.id = 'wrapper';
    wrapperDiv.style.position = 'relative';

    // Create the video element
    const videoElement = document.createElement('video');
    videoElement.id = 'animated-video';
    videoElement.style.width = 'auto';
    videoElement.style.height = '450px';
    videoElement.style.position = 'absolute';
    videoElement.style.top = 'calc(50vh - 50px)';
    videoElement.style.left = '50%';
    videoElement.style.transform = 'translate(-50%, -50%)';
    videoElement.style.zIndex = '2';
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.disablePictureInPicture = true;

    // Create the source element
    const sourceElement = document.createElement('source');
    sourceElement.src = 'assets/Animation transparent.webm';
    sourceElement.type = 'video/webm';

    // Append the source to the video
    videoElement.appendChild(sourceElement);

    // Append the video to the wrapper
    wrapperDiv.appendChild(videoElement);

    // Insert the wrapper div into the DOM
    document.getElementById('swup').insertBefore(wrapperDiv, document.getElementById('wrapper'));

    // Prevent context menu on video
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
});