//--------------------OBJECT CREATION------------------
// var company= new Object();
// company.name="Facebook";
// company.ceo=new Object();
// company.ceo.firstName="Mark";
// company.ceo.favColor="Blue";

// console.log(company);
// console.log("Company CEO name is: "+company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName="stock of company";
// company[stockPropName]=110;
// console.log("Stock price is: "+company[stockPropName]);

//-------------------`OBJECT LITERAL`------------------------
// var facebook={
// 	name:"Facebook",
// 	ceo:{
// 		firstName:"Mark",
// 		favColor:"Blue"
// 	},
// 	"stock of company": 110
// };
// console.log(facebook);
// console.log("Company CEO name is: "+facebook.ceo.firstName);





//---------------------`FUNCTIONS`---------------------------
// function multiply(x,y){
// 	return x*y;
// }
// console.log(multiply(3,4));
// multiply.version="v.1.0.0";
// console.log(multiply.version);

//------------------FUNCTION FACTORY-----------------------
// function makeMultiplier(multiplier){
// 	var myFunc=function(x){
// 		return multiplier * x;
// 	}
// 	return myFunc;
// }
// var multiplyBy3=makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll=makeMultiplier(2);
// console.log(doubleAll(10));

//------------PASSING FUNCTIONS AS ARGUMENTS----------------
// function doOperationOn(x,operation){
// 	return operation(x);
// }

// var result=doOperationOn(5,multiplyBy3);
// console.log(result);
// result=doOperationOn(100,doubleAll);
// console.log(result);





//---------------------`COPY BY VALUE`-------------------------
// var a=7;
// var b=a;
// console.log("a:"+a);
// console.log("b:"+b);
// b=5;
// console.log("After update of b:");
// console.log("a:"+a);
// console.log("b:"+b);

//-------------------`COPY BY REFERENCE`-------------------------
// var a={x:7};
// var b=a;
// console.log(a);
// console.log(b);
// b.x=5;
// console.log("After update of b.x:");
// console.log(a);
// console.log(b);

//---------------------`PASS BY VALUE`-------------------------
// function changePrimitive(primValue){
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue=5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value=7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);

//-------------------`PASS BY REFERENCE`-------------------------
// function changeObject(objValue){
// 	console.log("in changeObject...");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x=5;
// 	console.log("after:");
// 	console.log(objValue);
// }

// var value={x:7};
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value);





//------------------FUNCTION CONSTRUCTOR-----------------------
// function test(){
// 	console.log(this);
// 	this.myName="S Chandra";
// }
// test();
// console.log(window.myName);

// function Circle(radius) {
// 	this.radius=radius;
// }
// Circle.prototype.getArea=function(){
// 	return Math.PI*Math.pow(this.radius,2);
// };

// var myCircle= new Circle(10);
// console.log(myCircle.getArea());

// var myCircle= new Circle(20);
// console.log(myCircle);

//----------------------THIS KEYWORD---------------------------
var literalCircle={
	radius:10,
	getArea: function () {
		var self=this;
		console.log(this);
		var increaseRadius= function(){
		self.radius=20;
		}
		increaseRadius();
		return Math.PI*Math.pow(this.radius,2);
	}
};
console.log(literalCircle.getArea());