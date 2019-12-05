// get the element id
var player2ID = document.getElementById("player2");

// rows and columns
var rows2 = 7;
var cols2 = 8;

// framework of columns and rows
for (c = 0; c < cols2; c++) {
	for (d = 0; d < rows2; d++) {
		
		// create a new div HTML element for each grid box
		var box2 = document.createElement("box2");
		player2ID.appendChild(box2);
		// give each div element a unique id based on its row and column
		box2.id = 'b' + d + c;			
		// box size
		var size2 = 50;
		//Multiply the size from the current row or column
		var topPosition2 = d * size2;
		var leftPosition2 = c * size2;
		//use CSS absolute positioning to place each grid square on the page			
		box2.style.top = topPosition2 + 'px';
		box2.style.left = leftPosition2 + 'px';						
	}
}
//tank placement 7x8 Grid
var placement2 = [
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0]
				]

//add an event listener that fires when a user clicks a square
player2ID.addEventListener("dblclick", player2);

function player2(p2) {
    // if item clicked (p1.target) is not the parent element on which the event listener was set
	if (p2.target !== p2.currentTarget) {
        //random placement of tank
		var row2 = Math.floor(Math.random() * placement2.length);
		var col2 = Math.floor(Math.random() * placement2.length);
				
	//# of missiles
	var missilecount2 = 0;
	//# of tank hit
	var hitstatus2 = 7;
	
		// if player clicks the box and missed hit
		if (placement2[row2][col2] == 0) {
			//change background color if hit
			p2.target.style.background = '#e6e6e6';
			//every missed hit it deduct missiles
			missilecount2++;
			alert("PLAYER-2: Missed hit!");
			alert("PLAYER-1 Turn!");
		}
		// if player clicks the box and hit the enemies tank
		if (placement2[row2][col2] == 9 ){
			//change background color if hit
			p2.target.style.background = '#e61919';
			//increment status each time tank is hit
			hitstatus2++;
			//deduct missilecount
			missilecount2--;
			//notify if hit a tank
			alert("PLAYER-2: You hit enemies tank!");
			alert("PLAYER-1 Turn!");

			//if player hit all tanks
				if (hitstatus2 == 7){
					alert("PLAYER-2: All tanks is defeated!");
					//redirect to Win page
					location.replace("Game Over1.html");
				}
		}
		//if missiles run out
		if(missilecount2 == 30){
			alert("PLAYER-2: Game Over!");
			
			//redirect to Lose page
			location.replace("Victory Page1.html");
		}
		
	}
}