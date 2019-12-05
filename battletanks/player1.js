// get the element id
var player1ID = document.getElementById("player1");

// rows and columns
var rows1 = 7;
var cols1 = 8;

// framework of columns and rows
for (a = 0; a < cols1; a++) {
	for (b = 0; b < rows1; b++) {
		
		// create a new div HTML element for each grid box
		var box1 = document.createElement("box1");
		player1ID.appendChild(box1);
		// div element id per each box based on its row and column
		box1.id = 'b' + b + a;			
		// box size 
		var size1 = 50;
		//Multiply the size from the current row or column
		var topPosition1 = b * size1;
		var leftPosition1 = a * size1;
		// use CSS absolute positioning to place each grid square on the page			
		box1.style.top = topPosition1 + 'px';
		box1.style.left = leftPosition1 + 'px';						
	}
}
//tank placement 7x8 Grid
var placement1 = [
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0],
				[0,0,9,0,0,0,0,0]
				]

//add an event listener that fires when a user clicks a square
player1ID.addEventListener("click", player1);

function player1(p1) {
    // if item clicked is not the parent element on which the event listener was set
	if (p1.target !== p1.currentTarget) {
        //random placement of tank
		var row1 = Math.floor(Math.random() * placement1.length);
		var col1 = Math.floor(Math.random() * placement1.length);
		
	//# of missiles
	var missilecount1 = 0;
	//# of tank hit
	var hitstatus1 = 7;
	
		// if player clicks the box and missed hit
		if (placement1[row1][col1] == 0) {
			//change background color if hit
			p1.target.style.background = '#e6e6e6';
			//every missed hit it deduct missiles
			missilecount1++;
			alert("PLAYER-1: Missed hit!");
			alert("PLAYER-2 Turn");
		}
		// if player clicks the box and hit the enemies tank
		if (placement1[row1][col1] == 9 ){
			//change background color if hit
			p1.target.style.background = '#e61919';
			//increment status each time tank is hit
			hitstatus1++;
			//deduct missilecount
			missilecount1--;
			//notify if hit a tank
			alert("PLAYER-1: Hit enemies tank!");
			alert("PLAYER-2 Turn");

			//if player hit all tanks
				if (hitstatus1 == 7){
					alert("PLAYER-1: All tanks is defeated!");
					//redirect to Win page
					location.replace("Game Over2.html");
				}
		}
		//if missiles run out
		if(missilecount1 == 30){
			alert("PLAYER-1: Game Over!");
			
			//redirect to Lose page
			location.replace("Victory Page2.html");
		}
	}
}