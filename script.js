var css=document.querySelector("h3");
var color1=document.querySelector(".color1");//. since class just like we do in css
var color2=document.querySelector(".color2");

var body=document.getElementById("gradient");

function setGradient(){
	body.style.background=
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 +color2.value
	 +")";	

	 css.textContent = body.style.background +";"

}


//color1.addEventListener("input",setGradient); oninput works

//color2.addEventListener("input",setGradient);