
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
	}

};







for (test in tests){
	tests[test].call();
}


console.log('countPassedAsserts: ' + countPassedAsserts);
console.log('countFailedAsserts: ' + countFailedAsserts);
