

var GLOBAL = {
	EDGE_TOP:0,
	EDGE_LEFT:0,
	EDGE_RIGHT:640,
	EDGE_BOTTOM:400,
	BALLS:[],
}

var Physics = {

	simulate:function(){
		for(var i=0; i<GLOBAL.BALLS.length; i++){
			GLOBAL.BALLS[i].simulate();
		}
	}

};


var Art = {

	render:function(){
		clear();
		for(var i=0; i<GLOBAL.BALLS.length; i++){
			GLOBAL.BALLS[i].render();
		}
	}

};



function Ball(initialPositionX, initialPositionY, velocityX, velocityY, color) {
  this.x = initialPositionX;
  this.y = initialPositionY;
  this.radius = 10;
  this.color = color;
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  
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


function setup() {

	createCanvas(GLOBAL.EDGE_RIGHT, GLOBAL.EDGE_BOTTOM);

	var ball1 = new Ball(0, 0, 1, 1, color(120, 0, 0) );
	var ball2 = new Ball(0, 100, 1, 1, color(0, 220, 0) );
	var ball3 = new Ball(100, 0, 2, 1, color(0, 0, 120) );
	var ball4 = new Ball(200, 200, -1, -1, color(200, 200, 200) );

	GLOBAL.BALLS.push(ball1);
	GLOBAL.BALLS.push(ball2);
	GLOBAL.BALLS.push(ball3);
	GLOBAL.BALLS.push(ball4);

}

function draw(){	
	Physics.simulate();
	Art.render();
}

