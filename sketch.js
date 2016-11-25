


var EDGE_TOP = 0;
var EDGE_LEFT = 0;
var EDGE_RIGHT = 310;
var EDGE_BOTTOM = 200;

function setup() {
	createCanvas(EDGE_RIGHT, EDGE_BOTTOM);
}


var x = 50;
var y = 50;
var velocityx = 5;
var velocityy = 5;
var radius = 20;

function draw(){

	
	
	if(x > EDGE_RIGHT){
		velocityx *= -1;
	}
	if(x < EDGE_LEFT){
		velocityx *= -1;
	}
	if(y > EDGE_BOTTOM){
		velocityy *= -1;
	}
	if(y < EDGE_TOP){
		velocityy *= -1;
	}
	
	x += velocityx
	y += velocityy
	ellipse(x, y, 2*radius, 2*radius);
}

