if(oFirebaseRef == null){
	var oFirebaseRef = new Firebase('http://boiling-torch-2236.firebaseIO.com/web/');
}

var oNotificationsRef = oFirebaseRef.child("notifications");

//Get all notifications, check which ones have not been displayed, and display them and update the timestamp