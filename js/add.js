var oFirebaseRef = new Firebase('http://boiling-torch-2236.firebaseIO.com');

//Get a reference to the habits "table" of the database
//var oHabitsRef = oFirebaseRef.child("habits");

document.querySelector('#save_p').onclick = function(){

	var sHabitTitle = document.querySelector('#title_text');
	var sHabitIcon = image.src;
	var aWeeklyFreq = [];
	var aDailyFreq = []
	var sOthers = document.querySelector('#others_text');
	document.querySelector("input:checkbox[name=date]:checked").each(function(){
    	aWeeklyFreq.push(this.value);
	});
	document.querySelector("input:checkbox[name=date]:checked").each(function(){
    	aDailyFreq.push(this.value);
	});

	console.log("title", shabitTitle);
	console.log("Icon", sHabitIcon);
	console.log("Weekly", aWeeklyFreq);
	console.log("Daily", aDailyFreq);
	console.log("Others", sOthers);

	//Save the object to the database
	// habitsRef.set({
	// 	habittitle: {
	// 		icon: 				"icon.png",
	// 		frequency: 			"M,W,T",
	// 		daily_frequency: 	"3",
	// 		others: 			"value"  
	// 	}
	// });

}

