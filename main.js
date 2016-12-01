function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;


if (question1 == "Pomeranian") {
	correct++;
}
if (question2 == "Both") {
	correct++;
}
if (question3 == "Math") {
	correct++;
}
if (question4 == "fallontonight") {
	correct++;
}

var messages = ["That's amazing!","um... not so much.", "That's okay, I guess.", "Meh, you could do a lot better" ];
var pictures =  ["gffmq/oh_yeah_obama.gif","gffmq/clap.gif","gffmq/You got it dude.gif","gffmq/meh.gif"]
var range;

if (correct == 0) {
	range = 1;
}

if (correct == 1) {
	range = 1;
}

if (correct == 2) {
	range = 1;
}

if (correct == 3) {
	range = 2;
}

if (correct == 4) {
	range = 0;
}


document.getElementById("after_submit").style.visibility = "visible";


document.getElementById("message").innerHTML = messages [range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";   
document.getElementById("picture").src = pictures[range];
}