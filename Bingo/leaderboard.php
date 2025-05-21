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
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 30px;
    }
    h1 {
      text-align: center;
    }
    table {
      width: 60%;
      margin: 30px auto;
      border-collapse: collapse;
      background: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    th, td {
      padding: 12px 16px;
      border: 1px solid #ccc;
      text-align: center;
    }
    th {
      background-color: #333;
      color: white;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    a.back {
      display: block;
      text-align: center;
      margin-top: 20px;
      text-decoration: none;
      color: #333;
    }
  </style>
</head>
<body>

  <h1>🏆 Leaderboard</h1>
  <table>
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

  <a href="index.php" class="back"> <- Back to Home</a>

</body>
</html>

<?php $conn->close(); ?>