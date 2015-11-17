if(oFirebaseRef == null){
	var oFirebaseRef = new Firebase('http://boiling-torch-2236.firebaseIO.com/web/');
}

var oNotificationsRef = oFirebaseRef.child("notifications");

//Get all notifications, check which ones have not been displayed, and display them and update the timestamp

var curDate = Date.now();

oNotificationsRef.once("value", function(data) {
	// do some stuff once
	data.forEach(function(childSnapshot){
		var oNotification = childSnapshot.val();
		checkNotification(oNotification);
	});
});

var checkNotification = function(oNotification){
	console.log(oNotification);
}






// oFirebaseRef.child("habits").once("value", function(snapshot){
//             var sBestRecords = [];
//             var sDaily_frequencys = [];
//             var sDaysInARows = [];
//             var sDescriptions = [];
//             var sIcons = [];
//             var sTitles = [];
//             var sWeekly_frequencys = [];
            
//      snapshot.forEach(function(childSnapshot){
                
//                 var data = childSnapshot.val();
//                 sBestRecords[index] = data.bestRecord;
//                 sDaily_frequencys[index] = data.daily_frequency;
//                 sDaysInARows[index] = data.daysInARow;
//                 sDescriptions[index] = data.description;
//                 sIcons[index] = data.icon;
//                 sTitles[index] = data.title;
//                 sWeekly_frequencys[index] = data.weekly_frequency;
//                 console.log(index);
//                 index++
                
//           })
