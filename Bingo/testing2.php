<?php
session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Työpaikka bingo</title>
    <link rel="stylesheet" href="testing2.css">
    <script src="testing2.js" defer></script>
</head>
<body>

<div id="loader" class="loader-overlay">
    <div id="loader-count">3</div>
</div>

    <a class="wwrapper" href="index.php">
        <img class="nuoli" src="img/nuoli1.png">
    </a>

    <div class="logo-container">
        <img src="img/Illustration14.png" alt="Logo" width="150px">
    </div>

<div class="bingo-wrapper">
    <p id="click-counter">Clicked: 0</p>
    <div class="bingo-container">
        <div id="bingo-grid" class="grid"></div>
    </div>
</div>

<div id="bingo-popup" class="bingo-popup-message">BINGO!</div>
 <audio id="snap-sound" src="sounds/snap.mp3" preload="auto"></audio>

</body>
</html>