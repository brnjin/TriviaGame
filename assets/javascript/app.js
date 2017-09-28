//Timer to countdown at the beginning
//Questions and answer choices 
//If all are answered, continue to next page
//Counter to check correct, incorrect, and unanswered questions

var wins = 0;
var losses = 0;
var incompelete = 0;

var correctAnswerTimer = function() {

}

function pageLoad() {

}

var worldCapitalQuestions = [{
	question : "What is the capital of the United States?",
	choices : ["Raleigh", "Washington D.C", "Las Vegas", "Austin"],
	correct : 1
}, {
	question : "What is the capital of Sweden?",
	choices : ["Stockholm", "Avesta", "Helsingborg", "Tidaholm"],
	correct : 0
}, {
	question : "What is the capital of Canada?",
	choices : ["Toronto", "Carlottetown", "Regina", "Ottawa"],
	correct : 3
}, {
	question : "What is the capital of South Korea?",
	choices : ["Busan", "Cheonan", "Seoul", "Hanam"],
	correct : 2
}];

console.log(worldCapitalQuestions[1]);