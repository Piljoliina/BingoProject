<?php
session_start();
if (!isset($_SESSION['username'])) {
    http_response_code(401);
    echo "Not logged in";
    exit;
}

$host = 'localhost';
$db = 'bingo_app';
$user = 'root';
$pass = '';   

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo "DB connection error";
    exit;
}

$username = $_SESSION['username'];

$stmt = $conn->prepare("UPDATE users SET bingos = bingos + 1 WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Bingo updated!";
} else {
    echo "No update made.";
}

$stmt->close();
$conn->close();
?>