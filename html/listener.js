$(function(){
	window.onload = (e) => {
		$("#container").hide();
	
		window.addEventListener('message', (event) => {
	
	if (event.data.type === "ui") {
    document.querySelector("#money").innerHTML = "       " + event.data.money + "$";
	if (event.data.font === true) {
		
	
	}
let percentage = event.data.hunger


let width1 = (percentage / 100);

let color = "";
if (percentage <= 10) {
  color = "red";
} else if (percentage <= 50) {
  color = "orange";
} else {
  color = "green";
}


let progressBar = document.querySelector(".progress-bar-hunger");
progressBar.style.width = `${width1}rem`;
progressBar.style.backgroundColor = color;


let percentage2 = event.data.water
let width2 = (percentage2 / 100);



let progressBarr = document.querySelector(".progress-bar-thirst");
let thirsticon = document.querySelector("#thirst")
let colorr = "";
if (percentage2 <= 10) {
  colorr = "red";

} else if (percentage2 <= 50) {
  colorr = "orange";
} else {
  colorr = "green";
}

progressBarr.style.backgroundColor = colorr;
progressBarr.style.width = `${width2}rem`;
thirsticon.style.color = colorr;

let progressBarrr = document.querySelector(".progress-bar-fuel");
let fuelicon = document.querySelector("#fuel")
let width3 = (event.data.fuel / 100);
if (event.data.fuel <= 10) {
	color = "red";
  } else if (event.data.fuel <= 50) {
	color = "orange";
  } else {
	color = "green";
  }
progressBarrr.style.width = `${width3}rem`;	
progressBarrr.style.backgroundColor = color;	
fuelicon.style.color = color;

var item = event.data;



			if (item !== undefined && item.o2 !== undefined) {
				$("#oxygen").show()
				var oxygenBar = document.getElementById("oxygen");
				var value = item.o2;
				if (value === 0) {
				  oxygenBar.style.display = "none";
				} else {
				   var percentage3 = convertToPercentage(value);
				  var blueHeight = percentage3 + "%";
				  var blackHeight = (100 - percentage3) + "%";
				  oxygenBar.innerHTML = '<div style="background-color: black; height: ' + blackHeight + ';"></div><div style="background-color: blue; height: ' + blueHeight + ';"></div>'; 
				  oxygenBar.style.display = "";
				}

			}else{
				$("#oxygen").hide();
			}
			if (item !== undefined && item.vehicle !== undefined) {
				
				$("#vehicle").show();
				document.querySelector("#kmh").innerHTML = "       " + event.data.speed + " km/h";

				const buckle = document.getElementById("buckle");
				const unbuckle = document.getElementById("unbuckle");

				switch (event.data.microphone) {
					case false:
					
						document.querySelector(".mic").innerHTML = '<i class="fa fa-microphone-slash" style = "color:red"></i>';
						
						break;
					case true:
						document.querySelector(".mic").innerHTML = '<i class="fa fa-microphone " style= "color: lightgreen"></i>';
						
						break;
					default:
						document.querySelector(".mic").innerHTML = '<i class="fa fa-microphone-slash " style= "color:red"></i>';
					break;
				}
				
switch (event.data.belt) {
	case false:
	
		document.querySelector("#seatbelt svg").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="M12 2a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m.39 12.79a34 34 0 0 1 4.25.25c.06-2.72-.18-5.12-.64-6.04c-.13-.27-.31-.5-.5-.7l-8.07 6.92c1.36-.22 3.07-.43 4.96-.43M7.46 17c.13 1.74.39 3.5.81 5h2.07c-.29-.88-.5-1.91-.66-3c0 0 2.32-.44 4.64 0c-.16 1.09-.37 2.12-.66 3h2.07c.44-1.55.7-3.39.83-5.21a34.58 34.58 0 0 0-4.17-.25c-1.93 0-3.61.21-4.93.46M12 7S9 7 8 9c-.34.68-.56 2.15-.63 3.96l6.55-5.62C12.93 7 12 7 12 7m6.57-1.33l-1.14-1.33l-3.51 3.01c.55.19 1.13.49 1.58.95l3.07-2.63m2.1 10.16c-.09-.03-1.53-.5-4.03-.79c-.01.57-.04 1.16-.08 1.75c2.25.28 3.54.71 3.56.71l.55-1.67m-13.3-2.87l-3.94 3.38l.89 1.48c.02-.01 1.18-.46 3.14-.82c-.11-1.41-.14-2.8-.09-4.04Z"/></svg>';
		
		break;
	case true:
		document.querySelector("#seatbelt svg").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="white" d="M12 2a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m.39 12.79a34 34 0 0 1 4.25.25c.06-2.72-.18-5.12-.64-6.04c-.13-.27-.31-.5-.5-.7l-8.07 6.92c1.36-.22 3.07-.43 4.96-.43M7.46 17c.13 1.74.39 3.5.81 5h2.07c-.29-.88-.5-1.91-.66-3c0 0 2.32-.44 4.64 0c-.16 1.09-.37 2.12-.66 3h2.07c.44-1.55.7-3.39.83-5.21a34.58 34.58 0 0 0-4.17-.25c-1.93 0-3.61.21-4.93.46M12 7S9 7 8 9c-.34.68-.56 2.15-.63 3.96l6.55-5.62C12.93 7 12 7 12 7m6.57-1.33l-1.14-1.33l-3.51 3.01c.55.19 1.13.49 1.58.95l3.07-2.63m2.1 10.16c-.09-.03-1.53-.5-4.03-.79c-.01.57-.04 1.16-.08 1.75c2.25.28 3.54.71 3.56.71l.55-1.67m-13.3-2.87l-3.94 3.38l.89 1.48c.02-.01 1.18-.46 3.14-.82c-.11-1.41-.14-2.8-.09-4.04Z"/></svg>';
		
		break;
	default:
		document.querySelector("#seatbelt svg").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 2a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m.39 12.79a34 34 0 0 1 4.25.25c.06-2.72-.18-5.12-.64-6.04c-.13-.27-.31-.5-.5-.7l-8.07 6.92c1.36-.22 3.07-.43 4.96-.43M7.46 17c.13 1.74.39 3.5.81 5h2.07c-.29-.88-.5-1.91-.66-3c0 0 2.32-.44 4.64 0c-.16 1.09-.37 2.12-.66 3h2.07c.44-1.55.7-3.39.83-5.21a34.58 34.58 0 0 0-4.17-.25c-1.93 0-3.61.21-4.93.46M12 7S9 7 8 9c-.34.68-.56 2.15-.63 3.96l6.55-5.62C12.93 7 12 7 12 7m6.57-1.33l-1.14-1.33l-3.51 3.01c.55.19 1.13.49 1.58.95l3.07-2.63m2.1 10.16c-.09-.03-1.53-.5-4.03-.79c-.01.57-.04 1.16-.08 1.75c2.25.28 3.54.71 3.56.71l.55-1.67m-13.3-2.87l-3.94 3.38l.89 1.48c.02-.01 1.18-.46 3.14-.82c-.11-1.41-.14-2.8-.09-4.04Z"/></svg>';
	break;
}

switch (event.data.locked) {
	case 1:
		
		document.querySelector("#lock i").innerHTML = '<i class="fa fa-unlock"></i>';
		
		break;
	case 2:
		document.querySelector("#lock i").innerHTML = '<i class="fa fa-lock"></i>';
		
		break;
	default:

	break;
}

			}
			if (item !== undefined && item.vehicle === false) {
				$("#vehicle").hide();
			}
			if (item !== undefined && item.type === "ui") {
  
				if (item.display === true) {
                    $("#container").show();
                    
				} else{
                    $("#container").hide();
                }
			}
			
		} else {
			console.log(event.data.buckle)
			console.log(event.data.volume)
		if(event.data.buckle === true){
			var audio = new Audio('sounds/unbuckle.ogg');
			audio.volume = event.data.volume;
			audio.play();
		}
		else{
			var audio = new Audio('sounds/buckle.ogg');
			audio.volume = event.data.volume;
			audio.play();
		}
			var audio = new Audio('sounds/buckle.ogg');
			audio.volume = event.data.volume;
			audio.play();
		}
		});
	};
});


function convertToPercentage(num) {
  if (num < 0) {
    return 0;
  } else if (num >= 1 && num <= 10) {
    return (num - 1) * 10 + 10;
  }
}


