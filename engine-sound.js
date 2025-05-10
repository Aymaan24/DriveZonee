// Wait until page fully loads
window.addEventListener('load', function() {
    // Get all car images and audio element
    const carImages = document.querySelectorAll('.image-gallery img');
    const engineSound = new Audio('engine.mp3');
    engineSound.volume = 0.3; // Lower volume to 30%
  
    // Add hover effect to each image
    carImages.forEach(img => {
      img.addEventListener('mouseenter', () => {
        engineSound.currentTime = 0; // Rewind sound
        engineSound.play();
      });
    });
  });