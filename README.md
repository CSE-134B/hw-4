# hw-4

Problems we ran into:

- Notifications
	We could not figure out a good way to handle notifications, due to browsers not supporting push notifications.  Because of this, we implemented notifications using firebase to store a timestamp of the last time the habit was seen.  This way, if habits were missed, the user would see an alert on the list page that they missed a certain number of habits.  If they complete a habit, the datestamp will be updated, and if they see a notification the date stamp will be updated so that they do not constantly get the alert on the list page.

- The more recent added habit is shown underneath the old ones. 
    We tried to fix how the list is displayed, but we ended up breaking the whole display. Our method for approaching this in the next assignment is to save all the habits that we call from firebase in the array first, then console in the reverse order of array. However, we think this method could be very slow, so we may go with different approach if it is so. 
    
- Image uploads
    We also tried to handle image uploading from the users, but did not figure out a way to do so consistently for this assignment. One alternative we thought of was allowing users to choose from a list of preselected images; however, this could potentially be limiting for the user. For the next assignment, we plan to focus on this aspect of our application and find a good solution to our problem. 
    
Changes from template:

One main thing we changed from the template given to us was the design of the habits shown on the list.html page. We altered the appearance and location of the done, edit, and delete buttons. We made the edit and delete buttons smaller and on the upper-right-hand corner of each habit to reduce the likelihood users would accidentally press one of these buttons when trying to press the green done button. Furthermore, having a delete button on the upper right corner fits in with established design principles and would be familiar for users. 

Another thing we added was a optional description section for each habit. That way, users could enter a brief description of their habit if they wanted to, and would not have to be constrained by the length of the habit title. 

Who did what:

Tyler Tedeschi A11155293
- Set up the initial code for firebase
- Animation on progress bar
- Add a habit to the firebase database
- Set up notifications with firebase
- Bug fixes

Kann Chea A11
- Validate the forms when users add new habit without providing title, weekly and daily frequency.
- Setup hosting on firebase
- Start working on pagination that will be used in assignment #5 
- Bug fixes

Megan Ring A10931249
- Redesigned appearance of a habit in the list
- Fixed responsive styling from the original template
- Set up button functionality on the list page to store input
- Animations for deleting a habit
- Validation for input on the add a habit form
- Alerts for invalid input and delete habit confirmation
- Bug fixes

Xu He
- Template for habit list item
- Add a habit to firebase
- Delete a habit from firebase
- Connecting buttons (daily frequency, check, etc.) to firebase data
- Bug fixes

Jiangtian Wang
- Saving habit data to firebase
- Edit a habit using firebase
- Bug fixes