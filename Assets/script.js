var timerCount=40;
var score =0;

var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');

var answer5 = document.getElementById('answer5');
var answer6 = document.getElementById('answer6');
var answer7 = document.getElementById('answer7');
var answer8 = document.getElementById('answer8');

var answer9 = document.getElementById('answer9');
var answer10 = document.getElementById('answer10');
var answer11 = document.getElementById('answer11');
var answer12 = document.getElementById('answer12');

var answer13 = document.getElementById('answer13');
var answer14 = document.getElementById('answer14');
var answer15 = document.getElementById('answer15');
var answer16 = document.getElementById('answer16');

var answer17 = document.getElementById('answer17');
var answer18 = document.getElementById('answer18');
var answer19 = document.getElementById('answer19');
var answer20 = document.getElementById('answer20');




var result = document.getElementById('result');

document.getElementById('game1').style.display = 'none';
document.getElementById('game2').style.display = 'none';
document.getElementById('game3').style.display = 'none';
document.getElementById('game4').style.display = 'none';
document.getElementById('game5').style.display = 'none';
document.getElementById('afterScreen').style.display = 'none';
document.getElementById('highScore').style.display = 'none';














function startGame() {
    startTimer()
    document.getElementById('game1').style.display = 'block';
    document.getElementById('homePage').style.display = 'none';
    answer1.addEventListener("click", selectedAnswer1);
    answer2.addEventListener("click", selectedAnswer1);
    answer3.addEventListener("click", selectedAnswer1);
    answer4.addEventListener("click", selectedAnswer1);
}

    function selectedAnswer1(e) {
    var selectedButton = e.target
    if (selectedButton === answer3) {
        score=score+1;
        result.innerHTML = "Correct!";
        game2()
    } else if (selectedButton !== answer3){
        timerCount=timerCount-10;
        result.innerHTML = "Wrong!";
        game2()
    }
    
    }
   

function game2() {
    document.getElementById('game2').style.display = 'block';
    document.getElementById('game1').style.display = 'none';
    answer5.addEventListener("click", selectedAnswer2);
    answer6.addEventListener("click", selectedAnswer2);
    answer7.addEventListener("click", selectedAnswer2);
    answer8.addEventListener("click", selectedAnswer2);
}
    function selectedAnswer2(e) {
    var selectedButton = e.target
    if (selectedButton === answer7) {
      score=score+1;
      result.innerHTML = "Correct!";
      game3()
    } else if (selectedButton !== answer7){
        timerCount=timerCount-10;
        result.innerHTML = "Wrong!";
        game3()
    }

    }


function game3() {
    document.getElementById('game3').style.display = 'block';
    document.getElementById('game2').style.display = 'none';
    answer9.addEventListener("click", selectedAnswer3);
    answer10.addEventListener("click", selectedAnswer3);
    answer11.addEventListener("click", selectedAnswer3);
    answer12.addEventListener("click", selectedAnswer3);
}
    function selectedAnswer3(e) {
        var selectedButton = e.target
        if (selectedButton === answer12) {
          score=score+1;
          result.innerHTML = "Correct!";
          game4()
        } else if (selectedButton !== answer12){
            timerCount=timerCount-10;
            result.innerHTML = "Wrong!";
            game4()
        }
    }

function game4() {
        document.getElementById('game4').style.display = 'block';
        document.getElementById('game3').style.display = 'none';
        answer13.addEventListener("click", selectedAnswer4);
        answer14.addEventListener("click", selectedAnswer4);
        answer15.addEventListener("click", selectedAnswer4);
        answer16.addEventListener("click", selectedAnswer4);
}
        function selectedAnswer4(e) {
            var selectedButton = e.target
            if (selectedButton === answer15) {
              score=score+1;
              result.innerHTML = "Correct!";
              game5()
            } else if (selectedButton !== answer15){
                timerCount=timerCount-10;
                result.innerHTML = "Wrong!";
                game5()
            }
        }

        

function game5() {
        document.getElementById('game5').style.display = 'block';
        document.getElementById('game4').style.display = 'none';
        answer17.addEventListener("click", selectedAnswer5);
        answer18.addEventListener("click", selectedAnswer5);
        answer19.addEventListener("click", selectedAnswer5);
        answer20.addEventListener("click", selectedAnswer5);
}   
        function selectedAnswer5(e) {
        var selectedButton = e.target
        if (selectedButton === answer20) {
        score=score+1;
        result.innerHTML = "Correct!";
        allDone()
        } else if (selectedButton !== answer20){
        timerCount=timerCount-10;
        result.innerHTML = "Wrong!"; 
        allDone()      
        }
        }
        



function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        document.getElementById('time').textContent = (timerCount + ' seconds remaining');


    if (timerCount <= 0) {
        clearInterval(timer);
        allDone();
    }
    }, 1000);
};

function allDone() {
    document.getElementById('afterScreen').style.display = 'block';
    document.getElementById('game1').style.display = 'none';
    document.getElementById('game2').style.display = 'none';
    document.getElementById('game3').style.display = 'none';
    document.getElementById('game4').style.display = 'none';
    document.getElementById('game5').style.display = 'none';
    time.textContent = "0 second(s) remaining"
    document.getElementById('finalScore').textContent = ('Your Final Score is ' + score + '.');
    var submitBtn = document.querySelector(".submitBtn");
    submitBtn.addEventListener('click', highScores); 
}
function highScores() {
    document.getElementById('highScore').style.display = 'block';
    document.getElementById('afterScreen').style.display = 'none';
}


var startQuiz = document.querySelector(".startQuiz")
startQuiz.addEventListener("click", startGame);





