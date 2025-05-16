<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bingo</title>
    <link rel="stylesheet" href="style2.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

<div class="loader-wrapper">
  <div class="loader">
    <div class="loader-inner"></div>
  </div>
</div>

    <div class="header">
        <div class="header-left">
          <img src="img/Illustration14.png" class="logo" href="#">
        </div>
      
        <div class="header-center">
          <div class="dropdown play-dropdown">
            <img src="img/Illustration17.png"#" class="play-button active dropdown-toggle">
            <div class="dropdown-content">
              <a href="#" id="localPlay">Local Play</a>
              <a href="#" id="howToPlayLink">How to Play</a> <!-- Added link to How to Play -->
              <a href="#">Play Online</a>
            </div>
          </div>
        </div>
      
        <div class="header-right">
          <div class="settings">
            <i class="fa-solid fa-gear settings-icon" alt="Icon"></i>
              <div class="dropdown settings-dropdown">
                <img src="img/Illustration16.png" class="profile-icon dropdown-toggle" alt="Icon">
                  <div class="dropdown-content">
                    <a href="#" id="openSettings">Settings</a>
                    <a href="#" id="howToPlayLinkDuplicate">How to Play</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

      <div class="wrap">
        <div class="bingo-menu-container">
            <div class="bingo-head">
                <h1 class="bingo-title">A Pörrsikurssi</h1>
            </div>
    
            <div class="menu-body">
                <h2 class="box-title">With A Lorem Ipsum </h2>
            </div>  
    
            <div class="introduction">
                <h3 class="introduction-text">
                    Työpaikka bingo is a new interactive way to enjoy those boring oddlong online work meetings
                </h3>

                
            <div class="user-count">
              <?php include 'users.php'; ?>
            </div>

            <br>
            
            <div class="wrapper-img">
            <img src="img/lain.jpg" alt="lain">
            </div>

            </div>
        </div>
    </div>

    <footer>

      <div class="footer-container">
        <div class="social-icons">
          <h1>3 gatos</h1>
          <a href="https://github.com/Piljoliina"><i class="fa-brands fa-github"></i></a>
          <a href="https://github.com/Ellaporo"><i class="fa-brands fa-github"></i></a>
          <a href="https://github.com/SamppleZZ"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
      
    </footer>
      
      <!-- Local Play Popup -->
      <div id="popup" class="popup" style="display: none;">
        <div class="popup-content">
          <button id="closePopup" class="close-button">&times;</button>
          <h2>Create Local Game</h2>
          <select id="gameOptions">
            <option value="esitykset">Esitykset</option>
            <option value="kokous">Kokous</option>
            <option value="koulu">Koulu</option>
            <option value="diat">Diat</option>
            <option value="tyokaverit">Työkaverit</option>
            <option value="politiikka">Politiikka</option>
          </select>
          <br><br>
          <button href="testing2.html" id="startGameBtn" disabled>Start Game</button>
        </div>
      </div>

      <!-- How to Play Popup -->
      <div id="howToPlayPopup" class="popup" style="display: none;">
        <div class="popup-content">
          <button id="closeHowToPlayPopup" class="close-button">&times;</button>
          <h2>How to Play</h2>
          <img src="img/HowToPlay.png" alt="How to Play" style="max-width: 100%; height: auto;"/>
        </div>
      </div>

  <!-- Settings Popup -->
  <div id="settingsPopup" class="popup" style="display: none;">
    <div class="popup-content" class="icon-container">
      <button id="closeSettingsPopup" class="close-button">&times;</button>
      <h2 class="popup-title">Main Volume</h2>
      <div class="volume-control">
        <input type="range" id="volumeSlider" min="0" max="100" value="50" />
        <span id="volumeValue">50</span>
      </div>
    </div>
  </div>

    <script src="script.js"></script>
</body>
</html>