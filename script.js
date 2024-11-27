// Mock search functionality
const searchBar = document.getElementById('search-bar');
const videoPreviews = document.querySelectorAll('#video-preview');

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    videoPreviews.forEach(video => {
        const title = video.querySelector('#video-title').textContent.toLowerCase();
        if (title.includes(query)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
});

// Tooltip display on hover
const tooltips = document.querySelectorAll('#tooltip-container');
tooltips.forEach(container => {
    container.addEventListener('mouseenter', () => {
        const tooltip = container.querySelector('#tooltip');
        tooltip.style.display = 'block';
    });
    container.addEventListener('mouseleave', () => {
        const tooltip = container.querySelector('#tooltip');
        tooltip.style.display = 'none';
    });
});

// Notification counter animation
const notificationTab = document.getElementById('notifications-tab');
notificationTab.addEventListener('click', () => {
    const notificationCount = notificationTab.querySelector('p');
    const currentCount = parseInt(notificationCount.textContent.replace('+', '')) || 0;
    if (currentCount > 0) {
        notificationCount.textContent = currentCount - 1;
    }
});

// Voice search button alert
const voiceSearchButton = document.getElementById('voice-search-button');
voiceSearchButton.addEventListener('click', () => {
    alert('Voice search is not implemented yet!');
});

