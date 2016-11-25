
var countFailedAsserts = 0;
var countPassedAsserts = 0;

var assertTrue = function(statement, errorMessage){
	var message = errorMessage || 'fail';
	if(!statement){
		console.log('error: ' + message);
		countFailedAsserts += 1;
	}
	else{
		countPassedAsserts += 1;
	}
}
var assertFalse = function(statement, errorMessage){
	assertTrue(!statement,errorMessage);
}


var tests = {

	testIdenticalBallsWillCollide:function(){
		var ball = new Ball(0, 0, 0.1, 0.1, '' );
		assertTrue( Physics._collideBallWithBall(ball,ball), 'Balls in same position should collide.' );
	},
	testDifferentBallsDontCollide: function(){
		var ballA = new Ball(100, 100, 0.1, 0.1, '' );
		var ballB = new Ball(0, 0, 0.1, 0.1, '' );
		assertFalse(Physics._collideBallWithBall(ballA,ballB), 'Balls with different position should not collide' );
	},
	testCollisionMatchesBothXAndYCoordinates:function(){
		var ballA = new Ball(0, 0, 0.1, 0.1, '' );
		var ballB = new Ball(0, 20, 0.1, 0.1, '' );
		var ballC = new Ball(20, 0, 0.1, 0.1, '' );
		var ballD = new Ball(20, 20, 0.1, 0.1, '' );
		var ballE = new Ball(0, 0, 0.1, 0.1, '' );
		
		assertFalse(Physics._collideBallWithBall(ballA,ballB), 'different Y shouldn\'t collide' );
		assertFalse(Physics._collideBallWithBall(ballA,ballC), 'different x shouldn\'t collide' );
		assertFalse(Physics._collideBallWithBall(ballA,ballD), 'different x and Y shouldn\'t collide' );
		assertTrue(Physics._collideBallWithBall(ballA,ballE), 'matching x and y should collide' );	
	},
	testCollisionHappensEvenIfNotPerfectlyCollided:function(){
		GLOBAL.BALL_RADIUS = 10;
		var ballA = new Ball(0, 0, 0.1, 0.1, '' );
		var ballB = new Ball(0, 0.1, 0.1, 0.1, '' );
		var ballC = new Ball(0, 11, 0.1, 0.1, '' );
		var ballD = new Ball(2, 2, 0.1, 0.1, '' );
		var ballE = new Ball(20, 2, 0.1, 0.1, '' );
		var ballF = new Ball(20, 20, 0.1, 0.1, '' );
		
		assertTrue(Physics._collideBallWithBall(ballA,ballB), 'should collide: y close enough' );
		assertFalse(Physics._collideBallWithBall(ballA,ballC), 'should not collide: y too far' );
		assertTrue(Physics._collideBallWithBall(ballA,ballD), 'should collide: both close enough' );
		assertFalse(Physics._collideBallWithBall(ballA,ballE), 'should not collide: x too far' );
		assertFalse(Physics._collideBallWithBall(ballA,ballF), 'should not collide: both too far' );


	}
	
	
	
	
	

};







for (test in tests){
	tests[test].call();
}


console.log('countPassedAsserts: ' + countPassedAsserts);
console.log('countFailedAsserts: ' + countFailedAsserts);
