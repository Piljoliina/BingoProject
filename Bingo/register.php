<?php
include 'db_config.php';

$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $password);

if ($stmt->execute()) {
    echo "Account created!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>