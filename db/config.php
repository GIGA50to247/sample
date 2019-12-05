<?php
session_start();
$host = "localhost"; /* Host name */
$user = "id11744188_giga50to247"; /* User */
$password = "whitelotus"; /* Password */
$dbname = "id11744188_mendozadb"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}