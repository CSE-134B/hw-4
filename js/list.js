var oFirebaseRef = new Firebase('http://boiling-torch-2236.firebaseIO.com/web/');


window.onload = function() {

    
function showMsg(element){
    var msgElement = (element.parentNode.parentNode.getElementsByClassName("message"))[0];
    // alert(msgElement.innerHTML);
    msgElement.style.visibility="visible";
}

//function deleteHabit(element){}
          


var animator = function(oProgress){
	var iMsecsPerUpdate = 1000/60; 	// # of milliseconds between updates, this gives 60fps
	var iDuration = 3;             	// secs to animate for
	var iInterval = oProgress.getAttribute('max')/(iDuration*1000/iMsecsPerUpdate);	//Edit this to change the amount the bar animates for
    oProgress.value = oProgress.value + iInterval;
    if (oProgress.value + iInterval < oProgress.getAttribute('max')){
       setTimeout(animator(oProgress), iMsecsPerUpdate);
    } else {
        oProgress.value = oProgress.getAttribute('max');
    }
}

var progressBarAnimate = function(doneButton){
    console.log("entered function op-done");
	var oParentLi = doneButton.parentNode.parentNode;
	var aChildren = oParentLi.getElementsByTagName('progress');
	var oProgress = aChildren[0];
    animator(oProgress);
}

document.querySelector(".op-del").onclick = function(){
    console.log("entered function op-del");
  	var oHabit = this.parentNode.parentNode;
  	var sHabitId = oHabit.querySelector('input[name=habit-id]').value;
    var oHabitsList = oHabit.parentNode;
  	var oHabitRef = oFirebaseRef.child("habits" + sHabitId);
    var oNotificationRef = oFirebaseRef.child("notifications" + sHabitId);

  	oHabitRef.remove(onCompleteHabit);

  	var onCompleteHabit = function(error) {
  		if (error) {
  			console.log('Synchronization failed');
  		} else {
  			console.log('Synchronization succeeded');
        oNotificationRef.remove(onCompleteNotification);
  		}
    }

    var onCompleteNotification = function(error) {
      if (error) {
        console.log('Synchronization failed');
      } else {
        console.log('Synchronization succeeded');
        oHabitsList.removeChild(oHabit);
      }
    }
}



};