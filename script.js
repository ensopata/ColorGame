
var colors = generateRandomColor(numColors);
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var rgbValue = document.querySelector("#rgbValue");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var max = squares.length;
var correctColor = pickedColor();

var btn = document.querySelectorAll(".btn")


// Optionaly amount of colors to start game 
var numColors = 6;
//Create basic colors - optionaly 6
resetColors();

//Difficult buttons
for(var i = 0; i < btn.length; i++ ){
	btn[i].addEventListener("click", function(){
		//add active class to button
		btn[0].classList.remove("selected");
		btn[1].classList.remove("selected");
		btn[2].classList.remove("selected");
		this.classList.add("selected");
		//check what difficult is choose
		if(this.textContent === "easy"){
			console.log(this.textContent)
			//and change number of squares
			numColors = 3;
		}

		if(this.textContent === "hard"){
			//and change number of squares
			numColors = 6;
		}

		if(this.textContent === "very hard"){
			//and change number of squares
			numColors = 9;
		}
		//generate colors
		resetColors();

	});
};

//Reset colors when you win
reset.addEventListener("click", function(){
	resetColors();

	});

function resetColors(){
	colors = generateRandomColor(numColors);
	correctColor = pickedColor();
	rgbValue.textContent = correctColor;
	h1.style.background = "white";
	message.textContent = "";

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else{
			squares[i].style.display = "none";
		}
	}
};


// easyModeBtn.addEventListener("click", function(){

// 	easyModeBtn.classList.add("selected");
// 	hardModeBtn.classList.remove("selected");

// 	numColors = 3;

// 	colors = generateRandomColor(numColors);
// 	correctColor = pickedColor();
// 	rgbValue.textContent = correctColor;
// 	h1.style.background = "white";
// 	message.textContent = "";
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else{
// 			squares[i].style.display = "none";
// 		}
// 	}

// });

// hardModeBtn.addEventListener("click", function(){
// 	easyModeBtn.classList.remove("selected");
// 	hardModeBtn.classList.add("selected");

// 	numColors = 6;
// 	colors = generateRandomColor(numColors);
// 	correctColor = pickedColor();
// 	rgbValue.textContent = correctColor;
// 	h1.style.background = "white";
// 	message.textContent = "";
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 		} else{
// 			squares[i].style.display = "none";
// 		}
// 	}

// });

// vhardModeBtn.addEventListener("click", function(){
// 	vhardModeBtn.classList.add("selected");
// 	easyModeBtn.classList.remove("selected");
// 	hardModeBtn.classList.remove("selected");

// 	numColors = 9;
// 	colors = generateRandomColor(numColors);
// 	correctColor = pickedColor();
// 	rgbValue.textContent = correctColor;
// 	h1.style.background = "white";
// 	message.textContent = "";
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 		} else{
// 			squares[i].style.display = "none";
// 		}
// 	}

// });

	
	// add colors to squares - loop
	for(var i = 0; i < max ; i++){
		// add click square
			squares[i].addEventListener("click", function(){
		// grab clicked color
				var clickedColor = this.style.background;


				// compare color to correctColor
				if(clickedColor === correctColor){
					this.style.background = correctColor;
					message.textContent = "Correct!";
					changeColor(correctColor);
					h1Correct();
					reset.textContent = "Play Again";
					

				} else {
					this.style.background = "#232323";
					message.textContent = "Wrong!";
					setTimeout(function (){
					message.textContent = "";
					}, 500);
				}
			});


		// fuction change color all squares
		function changeColor(color){
			// loop through all squares
			for(var i = 0;  i < max ; i++){
				// change each color to correct color
				squares[i].style.background = color;
			}
		}
		// end function change color

		// function h1 change values
		function h1Correct(){
			h1.style.background = correctColor;
		}

	}


	function pickedColor(){
		var picked = Math.floor(Math.random() * colors.length);
		return colors[picked];
	};


	function generateRandomColor(num){
		var arr = [];
		for(var i = 0; i < num; i++){
			arr.push(generateColor());
		}
		return arr;
	};

	function generateColor(){
		//generate r
		var r = Math.floor(Math.random() * 256);
		//generate g
		var g = Math.floor(Math.random() * 256);
		//generate b
		var b = Math.floor(Math.random() * 256);
		//rgb(255, 255, 0)
		return ("rgb(" + r + ", " + g + ", " + b + ")");
	};

	

