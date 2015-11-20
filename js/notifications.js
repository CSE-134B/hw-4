if(oFirebaseRef == null){
	var oFirebaseRef = new Firebase('http://boiling-torch-2236.firebaseIO.com/web/');
}

var oNotificationsRef = oFirebaseRef.child("notifications");

//Get all notifications, check which ones have not been displayed, and display them and update the timestamp

var oCurDate = Date.now();

oNotificationsRef.once("value", function(data) {
	// do some stuff once
	data.forEach(function(childSnapshot){
		var oNotification = childSnapshot.val();
		var sNotificationKey = childSnapshot.key();
		checkNotification(oNotification, sNotificationKey);
	});
});

var checkNotification = function(oNotification, sNotificationKey){
	console.log(oNotification);
	oCurDate = new Date(oCurDate);
	var iMissedNotifications = 0;
	var oLastUpdated = new Date(oNotification.last_updated);
	
	var aDays = getWeeklyFrequency(oNotification.weekly_frequency);

	var iDateDifference = oCurDate.getDate() - oLastUpdated.getDate();
	var iWeeks = 0;
	console.log("date difference", iDateDifference);

	if(iDateDifference > 1){		//Not on same date
		if(iDateDifference > 7){
			iWeeks = iDateDifference / 7;
			iMissedNotifications = aDays.length * oNotification.daily_frequency;
		} else{
			var iCurDay = oCurDate.getDay();
			var iNotDay = oNotification.getDay();
			var iMinDay = 0;
			if(iCurDay > iNotDay){
				iMinDay = iNotDay;
				for(i=0; i<aDays.length; i++){
					if(aDays[i] > iMinDay){
						iMissedNotifications+= oNotification.daily_frequency;
					}
				}
			} else{
				iMinDay = iCurDay;
				for(i=0; i<aDays.length; i++){
					if(aDays[i] < iCurDay){
						iMissedNotifications+= oNotification.daily_frequency;
					}
				}
			}
		}
	} else{
		//Hourly Notifications here
	}

	if(iMissedNotifications > 0){
		showUserNotifications(iMissedNotifications);
	}

	var oCheckedNotificationRef = new Firebase('http://boiling-torch-2236.firebaseIO.com/web/notifications/' + sNotificationKey);
	var oUpdatedDate = Date.now();

	oCheckedNotificationRef.update({'last_updated': oUpdatedDate});
}


var getWeeklyFrequency = function(sDays){
	aDays = [];
	if(sDays.indexOf("sunday") > -1){
		aDays.push(0);
	}
	if(sDays.indexOf("monday") > -1){
		aDays.push(1);
	}
	if(sDays.indexOf("tuesday") > -1){
		aDays.push(2);
	}
	if(sDays.indexOf("wednesday") > -1){
		aDays.push(3);
	}
	if(sDays.indexOf("thursday") > -1){
		aDays.push(4);
	}
	if(sDays.indexOf("friday") > -1){
		aDays.push(5);
	}
	if(sDays.indexOf("saturday") > -1){
		aDays.push(6);
	}

	return aDays;

}

var showUserNotifications = function(iNotificationCount){
	alert("You have missed" + iNotificationCount + "habits!");
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
