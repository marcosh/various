var tiles_array = [[1,12,11],[2,"<-",10],[3,"",9],[4,"->",8],[5,6,7]]
var empty_position = (2,1)
var moves = 0

function draw_grid() {
	if (canvas && canvas.getContext) {
		var context = canvas.getContext('2d');
		if (context) {
			// draw the grid
			context.beginPath();
			
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
			
			//draw the tiles
			draw_tiles(context);
		}
	}
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



function dist(p,q) {
}