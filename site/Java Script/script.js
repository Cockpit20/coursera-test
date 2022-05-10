// var x="Hello World!";

//----------------------SCOPE------------------------
// var message="in global";
// console.log("global: message ="+message);

// var a=function(){
// 	var message="inside a";
// 	console.log("a: message ="+message);
// 	function b (){
// 	console.log("b: message ="+message);
// 	}
// 	b();
// }

// a();

//----------------JAVASCRIPT TYPES-------------------
// var x;
// console.log(x);

// if(x==undefined)
// 	console.log("x is undefined");

// x=5;
// if(x==undefined)
// 	console.log("x is undefined");
// else
// 	console.log("x has been defined");

//----------------STRING CONCATENATION----------------
// var string="Hello";
// string+=" World";
// console.log(string+"!");

//-------------------MATH OPERATORS-------------------
// console.log((5+4)/3);
// console.log(undefined/5);

//----------------------EQUALITY-----------------------
// var x=4,y=4;
// if (x==y) {
// 	console.log("x is equal to y");
// }

// x="4";
// if (x==y) {
// 	console.log("x is equal to y"); //prints due to TYPE COERCION
// }

//-------------------STRICT EQUALITY------------------
// if (x===y) {
// 	console.log("x is equal to y");
// }
// else{
// 	console.log("x is not equal to y");
// }

//---------------IF STATEMENT (ALL FALSE)-------------
// if(false||null||undefined||""||0||NaN)
// console.log("This line won't ever execute");
// else
// console.log("All False");

//---------------IF STATEMENT (ALL TRUE)-------------
// if(true && "hello" && 1 && -1 && "false")
// console.log("All True");

//-----------------PLACEMENT OF BRACES---------------
// function a()
// {
// 	return
// 	{
// 		name:"Yuckoff"
// 	};
// }
// function b(){
// 	return{
// 		name:"Yuckoff"
// 	};
// }

// console.log(a()); //returns undefined
// console.log(b());

//--------------------FOR LOOP----------------------
// var sum=0;
// for (var i = 0; i < 10; i++) {
// 	sum+=i;
// }
// console.log("Sum of 0 through 9 is "+sum);

//-----------------DEFAULT VALUES--------------------
function orderChickenWith(sideDish){
	sideDish=sideDish||"whatever!";
	console.log("Chicken with "+ sideDish);
}
orderChickenWith("noodles");
orderChickenWith();
