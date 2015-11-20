# hw-4

Problems we ran into:

- Notifications
	We could not figure out a good way to handle notifications, due to browsers not supporting push notifications.  Because of this, we implemented notifications using firebase to store a timestamp of the last time the habit was seen.  This way, if habits were missed, the user would see an alert on the list page that they missed a certain number of habits.  If they complete a habit, the datestamp will be updated, and if they see a notification the date stamp will be updated so that they do not constantly get the alert on the list page.

- The more recent added habit is shown underneath the old ones. 
    We tried to fix how the list is displayed, but we ended up braking the whole display. Our method for approaching this in the next assignment is to save all the habits that we call from firebase in the array first, then console in the reverse order of array. However, we think this method could be very slow, so we may go with different approach if it is so. 

Who did what:

Tyler Tedeschi A11155293
-Set up the initial code for firebase
-Animation on progress bar
-Add a habit to the firebase database
-Set up notifications with firebase
-Bug fixes

Kann Chea A11
-Validate the forms when users add new habit without providing title, weekly and daily frequency.
-Setup hosting on firebase
-Start working on pagination that will be used in assignment #5 
-Bug fixes