<?php
include 'db_config.php';

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($hashedPassword);
    $stmt->fetch();
    
    if (password_verify($password, $hashedPassword)) {
        echo "Login successful!";

    } else {
        echo "Invalid password.";
    }
} else {
    echo "No user found.";
}

$stmt->close();
$conn->close();
?>