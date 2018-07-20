var rect = require('./rectangle');
function solveRect(l,b){
	
	console.log("Solving for rectangle with l = "+ l + "and b = " + b);

	rect(l,b, (err, rectangle) => {
		if (err) {
			console.log(err.message);
		}else{
			console.log("the area of the rectangle is " + rectangle.area(l,b));
			console.log("the perimeter of the rectangle is " + rectangle.perimeter(l,b));
		}
	});

	console.log("this statement is after the call to rectangle");

}

solveRect(2,4);
solveRect(6,4);
solveRect(-1,4);



