$('#startButton').on('click', function(){
	game.start();
})

$(document).on('click', '#end', function() {
	game.done();
})

//Object to contain questions and answers
var worldCapitalQuestions = [{
	question : "What is the capital of the United States?",
	choices : ["Raleigh", "Washington D.C", "Las Vegas", "Austin"],
	correct : "Raleigh"
}, {
	question : "What is the capital of Sweden?",
	choices : ["Stockholm", "Avesta", "Helsingborg", "Tidaholm"],
	correct : "Stockholm"
}, {
	question : "What is the capital of Canada?",
	choices : ["Toronto", "Carlottetown", "Regina", "Ottawa"],
	correct : "Ottawa"
}, {
	question : "What is the capital of South Korea?",
	choices : ["Busan", "Cheonan", "Seoul", "Hanam"],
	correct : "Seoul"
}];

//Setup at the beginning of the game
var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	//Count down timer everytime it is called
	countDown: function() {
		game.counter--;
		$('#counter').html(game.counter);
		if (game.counter <= 0){
			console.log("Time is up!");
			game.done();
		}
	},

	start: function(){
		//Calls the countDown function every 1 second
		timer = setInterval(game.countDown, 1000);
		//Adding in Timer heading at the top
		$('#subWrapper').prepend('<h2>Time Remaining: <span id = "counter">120</span> Seconds</h2>');
		//Removes the start button once it is clicked
		$('#startButton').remove();
			//Loop to get the worldCapitalQuestions object and displays the question 
			for(var i = 0; i < worldCapitalQuestions.length; i++){
				$('#subWrapper').append('<h2>' + worldCapitalQuestions[i].question + '</h2>');
				//Loop to change the choices into buttons 
				for(var g = 0; g < worldCapitalQuestions[i].choices.length;g++){
					$('#subWrapper').append("<input type = 'radio' name = 'question-" + i + "' value='" + worldCapitalQuestions[i].choices[g]+ "'>" + worldCapitalQuestions[i].choices[g]);
				}
			}
			//Adding in the Done button if the user is done before the timer
			$('#subWrapper').append('<br><button id="end">Done</button>')
	},
	//Goes through each answer choices and add correct or incorrect +1 counter
	done: function() {
		$.each($('input[name = "question-0"]:checked'), function() {
			if($(this).val()==worldCapitalQuestions[0].correct){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name = "question-1"]:checked'), function() {
			if($(this).val()==worldCapitalQuestions[1].correct){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name = "question-2"]:checked'), function() {
			if($(this).val()==worldCapitalQuestions[2].correct){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name = "question-3"]:checked'), function() {
			if($(this).val()==worldCapitalQuestions[3].correct){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});	
		//Calls on the results function to display the score	
		this.result();				
	},
	//Used to display how many correct, incorrect, and unanswered
	result: function(){
		clearInterval(timer);
		$('#subWrapper h2').remove();

		$('#subWrapper').html("<h2>All Done!</h2>");
		$('#subWrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
		$('#subWrapper').append("<h3>incorrect Answers: " + this.incorrect + "</h3>");
		$('#subWrapper').append("<h3>Unanswered: " + (worldCapitalQuestions.length-(this.incorrect))+"</h3>");
	}
}


