
var milisec=0;
var seconds=10;
var minutes=0;
var answerName = ["Q1", "Q2", "Q3", "Q4", "Q5"];
var eachAnsTotal = 4;
function clock(){
document.getElementById("start").disabled = true;
document.getElementById("timer").value = minutes + ":" + seconds + ":" + milisec;
if(milisec <= 0)
{
	milisec = 9;
	seconds--;
}
if(seconds <= -1)
{
	seconds = 59;
	minutes--;
}
if(minutes <= -1)
{
	clearTimeout(timer);
	milisec = 0;
	seconds = 0;
	minutes = 0;
    
	document.getElementById("Q1").disabled = true;
	

	alert("Time is up!");
	
	return;
	
	
}
else
{
	milisec--;
}

var timer = setTimeout(clock, 100);

}
