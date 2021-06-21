let ENTER = 13;
let BACKSPACE = 8;
let Background = 125;
let SPACEBAR = 32;
let MinusSign = 189;
let PlusSign = 187;
let Stroke = [255, 200, 150, 100, 50, 0];
let Strokeweight = [10, 5, 2, 0];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(Background);
}

function draw() {
	fill(255);
	textAlign(LEFT, BOTTOM);
	textSize(25);
	strokeWeight(0);
	stroke(255);
	text('Harman', 0, windowHeight);
}

function keyPressed() {
	if (keyCode == ENTER) { // checks if the Enter button is pressed 
		stroke(random(Stroke));
		// random stroke color chosen from the array called "Stroke"
		strokeWeight(random(Strokeweight));
		// random stroke weight chosen from the array called "Strokeweight"
		fill(random(255), random(255), random(255));
		// random RGB value 
		rectMode(CENTER);
		rect(random(windowWidth), random(windowHeight), random(200), random(200));
		// draw a rectangle at a random place on the canvas with a random size from 20
	}
	if (keyCode == SPACEBAR) { // checks if the Spacebar was pressed 
		stroke(random(Stroke));
		// random stroke color chosen from the array called "Stroke"
		strokeWeight(random(Strokeweight));
		// random stroke weight chosen from the array called "Strokeweight"
		fill(random(255), random(255), random(255));
		// random RBG value 
		ellipse(mouseX, mouseY, random(200), random(200));
		// draws a circle at the mouse coordinates with a random size from 200 
	}
	if (keyCode == MinusSign) {
		// checks if the Minus key was pressed
		Background -= 5;
		// changes the value of the Background, must press the mouse to update 
	}
	if (keyCode == PlusSign) {
		// checks if the Plus key was pressed 
		Background += 5;
		// changes the value of the Background, must press the mouse to update 
	}
}

function mousePressed() { // checks if the mouse was pressed
	background(Background);
	// resets the canvas
}
