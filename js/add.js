var firebaseRef = new Firebase('boilding-torch-2236.firebaseIO.com');

//Get a reference to the habits part of the database
var habitsRef = ref.child("habits");

//Save the object to the database
// habitsRef.set({
// 	habittitle: {
// 		icon: 				"icon.png",
// 		frequency: 			"M,W,T",
// 		daily_frequency: 	"3",
// 		others: 			"value"  
// 	}
// });
