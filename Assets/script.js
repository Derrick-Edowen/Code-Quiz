var quesIndex;

var questionBank = 
[
 'Commonly used data types DO Not Include: ',
 'The condition in an if/else statement is enclosed with______. ',
 'Arrays in JavaScript can be used to store ________.',
 'String values must be enclosed within ________ when being assigned to variables.',
 'A very useful tool used during development and debugging for printing content to the debugger is:'
];
var answerSet1 = 
[
'1. Strings',
'2. Booleans',
'3. Alerts',
'4. Numbers'
];
var answerSet2 = 
[
    '1. Quotes',
    '2. Curly Brackets',
    '3. Parenthesis',
    '4. Square Brackets'
];
var answerSet3 = 
[
    '1. Numbers and Strings',
    '2. Other Arrays',
    '3. Booleans',
    '4. All of the Above'
];
var answerSet4 = 
[
    '1. Commas',
    '2. Curly Brackets',
    '3. Quotes',
    '4. Parenthesis'
];
var answerSet5 = 
[
    '1. JavaScript',
    '2. Terminal/Bash',
    '3. For Loops',
    '4. Console Log'
];

var userChoice;
var timer;
var timerCount;
var score = 0;
var questionsElement = document.getElementById('questionContainer');
var answer1Element = document.getElementById('answer1');
var answer2Element = document.getElementById('answer2');
var answer3Element = document.getElementById('answer3');
var answer4Element = document.getElementById('answer4');
var finalScore = document.getElementById('finalScore');
var resultElement = document.getElementById('result');

document.getElementById('game').style.display = 'none';
document.getElementById('afterScreen').style.display = 'none';
document.getElementById('highScore').style.display = 'none';


function startGame() {
document.getElementById('homePage').style.display = 'none';
document.getElementById('game').style.display = 'block';
timerCount = 60;
finalScore = 0;
startTimer()
playGame1()

}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        document.getElementById('time').textContent = (timerCount + ' seconds remaining');


        if (timerCount === 0) {
            clearInterval(timer);
            document.getElementById('game').style.display = 'none';
            allDone();
        }
    }, 1000);
}












//Initial start
function playGame1() {
questionsElement.textContent = (questionBank[0]);
answer1Element.textContent = (answerSet1[0]);
answer2Element.textContent = (answerSet1[1]);
answer3Element.textContent = (answerSet1[2]);
answer4Element.textContent = (answerSet1[3]);
answer1Element.addEventListener("click", playGame2);
answer2Element.addEventListener("click", playGame2);
answer3Element.addEventListener("click", correct2);
answer4Element.addEventListener("click", playGame2);
}
function playGame2() {
    questionsElement.textContent = (questionBank[1]);
    answer1Element.textContent = (answerSet2[0]);
    answer2Element.textContent = (answerSet2[1]);
    answer3Element.textContent = (answerSet2[2]);
    answer4Element.textContent = (answerSet2[3]);
resultElement.textContent = 'Wrong!';
timerCount - 10;
answer1Element.addEventListener("click", playGame3);
answer2Element.addEventListener("click", playGame3);
answer3Element.addEventListener("click", correct2);
answer4Element.addEventListener("click", playGame3);
}
function playGame3() {
    questionsElement.textContent = (questionBank[2]);
    answer1Element.textContent = (answerSet3[0]);
    answer2Element.textContent = (answerSet3[1]);
    answer3Element.textContent = (answerSet3[2]);
    answer4Element.textContent = (answerSet3[3]);
    resultElement.textContent = 'Wrong!';
    timerCount - 10;
answer1Element.addEventListener("click", playGame4);
answer2Element.addEventListener("click", playGame4);
answer3Element.addEventListener("click", playGame4);
answer4Element.addEventListener("click", correct3);
}
function playGame4() {
    questionsElement.textContent = (questionBank[3]);
    answer1Element.textContent = (answerSet4[0]);
    answer2Element.textContent = (answerSet4[1]);
    answer3Element.textContent = (answerSet4[2]);
    answer4Element.textContent = (answerSet4[3]);
    resultElement.textContent = 'Wrong!';
    timerCount - 10;
answer1Element.addEventListener("click", playGame5);
answer2Element.addEventListener("click", playGame5);
answer3Element.addEventListener("click", correct4);
answer4Element.addEventListener("click", playGame5);
}
function playGame5() {
    questionsElement.textContent = (questionBank[4]);
    answer1Element.textContent = (answerSet5[0]);
    answer2Element.textContent = (answerSet5[1]);
    answer3Element.textContent = (answerSet5[2]);
    answer4Element.textContent = (answerSet5[3]);
    resultElement.textContent = 'Wrong!';
    timerCount - 10;
answer1Element.addEventListener("click", allDone);
answer2Element.addEventListener("click", allDone);
answer3Element.addEventListener("click", allDone);
answer4Element.addEventListener("click", allDone);
}









//if the correct second button is pressed
function correct2() {
    questionsElement.textContent = (questionBank[1]);
    answer1Element.textContent = (answerSet2[0]);
    answer2Element.textContent = (answerSet2[1]);
    answer3Element.textContent = (answerSet2[2]);
    answer4Element.textContent = (answerSet2[3]);
    resultElement.textContent = 'Correct!';
    finalScore+1;
    answer1Element.addEventListener("click", playGame2);
    answer2Element.addEventListener("click", playGame2);
    answer3Element.addEventListener("click", correct3);
    answer4Element.addEventListener("click", playGame2);
}
function correct3() {
    questionsElement.textContent = (questionBank[2]);
    answer1Element.textContent = (answerSet3[0]);
    answer2Element.textContent = (answerSet3[1]);
    answer3Element.textContent = (answerSet3[2]);
    answer4Element.textContent = (answerSet3[3]);
    resultElement.textContent = 'Correct!';
    finalScore+1;
    answer1Element.addEventListener("click", playGame3);
    answer2Element.addEventListener("click", playGame3);
    answer3Element.addEventListener("click", playGame3);
    answer4Element.addEventListener("click", correct4);
    
}
function correct4() {
    questionsElement.textContent = (questionBank[3]);
    answer1Element.textContent = (answerSet4[0]);
    answer2Element.textContent = (answerSet4[1]);
    answer3Element.textContent = (answerSet4[2]);
    answer4Element.textContent = (answerSet4[3]);
    resultElement.textContent = 'Correct!';
    finalScore+1;
    answer1Element.addEventListener("click", playGame3);
    answer2Element.addEventListener("click", playGame3);
    answer3Element.addEventListener("click", correct5);
    answer4Element.addEventListener("click", playGame3);
}
function correct5() {
    questionsElement.textContent = (questionBank[4]);
    answer1Element.textContent = (answerSet5[0]);
    answer2Element.textContent = (answerSet5[1]);
    answer3Element.textContent = (answerSet5[2]);
    answer4Element.textContent = (answerSet5[3]);
    resultElement.textContent = 'Correct!';
    finalScore+1;
    answer1Element.addEventListener("click", allDone);
    answer2Element.addEventListener("click", allDone);
    answer3Element.addEventListener("click", allDone);
    answer4Element.addEventListener("click", allDone);
}















function selectAnswer(e) {
    
}




function allDone() {
    clearInterval(timer);
    document.getElementById('game').style.display = 'none';
    document.getElementById('afterScreen').style.display = 'block';
    document.getElementById('finalScore').textContent = ('Your Final Score is ' + finalScore + '.');
    var submitBtn = document.querySelector(".submitBtn");
    submitBtn.addEventListener('click', highScores); 
}
function highScores() {
    document.getElementById('highScore').style.display = 'block';
    document.getElementById('afterScreen').style.display = 'none';
}

var startQuiz = document.querySelector(".startQuiz")
startQuiz.addEventListener("click", startGame);





