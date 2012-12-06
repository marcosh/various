<!doctype html>
<html lang="it">	
	<head>
		<title>Chocosite</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="style.css" />
		<link rel="shortcut icon" href="sosuke.jpg" />
		<script src="script.js"></script>
	</head>
	<body>
		<header>
			<hgroup>
				<h1>
					Ciao!
				</h1>
				<nav>
					<ul>
						<li> Link </li>
						<li> Link </li>
					</ul>
				</nav>
			</hgroup>
		</header>
		<canvas id="canvas" width="300" height="300">
		</canvas>
		<script>
			var canvas = document.getElementById("canvas");
			canvas.addEventListener("click", function() {alert("you clicked before drawing")}, false);
		</script>
		<form>
			<input type="button" name="test" value="Draw" onclick="draw()">
		</form>
		<footer>
			<p>Footer</p>
		</footer>
	</body>
<html/>