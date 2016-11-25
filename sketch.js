

var GLOBAL = {
	EDGE_TOP:0,
	EDGE_LEFT:0,
	EDGE_RIGHT:640,
	EDGE_BOTTOM:400,
}



function Ball(initialX, initialY, radius) {
  this.x = initialX;
  this.y = initialY;
  this.radius = radius;
  this.velocityX = 10;
  this.velocityY = 10;
  
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
	  ellipse(this.x, this.y, 2*this.radius, 2*this.radius);
  }
  
}


var ball = new Ball(0,10,20);


function setup() {
	createCanvas(GLOBAL.EDGE_RIGHT, GLOBAL.EDGE_BOTTOM);
	

	
}

function draw(){

	
	
	ball.simulate();
	ball.render();
	
}

