var score = 0;
var questions = [
    {
        question : "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        choices : {
            optionA : "A. William and Elizabeth",
            optionB : "B. Joseph and Catherine",
            optionC : "C. John and Mary",
            optionD : "D. George and Anne"
        },
        answer: "C"
    },
    {
        question : "When did the Liberty Bell get its name?",
        choices : {
            optionA : "A. when it was made, in 1701",
            optionB : "B. when it rang on July 4, 1776",
            optionC : "C. in the 19th century, when it became a symbol of the abolition of slavery",
            optionD : "D. none of the above"
        },
        answer: "C"
    },
    {
        question : "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
        choices : {
            optionA : "A. Buttermilk",
            optionB : "B. Daisy",
            optionC : "C. Scout",
            optionD : "D. Tulip"
        },
        answer: "A"
    }
];

function generateQuestion(arr) {

    $(".current-choices").empty();
    $("#current-question").html(questions[arr].question);

    $(".current-choices").append("<button id='choiceA' value='A'>" + questions[arr].choices.optionA + "</button>");
    $(".current-choices").append("<button id='choiceB' value='B'>" + questions[arr].choices.optionB + "</button>");
    $(".current-choices").append("<button id='choiceC' value='C'>" + questions[arr].choices.optionC + "</button>");
    $(".current-choices").append("<button id='choiceD' value='D'>" + questions[arr].choices.optionD + "</button>");

}
var currentQuestion = 0;
while (currentQuestion < questions.length) {
    generateQuestion(0);
    
    $(document).ready(function(){
        $("button").on("click", function(event) {
        
            if ($(this).val() == questions[currentQuestion].answer) {
                console.log("Yes");
                currentQuestion++;
            }
            else {
                console.log("NO");
                currentQuestion++;
            }
            
          });
      });
    
}
