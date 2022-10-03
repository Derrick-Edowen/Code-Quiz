var timerCount=60;
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

var int = document.getElementById('initialScore');
var result = document.getElementById('result');
var restartGame = document.getElementById('restart');
var clearScore = document.getElementById('clear');


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
    var selectedButton1 = e.target
    if (selectedButton1 === answer3) {
        score=score+1;
        game2()
        result.innerText = "Correct!";
    } else if (selectedButton1 !== answer3){
        timerCount=timerCount-10;
        game2()
        result.innerText = "Wrong!";
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
    var selectedButton2 = e.target
    if (selectedButton2 === answer7) {
      score=score+1;
      game3()
      result.innerHTML = "Correct!";
    } else if (selectedButton2 !== answer7){
        timerCount=timerCount-10;
        game3()
        result.innerHTML = "Wrong!";
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
        var selectedButton3 = e.target
        if (selectedButton3 === answer12) {
          score=score+1;
          game4()
          result.innerHTML = "Correct!";
        } else if (selectedButton3 !== answer12){
            timerCount=timerCount-10;
            game4()
            result.innerHTML = "Wrong!";
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
            var selectedButton4 = e.target
            if (selectedButton4 === answer15) {
              score=score+1;
              game5()
              result.innerHTML = "Correct!";
            } else if (selectedButton4 !== answer15){
                timerCount=timerCount-10;
                game5()
                result.innerHTML = "Wrong!";
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
        var selectedButton5 = e.target
        if (selectedButton5 === answer20) {
        score=score+1;
        allDone()
        result.innerHTML = "Correct!";
        } else if (selectedButton5 !== answer20){
        timerCount=timerCount-10; 
        allDone()    
        result.innerHTML = "Wrong!";  
        }
        }
        



function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        document.getElementById('time').textContent = ('Time: ' + timerCount);


    if (timerCount <= 0) {
        clearInterval(timer);
        allDone();
    }
    }, 1000);
};

function allDone() {
    clearInterval(timer);
    document.getElementById('afterScreen').style.display = 'block';
    document.getElementById('game1').style.display = 'none';
    document.getElementById('game2').style.display = 'none';
    document.getElementById('game3').style.display = 'none';
    document.getElementById('game4').style.display = 'none';
    document.getElementById('game5').style.display = 'none';
    time.textContent = "Time: 0"
    document.getElementById('finalScore').textContent = ('Your Final Score is ' + score + '/5.');


}



var submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener('click', highScores); 


function highScores() {
    document.getElementById('highScore').style.display = 'block';
    document.getElementById('afterScreen').style.display = 'none';
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('game1').style.display = 'none';
    document.getElementById('game2').style.display = 'none';
    document.getElementById('game3').style.display = 'none';
    document.getElementById('game4').style.display = 'none';
    document.getElementById('game5').style.display = 'none';
    var initialInput =  document.querySelector('#initials').value;
    localStorage.setItem('initials', initialInput);
    initialInput = localStorage.getItem('initials');
    int.textContent = initialInput + ' - ' + score +'/5';
    restartGame.addEventListener("click", restart);
    clearScore.addEventListener("click", clear);

}

function restart() {
location.reload()
}
function clear() {
    localStorage.clear()
    location.reload()
}


var view = document.getElementById('score')
view.addEventListener('click', highScores) 

var startQuiz = document.querySelector(".startQuiz")
startQuiz.addEventListener("click", startGame);






