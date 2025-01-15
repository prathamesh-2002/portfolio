const messages = [
  'Last updated: March 23, 2024',
  'Updates in progress...',
  'Next update: January 25, 2025',
  
];

const statusContent = document.querySelector('.status-content');
let currentIndex = 0;

function updateMessage() {
  statusContent.classList.remove('fade');
  // Trigger reflow to restart animation
  void statusContent.offsetWidth;
  statusContent.classList.add('fade');
  statusContent.textContent = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
}

// Initial update
updateMessage();

// Update message every 3 seconds
setInterval(updateMessage, 4000);