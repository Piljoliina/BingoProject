<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bingo</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="flex">

    <div class="header">
        <div class="header-left">
          <a class="logo" href="#">Työpaikka Bingo</a>
        </div>
      
        <div class="header-center">
            <div class="dropdown play-dropdown">
              <a href="#" class="active dropdown-toggle">Play</a>
              <div class="dropdown-content">
              <a href="#" onclick="openLocalPopup(); return false;">Local Play</a>
                <a href="online">Play Online</a>
                <a href="#" onclick="openPopup(); return false;">How to Play</a>
              </div>
            </div>
          </div>
      
        <div class="header-right">
          <div class="dropdown">
            <img src="img/Icon.png" class="dropdown-icon" alt="Icon">
                <div class="dropdown-content">
                    <a href="profile">Profile</a>
                    <a href="settings">Settings</a>
                    <a href="login">Login</a>
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
        </div>

        <div class="user-count">
            <?php include 'users.php'; ?>
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


    <div id="instructionPopup" class="popup">
      <div class="popup-content">
        <span class="close" onclick="closePopup()">&times;</span>
        <img src="img/HowToPlay.png" alt="Instructions" class="popup-img">
      </div>
    </div>

    <div id="LocalPlayPopup" class="popup">
      <div class="popup-content">
        <span class="close" onclick="closeLocalPopup()">&times;</span>
        <img src="img/HowToPlay.png" alt="Instructions" class="popup-img">
      </div>
    </div>

    <div id="loginModal" class="modal">
      <div class="modal-content">
        <span class="close" id="closeLogin">&times;</span>
        <h2>Login</h2>
        <form action="login.php" method="post">
          <label for="username">Username:</label><br>
          <input type="text" id="username" name="username"><br><br>
        
          <label for="password">Password:</label><br>
          <input type="password" id="password" name="password"><br><br>
        
          <button type="submit">Login</button>
        </form>
        
        <form action="register.php" method="post">
          <input type="text" name="username" placeholder="New username"><br><br>
          <input type="password" name="password" placeholder="New password"><br><br>
          <button type="submit">Create Account</button>
        </form>
      </div>
  </div>

      <script src="script.js"></script>

</body>
</html>