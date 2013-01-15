<?php
$host = 'localhost';
$utente = 'marcosh';
$password = 'ps49mf83';
$db = 'chocolates_db';
$conn = mysql_connect($host,$utente,$password) or die("Connessione non riuscita");

mysql_select_db($db);
?>