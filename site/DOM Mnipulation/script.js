// console.log(document.getElementById("title")); 
// console.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded",function(event){
	//This event listener pre-loads the js file before the HTML content is rendered.

	function sayHello (event) {
		console.log(event);

		// here, "this" refers to the button
		this.textContent="Said it!";

		// .value returns the value entered in the input form
		var name=document.getElementById("name").value;
		var message="<h2>Hello "+name+"!</h2>";

		// .textContent displays the message assigned to it
		document.getElementById("content").textContent=message;

		// .innerHTML interpretes the message as HTML 
		document.getElementById("content").innerHTML=message;

		if(name==="student"){
			var title=document.querySelector("#title").textContent;
			title+=" & Loving it!";
			document.querySelector("#title").textContent=title;
		}
	}

	document.querySelector("button").addEventListener("click",sayHello);

	document.querySelector("body").addEventListener("mousemove",function(event){
		if(event.shiftKey==true){
			console.log("X:"+event.clientX);
			console.log("Y:"+event.clientY);
		}
	});


});



// document.querySelector("button").onclick=sayHello;