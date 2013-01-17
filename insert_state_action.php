<!doctype html>
<html lang="it">	
	<?php
		include 'head.html';
		include 'connectDB.php';
	?>
	<body>
		<?php
			include 'header.html';
		?>
		<h2>Nuovo stato inserito : </h2>
		
		<?php
			$state = htmlspecialchars ($_POST["state"]);
			mysql_query("INSERT INTO states (name) VALUES ('$state')");
			mysql_close($conn);
			echo $state; 
		?>
	</body>	
</html>