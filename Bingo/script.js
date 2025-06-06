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

//volume
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

// How to Play Popup
const howToPlayLink = document.getElementById('howToPlayLink');
const howToPlayPopup = document.getElementById('howToPlayPopup');
const closeHowToPlayPopup = document.getElementById('closeHowToPlayPopup');

// Statistics Popup
const statisticsLink = document.getElementById('statisticsLink');
const statisticsPopup = document.getElementById('statisticsPopup');
const closeStatisticsPopup = document.getElementById('closeStatisticsPopup');

//sounds
const playBtn = document.querySelector('.play-button');
const clickSound = document.getElementById('click-sound');


  // Ääni asetukset
  function setGlobalVolume(volumePercent) {
    const volume = volumePercent / 100; // convert 0–100 to 0.0–1.0
    document.querySelectorAll('audio, video').forEach(media => {
      media.volume = volume;
    });
  }
  volumeSlider.addEventListener('input', () => {
    const value = parseInt(volumeSlider.value, 10);
    volumeValue.textContent = value;
    setGlobalVolume(value);
  });
  window.addEventListener('DOMContentLoaded', () => {
    const initialValue = parseInt(volumeSlider.value, 10);
    volumeValue.textContent = initialValue;
    setGlobalVolume(initialValue);
  });

// Näytä Asetukset popup
settingsIcon.addEventListener('click', (e) => {
  e.preventDefault();
  settingsPopup.style.display = 'flex';
});

// Sulje Asetukset popup "X"
closeSettingsPopup.addEventListener('click', () => {
  settingsPopup.style.display = 'none';
});

// Klikkaamalla boxin ulkopuolelta. (Asetukset popup)
settingsPopup.addEventListener('click', (e) => {
  if (e.target === settingsPopup) {
    settingsPopup.style.display = 'none';
  }
});


// Näytä Local popup
localPlay.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'flex';
});

// Sulje Local play popup "X"
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Klikkaamalla boxin ulkopuolelta. (Local play popup)
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Start game button
gameOptions.addEventListener('change', () => {
  const selectedOption = gameOptions.value;
  startGameBtn.disabled = selectedOption === "";
  
  // Valitse teema
  localStorage.setItem("selectedTheme", selectedOption);
});

// Aloita peli
startGameBtn.addEventListener('click', () => {
  const selectedOption = gameOptions.value;
  console.log("Starting game with:", selectedOption);
  popup.style.display = 'none';
});

// Näytä How to play popup
howToPlayLink.addEventListener('click', (e) => {
  e.preventDefault();
  howToPlayPopup.style.display = 'flex';
});

// Sulje How to play popup "X"
closeHowToPlayPopup.addEventListener('click', () => {
  howToPlayPopup.style.display = 'none';
});

// Klikkaamalla boxin ulkopuolelta. (How to play popup)
howToPlayPopup.addEventListener('click', (e) => {
  if (e.target === howToPlayPopup) {
    howToPlayPopup.style.display = 'none';
  }
});

// Dropdown menu
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

// Intro screen loader


  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-wrapper");

    if (loader) {
      setTimeout(() => {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";

        setTimeout(() => {
          loader.style.display = "none";
        }, 500); 
      }, 2000);
    }
  });

    document.querySelector('a[href="login"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginModal').style.display = 'flex';
  });
  
  document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
  });

  // Näytä Statistics popup
statisticsLink.addEventListener('click', (e) => {
  e.preventDefault();
  statisticsPopup.style.display = 'flex';
});


 // Sulje Statisctics popup
closeStatisticsPopup.addEventListener('click', () => {
  statisticsPopup.style.display = 'none';
});

 // Klikkaamalla boxin ulkopuolelta (Statistics popup)
statisticsPopup.addEventListener('click', (e) => {
  if (e.target === statisticsPopup) {
    statisticsPopup.style.display = 'none';
  }
});

// Musiikin aktivointi painamalla sivua
window.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bgAudio');

  const playAudio = () => {
    audio.play().catch(e => {
      console.log('Autoplay blocked:', e);
    });
    window.removeEventListener('click', playAudio);
  };

  window.addEventListener('click', playAudio);
});
 
    playBtn.addEventListener('click', () => {
      clickSound.currentTime = 0;      // rewind if it’s still playing
      clickSound.play().catch(err => {
        console.warn('Sound play failed:', err);
      });
    });

    window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('account') === 'created') {
    const popup = document.getElementById('accountCreatedPopup');
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.opacity = '1';
    }, 10); // delay to trigger CSS transition

    setTimeout(() => {
      popup.style.opacity = '0';
      setTimeout(() => popup.style.display = 'none', 500);
    }, 2000); // 2s visible
  }
});