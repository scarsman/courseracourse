//exports.area = (x,y) => (x*y);
//exports.perimeter = (x,y) => (2(x+y));

module.exports = (x,y,callback)=> {
	if (x <=0 || y <= 0) {
		setTimeout(() =>
			callback (new Error("Rectangle value must be greter than zero"), null) ,
			2000);
	}else {
		setTimeout(() =>
			callback (null, 
			{
				perimeter: (x,y) => (2*(x+y)),
				area: (x,y) => (x*y)
			}) ,
			2000);		
	}
}
