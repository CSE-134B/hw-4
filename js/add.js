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
	var image = "";

	for(var i = 0; i< images.length; i++){
		if(images[i].getAttribute("data-active") == "true"){
			image = images[i].src.substring(images[i].src.indexOf("/img/"), images[i].src.length);
		}
	}


	var sHabitTitle = document.querySelector('#title').value;
	var sHabitIcon = image;
	var sWeeklyFreq = "";
	var sDailyFreq = "";
    var sBestRecord = 0;
    var sDaysInARow = 0;
    var sNumCompletedToday = 0;
    var sTotalToday = 5;
    var sDescription = document.querySelector('#description').value;
	var sOthers = document.querySelector('#others').value;

	var aWeeklyElements = document.getElementsByClassName("weekly-freq");
	var aDailyElements = document.getElementsByClassName("daily-freq");

	console.log(aWeeklyElements);
	console.log(aDailyElements);
	for(var i=0; i < aWeeklyElements.length; i++){
		if(aWeeklyElements[i].checked){
			sWeeklyFreq += aWeeklyElements[i].value + ",";
		}
	}

	for(var i=0; i < aDailyElements.length; i++){
		if(aDailyElements[i].checked){
			sDailyFreq += aDailyElements[i].value + ",";
		}
	}

	console.log("title", sHabitTitle);
	console.log("Icon", sHabitIcon);
	console.log("Weekly", sWeeklyFreq);
	console.log("Daily", sDailyFreq);
	console.log("Others", sOthers);


	var oHabitsRef = oFirebaseRef.child("habits");

	oNewHabitRef = oHabitsRef.push();
	sHabitId = oNewHabitRef.key();
	
	oNewHabitRef.set({
		title: 				sHabitTitle,
		icon: 				sHabitIcon,
		weekly_frequency: 	sWeeklyFreq,
		daily_frequency: 	sDailyFreq,
        description:        sDescription,
        bestRecord:         sBestRecord,
        daysInARow:         sDaysInARow, 
        numCompletedToday:  sNumCompletedToday,
        totalToday:         sTotalToday,
	});

	var oNotificationsRef = oFirebaseRef.child("notifications");
	var date = Date.now();
	
	var oNewNotificationRef = oNotificationsRef.child(sHabitId);

	oNewNotificationRef.set({
    	habitTitle:			sHabitTitle,
    	weekly_frequency: 	sWeeklyFreq,
    	daily_frequency: 	sDailyFreq,
    	last_updated: 		date
    });				


}

