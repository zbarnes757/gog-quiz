$(document).ready(function () {

//Global Variables
	var questionCount = 0;
	var numCorrect = 0;
//Question Objects
	var question1 = {
		image: "img/gog1.jpg",
		text: "How much weight did Chris Pratt have to lose in order to play the role of Peter Quill aka Star-Lord?",
		options: ["45lbs","50lbs","55lbs","60lbs"],
		answer: 3
	};
	var question2 = {
		image: "img/gog2.jpg",
		text: "According to Vin Diesel, the voice of Groot, how many times did he record Groot's iconic line, 'I am Groot'?",
		options: ["500 times", "1000 times", "1250 times", "1500 times"],
		answer: 1
	};
	var question3 = {
		image: "img/gog3.jpg",
		text: "Who almost broke Chris Pratt's ribs while filming a fight scene?",
		options: ["Zoe Saldana as 'Gamora'", "Dave Bautista as 'Drax'", "Lee Pace as 'Ronan'", "Djimon Hounsou as 'Korath'" ],
		answer: 0

	};
	var question4 = {
		image: "img/gog4.jpg",
		text: "Which actor did director James Gunn not even want to see Auditioning?",
		options: ["John C. Reilly","Dave Bautista","Chris Pratt","Zoe Saldana"],
		answer: 2

	};
	var question5 = {
		image: "img/gog5.jpg",
		text: "Vin Diesel recorded all of his 'I am Groot' lines in which languages so that they could use his real voice in the film around the world?",
		options: ["Mandarin","Spanish","Russian","All of the Above"],
		answer: 3

	};
	var questions = [question1,question2,question3,question4,question5];
//Global Functions
	
	//updates score
	function updateScore () {
		if (numCorrect=== 0) {
			$('#correct p').text("0%");
			console.log("0 correct.");
		} 
		else if (numCorrect === 1){
			$('#correct p').text("20%");
			console.log("1 correct.");
		}
		else if (numCorrect === 2){
			$('#correct p').text("40%");
			console.log("2 correct.");
		}
		else if (numCorrect === 3){
			$('#correct p').text("60%");
			console.log("3 correct.");
		}
		else if (numCorrect === 4){
			$('#correct p').text("80%");
			console.log("4 correct.");
		}
		else if (numCorrect === 5){
			$('#correct p').text("100%");
			console.log("5 correct.");
		}
	};

	//Fades from welcome to questions
	$('#start').on('click', function () {
	console.log("start button works");
	$('#welcome').fadeOut("slow");
	$('#questions').delay(700).fadeIn("slow");
	$('#questionNum').delay(700).fadeIn("slow");
	$('#correct').delay(700).fadeIn("slow");
	});




})