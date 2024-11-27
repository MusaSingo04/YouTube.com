// Mock search functionality
// Select menu elements
const sideMenu = document.getElementById('side-menu');
const menuToggle = document.getElementById('menu-toggle-icon');
const menuItems = document.querySelectorAll('.menu-item');

// Toggle menu visibility
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('hidden');
});

// Highlight selected menu item
menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        // Remove active class from all menu items
        menuItems.forEach((menuItem) => menuItem.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
    });
});

// Optional: Close menu when clicking outside (mobile-friendly)
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && event.target !== menuToggle) {
        sideMenu.classList.add('hidden');
    }
});

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
