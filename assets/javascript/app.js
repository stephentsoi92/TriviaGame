/* 
The game am about to create consist on showing a question to the user and 
for the user to be able to click on one correct answer out of 4 options. Once
the time runs out or an answer is chosen the game will continue to its next
question.
*/
// 1. create a array that contvar or an object for the questions and answers about US History
var questions = [{
    question: "Who was the first president of the United States of America?",
    answers: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "Andrew Jackson"],
    correctAnswer: "George Washington",
    correctImg: "correctImage",
    incorrectImg: "incorrectImage",
}, {
    question: "Who wrote the Declaration of Independence?",
    answers: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "Andrew Jackson"],
    correctAnswer: "Thomas Jefferson",
    correctImg: "correctImage",
    incorrectImg: "incorrectImage",
}, {
    question: "When was the Declaration of Independence adopted?",
    answers: ["June 4, 1776", "April 4, 1776", "July 4, 1776", "August 4, 1776"],
    correctAnswer: "July 4, 1776",
    correctImg: "correctImage",
    incorrectImg: "incorrectImage",
}, {
    question: "What was one important thing that Abraham Lincoln did?",
    answers: ["wrote the Declaration of Independence", "first Postmaster General of the United States", "freed the slaves (Emancipation Proclamation)", "started the first free libraries"],
    correctAnswer: "freed the slaves (Emancipation Proclamation)",
    correctImg: "correctImage",
    incorrectImg: "incorrectImage",
}];

// object works console.log(questions[2].question);

// 2. create all the variable necessaries
var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var userAnsclick = "";
var currentQuestion = "";

//
var randomArr = questions.length
console.log(Math.floor(Math.random() * randomArr))
var currentArr = Math.floor(Math.random() * randomArr)
// 3. for loop to show questions and answers
function newQuestion ()
{
    /* THIS WORKS FOR ONE QUESTION
    var question1 = questions[0].question;
    var answerArr = questions[0].answers
    $(".question").html(question1);
    for (var i=0; i<answerArr.length; i++)
    $(".answers").append("<p><button>"+answerArr[i]+"</button></p>");
    */
   // I can randomize the questions and pull the properties from that object in the array

   /*THIS MAKES A RANDOM QUESTION 
   var randomArr = questions.length
   console.log(Math.floor(Math.random() * randomArr))
   var currentArr = Math.floor(Math.random() * randomArr)
   var question = questions[currentArr].question;
    var answerArr = questions[currentArr].answers
    $(".question").html(question);
    for (var i=0; i<answerArr.length; i++)
    $(".answers").append("<p><button>"+answerArr[i]+"</button></p>");
    */
   
   var question = questions[currentArr].question;
    var answerArr = questions[currentArr].answers;
    $(".question").html(question);
    for (var i=0; i<answerArr.length; i++)
    $(".answers").append("<p><button>"+answerArr[i]+"</button></p>");
    /*
    for (var i=0; i<questions.length; i++)
    {
        console.log(questions[i]);
        $(".question").html(randomQuestion);
        $(".answers").html("<p>"+questions[i].answers+"</p>");
        if (questions[i].answers === questions[i].correctAnswer)
        {

        }
        console.log(questions[0].question); 
        console.log(questions[i].answers);
    
        // $(".answers").append("<p>"+questions[0].answers+"</p>")

        // var answersArr = questions[0].answers
        // for (var j=0; j<answersArr.length; j++)
        // {
        //     $(".answers").append("<p>"+answersArr+"</p>")
        //     //$(".answers").html("<p>"+answersArr[j]+"</p>")
        // }
    }
    */
};
newQuestion ();
// 4. make buttons active to receive user input
$(document).on("click", function (event)
{
    console.log(event.target.innerText)
    var userAnsclick = event.target.innerText
    if(userAnsclick === questions[currentArr].correctAnswer)
    {
        correctAns++
        alert("correct!")
    }
    else
    {
        incorrectAns++
        alert("nope!")
    }
});



//  make the page active for click
// $(document).on("click", function (event)
// {
//     $(".start-btn").
//     // I need a for loop to go through the questions array
// })
// // 2. declare correct answer 
// function correct ()
// {
//     if ()
// }
// $("body").on("click", function()
// {

// })