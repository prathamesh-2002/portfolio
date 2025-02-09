const messages = [
  'Last updated: February 10, 2025',
  'Updates in progress...',
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