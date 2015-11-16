var oFirebaseRef = new Firebase('http://boiling-torch-2236.firebaseIO.com/web/');

//Get a reference to the habits "table" of the database
//var oHabitsRef = oFirebaseRef.child("habits");


function selectImage(name) {
	//Clear all the other effects
	document.getElementById('icon1').style.border = "none";
	document.getElementById('icon2').style.border = "none";
	document.getElementById('icon3').style.border = "none";

	document.getElementById('icon1').setAttribute("data-active", "false");
	document.getElementById('icon2').setAttribute("data-active", "false");
	document.getElementById('icon3').setAttribute("data-active", "false");

	var image = document.getElementById(name);
	image.style.border = "5px solid #42A5F5";
	image.setAttribute("data-active", "true");
}



//Save button pressed
document.querySelector('#save_p').onclick = function(){

	var images = document.getElementsByClassName("icon");
	var image = '';

	for(var i = 0; i< images.length; i++){
		if(images[i].getAttribute("data-active") == "true"){
			image = images[i].src.substring(image.src.lastIndexOf("/img/"), image.length);
		}
	}


	var sHabitTitle = document.querySelector('#title').value;
	var sHabitIcon = image;
	var sWeeklyFreq = '';
	var sDailyFreq = '';
	var sOthers = document.querySelector('#others').value;

	var aWeeklyElements = document.getElementsByClassName(".weekly-freq");
	var aDailyElements = document.getElementsByClassName(".daily-freq");

	console.log(aWeeklyElements);
	console.log(aDailyElements);
	for(var i=0; i < aWeeklyElements; i++){
		if(aWeeklyElements[i].checked){
			sWeeklyFreq += aWeeklyElements[i].value;
		}
	}

	for(var i=0; i < aDailyElements; i++){
		if(aDailyElements[i].checked){
			sDailyFreq += aWeeklyElements[i].value;
		}
	}

	console.log("title", sHabitTitle);
	console.log("Icon", sHabitIcon);
	console.log("Weekly", sWeeklyFreq);
	console.log("Daily", sDailyFreq);
	console.log("Others", sOthers);

	var oHabitsRef = oFirebaseRef.child("habits");

	//Save the object to the database
	oHabitsRef.push().set({
		title: 				sHabitTitle,
		icon: 				sHabitIcon,
		frequency: 			sWeeklyFreq,
		daily_frequency: 	sDailyFreq,
		others: 			sOthers  
	});

}

