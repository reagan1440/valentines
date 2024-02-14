document.getElementById('valentineButton').addEventListener('click', function() {
  alert('You are my Valentine! 💖');
  document.getElementById('backgroundMusic').pause();
});

// Play background music on page load
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('backgroundMusic').play();
  
  // Create hearts and append them to the heart container
  const heartContainer = document.getElementById('heartContainer');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = Math.random() * 5 + 2 + 's';
    heartContainer.appendChild(heart);
  }
});

  