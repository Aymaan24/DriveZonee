window.addEventListener('DOMContentLoaded', function () {
  const carDivs = document.querySelectorAll('.car1');
  let currentSound = null;

  carDivs.forEach(div => {
    div.addEventListener('mouseenter', () => {
      const soundSrc = div.getAttribute('data-sound');
      if (!soundSrc) return;

      if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
      }

      currentSound = new Audio(soundSrc);
      currentSound.volume = 0.3;
      currentSound.play().catch((e) => {
        console.log('Autoplay blocked:', e);
      });
    });

    div.addEventListener('mouseleave', () => {
      if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
      }
    });
  });
});
