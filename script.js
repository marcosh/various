function draw() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var my_gradient = context.createLinearGradient(0, 0, 300, 225);
	my_gradient.addColorStop(0, "black");
	my_gradient.addColorStop(0.5, "red");
	my_gradient.addColorStop(1, "white");
	context.fillStyle = my_gradient;
	context.fillRect(0, 0, 300, 300);
	canvas.addEventListener("click", clicked, false)
}

function clicked(e) {
	var x;
	var y;
	if (e.pageX != undefined && e.pageY != undefined) {
		x = e.pageX;
		y = e.pageY;
	}
	else {
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	
	alert(x + " " + y)
}

function get_location() {
	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(show_map, handle_error,{enableHighAccuracy: true, maximumAge: 600000});
	} else {
		alert("it doesn't work");
	}
}

function show_map(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var accuracy = position.coords.accuracy;
  alert(latitude + " " + longitude + " " + accuracy);
}

function handle_error(err) {
	if(err.code == 1) {
		alert("user said no");
	}
}