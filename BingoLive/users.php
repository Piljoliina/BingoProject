<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "bingo_app"; 

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT COUNT(id) AS total_users FROM users";
$result = $conn->query($sql);

if ($result && $row = $result->fetch_assoc()) {
    $total_users = $row['total_users'];
    echo "<p style='text-align:center; font-size: 18px; margin-top: 20px;'> Registered users: <strong>$total_users</strong></p>";
} else {
    echo "<p>Not working...</p>";
}

$conn->close();
?>