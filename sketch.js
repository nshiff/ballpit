

var GLOBAL = {
	EDGE_TOP:0,
	EDGE_LEFT:0,
	EDGE_RIGHT:640,
	EDGE_BOTTOM:400,
	BALLS:[],
}

var Art = {
	render:function(){
		clear();
		for(var i=0; i<GLOBAL.BALLS.length; i++){
			var nextBall = GLOBAL.BALLS[i];
			fill(nextBall.color);
			ellipse(nextBall.x, nextBall.y, 2*nextBall.radius, 2*nextBall.radius);
		}
	}
};


var Physics = {


	_advanceBallPosition: function(ball){
		ball.x += ball.velocityX * ball.radius;
		ball.y += ball.velocityY * ball.radius;
	},


	_collideBallWithWalls: function(ball){
		if(ball.x > GLOBAL.EDGE_RIGHT){
			ball.velocityX *= -1;
		}
		if(ball.x < GLOBAL.EDGE_LEFT){
			ball.velocityX *= -1;
		}
		if(ball.y > GLOBAL.EDGE_BOTTOM){
			ball.velocityY *= -1;
		}
		if(ball.y < GLOBAL.EDGE_TOP){
			ball.velocityY *= -1;
		}

		
	},

	simulate:function(){
		for(var i=0; i<GLOBAL.BALLS.length; i++){
			var currentBall = GLOBAL.BALLS[i];
			Physics._collideBallWithWalls(currentBall);
			Physics._advanceBallPosition(currentBall);

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
}


function setup() {

	createCanvas(GLOBAL.EDGE_RIGHT, GLOBAL.EDGE_BOTTOM);

	var ball1 = new Ball(0, 0, 0.1, 0.1, color(120, 0, 0) );
	var ball2 = new Ball(0, 100, 0.08, 0.08, color(0, 220, 0) );
	var ball3 = new Ball(100, 0, 0.2, 0.09, color(0, 0, 120) );
	// var ball4 = new Ball(200, 200, -0.05, -0.05, color(200, 200, 200) );

	GLOBAL.BALLS.push(ball1);
	GLOBAL.BALLS.push(ball2);
	GLOBAL.BALLS.push(ball3);
	// GLOBAL.BALLS.push(ball4);

}

function draw(){	
	Physics.simulate();
	Art.render();
}

