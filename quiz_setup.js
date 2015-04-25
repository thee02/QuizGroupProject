// quiz_setup.js
// Used to set up the timer, run the timer, enable the quiz, and validate the quiz

// 600 seconds = 10 minutes
var time = 600;

// Used to decrement the timer every second
var interval;

// Start the timer
function startClock() {
	document.getElementById("start").disabled = true; // Disable the start button
	enableQuiz();
	// Set the timer to decrement every second
	interval = setInterval(function () {decrementTimer()}, 1000);
}

// Decrement the timer every second
function decrementTimer() {
	if (time > 0) {
		time--;
		/* Format the time from seconds to mm:ss
		 * Must multiply time by 1000 to convert to milliseconds
		 */
		var sTime = new Date(time * 1000).toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1");
		document.getElementById("time").innerText = "Time Remaining: " + sTime; // Update the timer
	}
	else {
		// If the timer runs out clear the interval, disable the quiz, and alert the user.
		clearInterval(interval);
		disableQuiz();
		alert("Time's up! Please submit your quiz.");
	}
}

// Enable the radio buttons and the submit button in the quiz
function enableQuiz() {
	for (var i = 0; i < qOneRadios.length; i++) {
		qOneRadios[i].disabled = false;
	}
	for (var i = 0; i < qTwoRadios.length; i++) {
		qTwoRadios[i].disabled = false;
	}
	for (var i = 0; i < qThreeRadios.length; i++) {
		qThreeRadios[i].disabled = false;
	}
	for (var i = 0; i < qFourRadios.length; i++) {
		qFourRadios[i].disabled = false;
	}
	for (var i = 0; i < qFiveRadios.length; i++) {
		qFiveRadios[i].disabled = false;
	}
	
	submitButton.disabled = false;
}

// Validate the quiz before submitting it
function validateQuiz() {
	var flag = true;
	
	var name = document.getElementById("name").value;
	var regExp = /^[A-Z]([a-z]*)\s[A-Z]([a-z]*)$/;
	
	if (name == "" || !regExp.test(name)) {
		flag = false;
		alert("Please enter your name (ex. John Smith).");
	}
	
	// Not sure if we want to validate the radio buttons. Maybe only if time is left on the timer?
	
	return flag;
}
