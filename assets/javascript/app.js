var score = 0;
var questions = [
    {
        question : "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        choices : ["A. William and Elizabeth", "B. Joseph and Catherine", "C. John and Mary", "D. George and Anne"],
        answer: 2
    },
    {
        question : "When did the Liberty Bell get its name?",
        choices : ["A. when it was made, in 1701", "B. when it rang on July 4, 1776", "C. in the 19th century, when it became a symbol of the abolition of slavery", "D. none of the above"],
        answer: 2
    },
    {
        question : "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
        choices : ["A. Buttermilk", "B. Daisy", "C. Scout", "D. Tulip"],
        answer: 0
    }
];

function generateTriviaGame() {
    var TriviaGame = this;
    var answersLog = {
        right: 0,
        wrong: 0
    };
    var secondsToAnswer = 30;
    TriviaGame.current = 0;
    var triviaInterval;

    TriviaGame.ask = function() {
        if (questions[TriviaGame.current]) {
            $("#time").html("Time left: " + secondsToAnswer + " seconds.");
            $("#current-question").html(questions[TriviaGame.current].question);
            var allChoices = questions[TriviaGame.current].choices;

            for (var i = 0; i < allChoices.length; i++) {
                var seperateChoice = $("<button>");
                seperateChoice.html(allChoices[i]);
                seperateChoice.attr("value", i);
                $("#current-choices").append(seperateChoice);
            }
            triviaInterval = setInterval(TriviaGame.timeKeeper, 1000);
        }
        else {
            $("#start").html("Try Again?");
            $("#start").show();
        }
    };

    TriviaGame.timeKeeper = function() {
        secondsToAnswer--;
        if (secondsToAnswer <= 0) {
            setTimeout(function() {
                TriviaGame.nextQuestion();
            });
        }
        else {
            $("#time").html("Time left: " + secondsToAnswer + " seconds.");
        }
    };

    TriviaGame.nextQuestion = function() {
        TriviaGame.current++;
        clearInterval(triviaInterval);
        secondsToAnswer = 30;
        setTimeout(function() {
            TriviaGame.responses();
            TriviaGame.ask();
        }, 2000)
    };

    TriviaGame.responses = function() {
        $("#time").html(" ");
        $("#current-question").html(" ");
        $("#current-choices").html(" ");
        $("#message").html(" ");
        $("#right").html("Right answers: " + answersLog.right);
        $("#wrong").html("Wrong answers: " + answersLog.wrong);
    };

    TriviaGame.answer = function(response) {
        var rightorWrong;
        if (response) {
            rightorWrong = 'right';
        }
        else {
            rightorWrong = 'wrong';
        }
        answersLog[rightorWrong]++;
    }
    return TriviaGame;
};
var setUp;

$("#start").on("click", function() {
    $(this).hide();
    $("div").html(" ");
    setUp = generateTriviaGame();
    setUp.ask();
});

$("#current-choices").on("click", "button", function(event) {
    
    var choiceValue = parseInt($(this).val());
    var currentTriviaRound = setUp || generateTriviaGame();
    var choiceIndex = questions[currentTriviaRound.current].answer;
    var rightAnswer = questions[currentTriviaRound.current].choices[choiceIndex];
    console.log(typeof choiceValue);
    console.log(typeof choiceIndex);
    if (choiceValue !== choiceIndex) {
        $("#message").html("Wrong! Correct answer: " + rightAnswer);
        currentTriviaRound.answer(false);
    }
    else {
        $("#message").html("Right! Correct answer: " + rightAnswer);
        currentTriviaRound.answer(true);
    }
    currentTriviaRound.nextQuestion();
});