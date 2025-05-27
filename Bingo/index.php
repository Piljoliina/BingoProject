<?php
session_start();
?>

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

<audio id="bgAudio" autoplay loop>
  <source src="music/Sneaky-Snitch.mp3" type="audio/mpeg">
</audio>

<audio id="click-sound" preload="auto" src="sounds/pop.mp3"></audio>

            <div class="header">
          <!-- Logo -->
          <div class="header-left">
            <a href="#"><img src="img/Illustration14.png" class="logo" alt="Logo"></a>
          </div>

          <!-- Play Button -->
          <div class="header-center">
            <div class="dropdown play-dropdown">
              <div class="play-button dropdown-toggle">
                <img src="img/Illustration17.png" alt="Play">
              </div>
              <div class="dropdown-content">
                <a href="#" id="localPlay">Local Play</a>
                <a href="#" id="howToPlayLink">How to Play</a>
              </div>
            </div>
          </div>

          <!-- Settings and Profile -->
          <div class="header-right">
            <i class="fa-solid fa-gear settings-icon"></i>
            <div class="dropdown settings-dropdown">
              <img src="img/Illustration16.png" class="profile-icon dropdown-toggle" alt="Profile">
              <div class="dropdown-content">
                <a href="login">
                  <?php echo isset($_SESSION['username']) ? 'Logout' : 'Login'; ?>
                </a>
                <a href="leaderboard.php" id="leaderboard">Leaderboard</a>
                <a href="#" id="statisticsLink">Statistics</a>
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
          <div class="footer-icons-wrapper">
            <p class="footer-label">Contributors</p>
            <div class="social-icons">
              <a href="https://github.com/Piljoliina"><i class="fa-brands fa-github"></i></a>
              <a href="https://github.com/Ellaporo"><i class="fa-brands fa-github"></i></a>
              <a href="https://github.com/SamppleZZ"><i class="fa-brands fa-github"></i></a>
            </div>
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
          <button href="testing2.php" id="startGameBtn" disabled>Start Game</button>
        </div>
      </div>

<div id="loginModal" class="modal">
  <div class="modal-content">
    <span class="close" id="closeLogin">&times;</span>

    <?php if (isset($_SESSION['username'])): ?>
      <h2>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h2>
      <a href="logout.php" class="logout-btn">Logout</a>

    <?php else: ?>
      <h2>Login</h2>
      <form action="login.php" method="post">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>

        <button type="submit">Login</button>
      </form>

      <br>
      <form action="register.php" method="post">
        <input type="text" name="username" placeholder="New username"><br><br>
        <input type="password" name="password" placeholder="New password"><br><br>
        <button type="submit">Create Account</button>
      </form>
    <?php endif; ?>
  </div>
</div>
      <!-- How to Play Popup -->
      <div id="howToPlayPopup" class="popup" style="display: none;">
        <div class="popup-content">
          <button id="closeHowToPlayPopup" class="close-button">&times;</button>
          <h2>How to Play</h2>
          <img src="img/tutorialbingo.png" alt="How to Play" style="max-width: 100%; height: auto;"/>
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

  <!-- Statistics Popup -->
<div id="statisticsPopup" class="popup" style="display: none;">
  <div class="popup-content">
    <button id="closeStatisticsPopup" class="close-button">&times;</button>
    <h2>Statistics</h2>
<?php
if (isset($_SESSION['username'])) {
    $conn = new mysqli("localhost", "root", "", "bingo_app");
    $stmt = $conn->prepare("SELECT bingos FROM users WHERE username = ?");
    $stmt->bind_param("s", $_SESSION['username']);
    $stmt->execute();
    $stmt->bind_result($bingos);
    $stmt->fetch();
    $stmt->close();
    $conn->close();

    echo "<p><strong>Bingoes Achieved:</strong> $bingos</p>";
}
?>
  </div>
</div>

    <script src="script.js"></script>
</body>
</html>