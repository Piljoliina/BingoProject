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



</body>
</html>