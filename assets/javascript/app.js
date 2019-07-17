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
    correctImg: "../images/gw.jpg",
    incorrectImg: "../images/nope.jpg",
}, {
    question: "Who wrote the Declaration of Independence?",
    answers: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "Andrew Jackson"],
    correctAnswer: "Thomas Jefferson",
    correctImg: "../images/tj.jpg",
    incorrectImg: "../images/nope.jpg",
}, {
    question: "When was the Declaration of Independence adopted?",
    answers: ["June 4, 1776", "April 4, 1776", "July 4, 1776", "August 4, 1776"],
    correctAnswer: "July 4, 1776",
    correctImg: "../images/4th-july-blog.jpg",
    incorrectImg: "../images/nope.jpg",
}, {
    question: "What was one important thing that Abraham Lincoln did?",
    answers: ["wrote the Declaration of Independence", "first Postmaster General of the United States", "freed the slaves (Emancipation Proclamation)", "started the first free libraries"],
    correctAnswer: "freed the slaves (Emancipation Proclamation)",
    correctImg: "../images/al.jpg",
    incorrectImg: "../images/nope.jpg",
}];

// 2. create all the variable necessaries
var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var userAnsclick = "";
var currentQuestion = 0; // used make this a ++ to go to next question 
var timeRemaining = 5; //timer for questions
var intervalId;

// // 3. function to show questions and answers
function nextQuestion ()
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
   var questionsArrLength = questions.length
   if(currentQuestion === questionsArrLength)
   {
       theEnd()
   }
   else
   {
        var question = questions[currentQuestion].question;
        var answerArr = questions[currentQuestion].answers;
        var answerLength = answerArr.length
        $(".question").html(question);
        //empty answers $("#answers").empty()
        // EMPTY QUESTIONS $(.)
        // for (var i=0; i<answerLength; i++)
        $(".answer1").html('<button>'+answerArr[0]+'</button>');
        $(".answer2").html('<button>'+answerArr[1]+'</button>');
        $(".answer3").html('<button>'+answerArr[2]+'</button>');
        $(".answer4").html('<button>'+answerArr[3]+'</button>');
        // $("#answers").append('<p><button class="answer-btn">'+answerArr[i]+'</button></p>');
    }
};

// 4. make a function for the timer
$(".start-btn").on("click", beginTrivia);
function beginTrivia() 
{
    clearInterval(intervalId);
    intervalId = setInterval(timeOut, 1000);
    $(".start").empty()
    nextQuestion ();
}
function timeOut ()
{
    timeRemaining--
    $(".timer").html("<p>Time Remaining: "+timeRemaining+" Seconds")
    if (timeRemaining === 0)
    {
        currentQuestion++
        unanswered++
        alert("Unanswer!") //here goes the function for outOfTime
        nextQuestion ();
        resetTimer();
        timeRemaining = 5
        beginTrivia();
    }
}
function resetTimer ()
{
    clearInterval(intervalId); //initiate next question
}

// 5. make buttons active to receive user input
$(".answer-btn").on("click", function (event)
{
    console.log(event.target.innerText)
    var userAnsclick = event.target.innerText
    if(userAnsclick === questions[currentQuestion].correctAnswer)
    {
        correctAns++
        currentQuestion++
        alert("Correct!") //here goes the function for correctAnswer
        nextQuestion ();
        timeRemaining = 5
        beginTrivia();
    }
    else
    {
        incorrectAns++
        currentQuestion++
        alert("nope!") //here goes the function for incorrectAnswer
        nextQuestion ();
        timeRemaining = 5
        beginTrivia();
    }
});

// function for correct Incorrect or unanswer question
function correctAnswer ()
{
    $(".text").html('<p>Correct!</p>')
    $(".image").html('<img src="' +questions[currentQuestion].correctImg+ '">')
}
function incorrectAnswer ()
{
    $(".text").html('<p>Nope!</p>')
    $(".correctAnswer").html('<p>The correct answer was: '+ questions[currentQuestion].correctAnswer +'</p>')
    $(".image").html('<img src="' +questions[currentQuestion].correctImg+ '">')
}
function theEnd ()
{
    $(".trivia").empty()
    resetTimer()
    $(".allDone").html('<p>All done, here is how you did!</p>')
    $(".correct").html('<p>Correct Answers: '+correctAns+'</p>')
    $(".incorrect").html('<p>Incorrect Answers: '+incorrectAns+'</p>')
    $(".unanswer").html('<p>Unanswered Questions: '+unanswered+'</p>')
    $(".start-over").html('<button class="replay">Start Over</button>')
}
// 6. Replay or start the game again
$(".replay").on("click", function() // DOES NOT WORK
{
    currentQuestion = 0
    $(".results").empty() //gets all the page blank
    beginTrivia()
})

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