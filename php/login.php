<?php
session_start();

// Login script
// You must NOT modify this in any way, except to set your database details.

$username = $_POST["usuario"];
$password = $_POST["senha"];

// Edit this to connect to your database with your username and password
$conn=new PDO("mysql:host=localhost;dbname=dftitutorials2;","dftitutorials2","dftitutorials2");


$result=$conn->query("SELECT * FROM sh_users WHERE username='$username' AND password='$password'");
$row=$result->fetch();
if($row==false)
{
    echo "Incorrect username/password!";
    
}
else
{   
    $_SESSION["currentuser"] = $username;
    
    // Save admin status from database in a session variable

    $_SESSION["adminstatus"] = $row["adminstatus"];
    
    
    // Redirect to index.html
    header("Location: index.html");
}
?>