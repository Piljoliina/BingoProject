// Local Play Popup
const localPlay = document.getElementById('localPlay');
const popup = document.getElementById('popup');
const startGameBtn = document.getElementById('startGameBtn');
const gameOptions = document.getElementById('gameOptions');
const closePopup = document.getElementById('closePopup');

// Settings Popup
const settingsIcon = document.querySelector('.settings-icon');
const settingsPopup = document.getElementById('settingsPopup');
const closeSettingsPopup = document.getElementById('closeSettingsPopup');

const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

  // Convert and apply volume to all media elements
  function setGlobalVolume(volumePercent) {
    const volume = volumePercent / 100; // convert 0–100 to 0.0–1.0
    document.querySelectorAll('audio, video').forEach(media => {
      media.volume = volume;
    });
  }

  // Update on input
  volumeSlider.addEventListener('input', () => {
    const value = parseInt(volumeSlider.value, 10);
    volumeValue.textContent = value;
    setGlobalVolume(value);
  });

  // Apply volume on page load
  window.addEventListener('DOMContentLoaded', () => {
    const initialValue = parseInt(volumeSlider.value, 10);
    volumeValue.textContent = initialValue;
    setGlobalVolume(initialValue);
  });

// Show the settings popup
settingsIcon.addEventListener('click', (e) => {
  e.preventDefault();
  settingsPopup.style.display = 'flex';
});

// Close the settings popup
closeSettingsPopup.addEventListener('click', () => {
  settingsPopup.style.display = 'none';
});

// Close settings popup if clicking outside the content
settingsPopup.addEventListener('click', (e) => {
  if (e.target === settingsPopup) {
    settingsPopup.style.display = 'none';
  }
});


// Show the Local Play popup
localPlay.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'flex';
});

// Close the Local Play popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close the Local Play popup if clicking outside of it
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Enable/Disable "Start Game" button based on game selection
gameOptions.addEventListener('change', () => {
  const selectedOption = gameOptions.value;
  startGameBtn.disabled = selectedOption === "";
  
  // Save the selected option in localStorage
  localStorage.setItem("selectedTheme", selectedOption);
});

// Start the game
startGameBtn.addEventListener('click', () => {
  const selectedOption = gameOptions.value;
  console.log("Starting game with:", selectedOption);
  popup.style.display = 'none'; // Hide the popup after starting
  // Insert your game start logic here
});

// How to Play Popup
const howToPlayLink = document.getElementById('howToPlayLink');
const howToPlayPopup = document.getElementById('howToPlayPopup');
const closeHowToPlayPopup = document.getElementById('closeHowToPlayPopup');

// Show the "How to Play" popup
howToPlayLink.addEventListener('click', (e) => {
  e.preventDefault();
  howToPlayPopup.style.display = 'flex';
});

// Close the "How to Play" popup
closeHowToPlayPopup.addEventListener('click', () => {
  howToPlayPopup.style.display = 'none';
});

// Close the "How to Play" popup if clicking outside of it
howToPlayPopup.addEventListener('click', (e) => {
  if (e.target === howToPlayPopup) {
    howToPlayPopup.style.display = 'none';
  }
});

// Dropdown Menu (already included from previous code)
document.addEventListener('DOMContentLoaded', function () {
   const dropdowns = document.querySelectorAll('.dropdown');
   dropdowns.forEach(drop => {
     const toggle = drop.querySelector('.dropdown-toggle') || drop.querySelector('.dropdown-icon');
     toggle.addEventListener('click', function (e) {
       e.stopPropagation();
       closeAllDropdowns();
       drop.classList.toggle('show');
     });
   });

   document.addEventListener('click', function () {
     closeAllDropdowns();
   });

   function closeAllDropdowns() {
     document.querySelectorAll('.dropdown.show').forEach(drop => {
       drop.classList.remove('show');
     });
   }
 });

 startGameBtn.addEventListener('click', () => {
  const selectedOption = gameOptions.value;
  console.log("Starting game with:", selectedOption);

  
  window.location.href = 'testing2.php';
});

// loader


  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-wrapper");

    if (loader) {
      setTimeout(() => {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";

        setTimeout(() => {
          loader.style.display = "none";
        }, 500); // Wait for the fade-out to finish
      }, 2000); // Show loader for 2 seconds
    }
  });

    document.querySelector('a[href="login"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginModal').style.display = 'flex';
  });
  
  document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
  }); 

  // Statistics Popup
const statisticsLink = document.getElementById('statisticsLink');
const statisticsPopup = document.getElementById('statisticsPopup');
const closeStatisticsPopup = document.getElementById('closeStatisticsPopup');

statisticsLink.addEventListener('click', (e) => {
  e.preventDefault();
  statisticsPopup.style.display = 'flex';
});

closeStatisticsPopup.addEventListener('click', () => {
  statisticsPopup.style.display = 'none';
});

statisticsPopup.addEventListener('click', (e) => {
  if (e.target === statisticsPopup) {
    statisticsPopup.style.display = 'none';
  }
});

//audio on click
window.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bgAudio');

  const playAudio = () => {
    audio.play().catch(e => {
      console.log('Autoplay blocked:', e);
    });
    window.removeEventListener('click', playAudio);
  };

  // Start on first click anywhere
  window.addEventListener('click', playAudio);
});

//sounds
    const playBtn = document.querySelector('.play-button');
    const clickSound = document.getElementById('click-sound');
 
    playBtn.addEventListener('click', () => {
      clickSound.currentTime = 0;      // rewind if it’s still playing
      clickSound.play().catch(err => {
        console.warn('Sound play failed:', err);
      });
    });