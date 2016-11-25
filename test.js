Physics._collideBallWithBall('a','b');



var countFailedTests = 0;

var assertTrue = function(statement, errorMessage){
	var message = errorMessage || 'fail';
	if(!statement){
		console.log('error: ' + message);
		countFailedTests += 1;
	}

}
var tests = {

	testIdenticalBallsWillCollide:function(){
		var ball = new Ball(0, 0, 0.1, 0.1, '' );
		assertTrue( Physics._collideBallWithBall(ball,ball), 'Balls in same position should collide.' );
	},
	testDifferentBallsDontCollide: function(){
		var ballA = new Ball(100, 100, 0.1, 0.1, '' );
		var ballB = new Ball(0, 0, 0.1, 0.1, '' );
		assertTrue( false == Physics._collideBallWithBall(ballA,ballB), 'Balls with different position should not collide' );

	},

};







for (test in tests){
	tests[test].call();
}


if(countFailedTests == 0){
	console.log('passed all tests');
}
