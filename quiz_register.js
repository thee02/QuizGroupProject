// quiz_register.js
// Event registration for quiz buttons, and disable the quiz on page load

// Acquire radio buttons
var qOneRadios = document.getElementsByName("Q1");
var qTwoRadios = document.getElementsByName("Q2");
var qThreeRadios = document.getElementsByName("Q3");
var qFourRadios = document.getElementsByName("Q4");
var qFiveRadios = document.getElementsByName("Q5");

var submitButton = document.getElementById("submit");

function disableQuiz() {
	for (var i = 0; i < qOneRadios.length; i++) {
		qOneRadios[i].disabled = true;
	}
	for (var i = 0; i < qTwoRadios.length; i++) {
		qTwoRadios[i].disabled = true;
	}
	for (var i = 0; i < qThreeRadios.length; i++) {
		qThreeRadios[i].disabled = true;
	}
	for (var i = 0; i < qFourRadios.length; i++) {
		qFourRadios[i].disabled = true;
	}
	for (var i = 0; i < qFiveRadios.length; i++) {
		qFiveRadios[i].disabled = true;
	}
}

this.disableQuiz();
submitButton.disabled = true;

submitButton.onclick = validateQuiz;

document.getElementById("start").onclick = startClock;