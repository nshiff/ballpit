

var GLOBAL = {
	EDGE_TOP:0,
	EDGE_LEFT:0,
	EDGE_RIGHT:640,
	EDGE_BOTTOM:400,
}



function Ball(initialX, initialY, radius, color) {
  this.x = initialX;
  this.y = initialY;
  this.radius = radius;
  this.color = color;
  this.velocityX = 2;
  this.velocityY = 2;
  
  this.simulate = function(){
  
  	if(this.x > GLOBAL.EDGE_RIGHT){
		this.velocityX *= -1;
	}
	if(this.x < GLOBAL.EDGE_LEFT){
		this.velocityX *= -1;
	}
	if(this.y > GLOBAL.EDGE_BOTTOM){
		this.velocityY *= -1;
	}
	if(this.y < GLOBAL.EDGE_TOP){
		this.velocityY *= -1;
	}
	
	this.x += this.velocityX;
	this.y += this.velocityY;
  }
  
  this.render = function(){
  	fill(this.color);
  	ellipse(this.x, this.y, 2*this.radius, 2*this.radius);
  }
  
}


var ball1 = {};
var ball2 = {};

function setup() {
	createCanvas(GLOBAL.EDGE_RIGHT, GLOBAL.EDGE_BOTTOM);
	ball1 = new Ball(0, 20, 20, color(120, 0, 0) );
	ball2 = new Ball(GLOBAL.EDGE_RIGHT / 2, 20, 10, color(0, 220, 0) );

	
}

function draw(){

	clear();
	
	ball1.simulate();
	ball2.simulate();
	
	ball1.render();
	ball2.render();
}

