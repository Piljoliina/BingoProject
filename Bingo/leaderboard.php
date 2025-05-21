<?php
$host = 'localhost';
$db = 'bingo_app';
$user = 'root';
$pass = '';
 
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
 
// Users
$sql = "SELECT username, bingos FROM users ORDER BY bingos DESC LIMIT 50";
$result = $conn->query($sql);
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Leaderboard</title>
  <link rel="stylesheet" href="style2.css">
</head>
<body>
 
  <div class="leaderboard-container">
  <h1 class="leaderboard-title">🏆 Leaderboard</h1>
  <table class="leaderboard-table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Username</th>
        <th>Bingos</th>
      </tr>
    </thead>
    <tbody>
      <?php
      if ($result->num_rows > 0) {
          $rank = 1;
          while ($row = $result->fetch_assoc()) {
              echo "<tr>
                      <td>{$rank}</td>
                      <td>" . htmlspecialchars($row['username']) . "</td>
                      <td>{$row['bingos']}</td>
                    </tr>";
              $rank++;
          }
      } else {
          echo "<tr><td colspan='3'>No players yet.</td></tr>";
      }
      ?>
    </tbody>
  </table>
 
<a href="index.php" class="leaderboard-back-link">← Back to Home</a>
</div>
</body>
</html>
 
<?php $conn->close(); ?>