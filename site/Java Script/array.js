//-------------------------ARRAYS-----------------------------
// var array= new Array();
// array[0]="Mark";
// array[1]=2;
// array[2]=function (name) {
// 	console.log("Hello "+name);
// };
// array[3]={course:"HTML,CSS & JS"};

// console.log(array);
// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);

//------------------------------------------------------------
// var names=["Yaakov","John","Joe"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello "+names[i]);
// }
// names[100]="Jim";
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello "+names[i]);
// }

//----------------------FOR IN LOOP----------------------------
// var myObj={
// 	name: "Yaakov",
// 	course: "HTML/CSS/JS",
// 	platform: "Coursera"
// };
// for (var prop in myObj){
// 	console.log(prop+":"+myObj[prop]);
// }

// var names=["Yaakov","John","Joe"];
// for (var name in names){
// 	console.log("Hello "+names[name]);
// }





//---------------------------CLOSURES-----------------------------
function makeMultiplier(multiplier){
	function b() {
		console.log("Multiplier is:"+multiplier);
	}
	b();
	var myFunc=function(x){
		return multiplier * x;
	}
	return myFunc;
}
var multiplyBy3=makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll=makeMultiplier(2);
console.log(doubleAll(10));

//-------------IMMEDIATELY INVOKED FUNCTION EXPRESSION-------------
(function(name){
	console.log("Hello "+name);
})("Coursera");