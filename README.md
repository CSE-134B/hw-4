# hw-4

Problems we ran into:

Notifications
	-We could not figure out a good way to handle notifications, due to browsers not supporting push notifications.  Because of this, we implemented notifications using firebase to store a timestamp of the last time the habit was seen.  This way, if habits were missed, the user would see an alert on the list page that they missed a certain number of habits.  If they complete a habit, the datestamp will be updated, and if they see a notification the date stamp will be updated so that they do not constantly get the alert on the list page.







Who did what:

Tyler Tedeschi A11155293
-Set up the initial code for firebase
-Animation on progress bar
-Add a habit to the firebase database
-Set up notifications with firebase
-Bug fixes

