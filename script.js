var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var RandomButton = document.getElementById("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomizeGradient() {
      var letters = '0123456789ABCDEF';
      var rancolor = '#';
      var rancolor2 = '#';
      for (var i = 0; i < 6; i++) {
        rancolor += letters[Math.floor(Math.random() * 16)];  
      }
      for (var j = 0; j < 6; j++) {
        rancolor2 += letters[Math.floor(Math.random() * 16)];
      }

      color1.value = rancolor;
      color2.value = rancolor2;
      setGradient();
    }

//initial color values to match default starting gradient.
color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomizeGradient);