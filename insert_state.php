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
		<h2>Inserisci nuovo stato</h2>
		
		<form action="insert_state_action.php" method="post">
		Nome stato: <input type="text" name="state">
		<input type="submit" value="Inserisci">
		</form>
	</body>	
</html>