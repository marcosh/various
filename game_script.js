var tiles_array = [[1,12,11],[2,"<-",10],[3,"",9],[4,"->",8],[5,6,7]]
var empty_position = [2,1]
var moves = 0

function init() {
	if (canvas && canvas.getContext) {
		var context = canvas.getContext('2d');
		if (context) {
			//draw the grid
			draw_grid(context);
			
			//draw the tiles
			draw_tiles(context);
		}
		
		//add click event listener
		canvas.addEventListener("click", on_click, false)
	}
}

function draw_grid(context) {
	context.clearRect(0, 0, 301, 501);

	// draw the grid
	context.beginPath();
	
	context.lineWidth = 1;
			
	/*vertical lines*/
	for (var x = 0; x <= 301; x += 100) {
		context.moveTo(0.5 + x, 0);
		context.lineTo(0.5 + x, 501);
	}
			
	/*horizontal lines*/
	for (var y = 0; y <= 501; y += 100) {
		context.moveTo(0, 0.5 + y);
		context.lineTo(301, 0.5 + y);
	}
			
	/*draw*/
	context.strokeStyle = "#ccc";
	context.stroke();
			
	// draw the barriers
	context.beginPath();
			
	context.moveTo(100,100);
	context.lineTo(201,100);
			
	context.moveTo(100,400);
	context.lineTo(201,400);
			
	context.moveTo(100,200);
	context.lineTo(100,301);
			
	context.moveTo(200,200);
	context.lineTo(200,301);
			
	context.lineWidth = 5;
	context.stroke();
}

function draw_tiles(context) {
	var i = 0;
	var j = 0;
	
	context.font="50px Arial";
	
	for (var row = 0; row < 5; row++)
	{
		for (var element = 0; element < 3; element++)
		{
			context.fillText(tiles_array[row][element], j * 100 + 25, (i + 1) * 100 -30);
			j++;
		}
		i++;
		j = 0;
	}
}

function on_click(e) {
	var pos = get_position(e);
	var value = tiles_array[pos[0]][pos[1]];
	var relative_pos = dist(pos, empty_position);
	
	if (relative_pos === "l" && (pos[0] != 2 || pos[1] != 0) && (pos[0] != 2 || pos[1] != 1)) {
		tiles_array[pos[0]][pos[1]] = "";
        tiles_array[pos[0]][pos[1] + 1] = value;
        empty_position = pos;
        moves = moves + 1;
	} else if (relative_pos === "r" && (pos[0] != 2 || pos[1] != 2) && (pos[0] != 2 || pos[1] != 1)) {
		tiles_array[pos[0]][pos[1]] = "";
        tiles_array[pos[0]][pos[1] - 1] = value;
        empty_position = pos;
        moves = moves + 1;
    } else if (relative_pos === "u" && (pos[0] != 0 || pos[1] != 1) && (pos[0] != 3 || pos[1] != 1)) {
		tiles_array[pos[0]][pos[1]] = "";
        tiles_array[pos[0] + 1][pos[1]] = value;
        empty_position = pos;
        moves = moves + 1;
	} else if (relative_pos === "d" && (pos[0] != 4 || pos[1] != 1) && (pos[0] != 1 || pos[1] != 1)) {
		tiles_array[pos[0]][pos[1]] = "";
        tiles_array[pos[0] - 1][pos[1]] = value;
        empty_position = pos;
        moves = moves + 1;
	}
	
	if (canvas && canvas.getContext) {
		var context = canvas.getContext('2d');
		if (context) {
			//draw the grid
			draw_grid(context);
			
			//draw the tiles
			draw_tiles(context);
			
			//update the number of moves
			var moves_text = document.getElementById("moves");
			moves_text.innerHTML = "Number of moves: " + moves;
		}
	}
}

function get_position(e) {
	var x;
	var y;
	
	if (e.pageX != undefined && e.pageY != undefined) {
		x = e.pageX;
		y = e.pageY;
    }
    else {
		x = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }
	
	return [Math.floor(y/100), Math.floor(x/100)];	
}


function dist(p,q) {
	if (p[0] == q[0]) {
		if (p[1] == q[1] - 1) {
			return "l";
		} else if (p[1] == q[1] +1) {
			return "r";
		}
	} else if (p[1] == q[1]) {
		if (p[0] == q[0] -1) {
			return "u";
		} else if (p[0] == q[0] +1) {
			return "d"
		}
	}	
}