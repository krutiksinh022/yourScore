let score = 0;
let wicketdown = 0;
let over = 0;
let ball = 0;
let scoreEle = document.getElementById("count-score")
let wicketEle = document.getElementById("count-wicket")
let ballEle = document.getElementById("count-ball")
let overEle = document.getElementById("count-over")
function checkOver() {
    if (ball == 6) {
        ball = 0;
        over = over + 1;
        overEle.innerHTML = "over : " + over
    }
}
function zero() {
    ball = ball + 1;
    ballEle.innerHTML = "Balls : " + ball;
    checkOver()
}
function one() {
    score = score + 1;
    scoreEle.innerHTML = "Score :" + score;
    ball = ball + 1;
    ballEle.innerHTML = "Balls : " + ball;
    checkOver()

}
function two() {
    score = score + 2;
    scoreEle.innerHTML = "Score :" + score;
    ball = ball + 1;
    ballEle.innerHTML = "Balls : " + ball;
    checkOver()
}
function three() {
    score = score + 3;
    scoreEle.innerHTML = "Score :" + score;
    ball = ball + 1;
    ballEle.innerHTML = "Balls : " + ball;
    checkOver()
}
function four() {
    score = score + 4;
    scoreEle.innerHTML = "Score :" + score;
    ball = ball + 1;
    ballEle.innerHTML = "Balls : " + ball;
    checkOver()
}
function five() {
    score = score + 5;
    scoreEle.innerHTML = "Score :" + score;
    ball = ball + 1;
    ballEle.innerHTML = "Balls : " + ball;
    checkOver()
}
function six() {
    score = score + 6;
    scoreEle.innerHTML = "Score :" + score;
    ball = ball + 1;
    ballEle.innerHTML = "Balls : " + ball;
    checkOver()
}
function wicket() {
    wicketdown = wicketdown + 1;
    wicketEle.innerHTML = "Wicket : " + wicketdown;
    ball = ball + 1;
    ballEle.innerHTML = "Balls : " + ball;
    checkOver()
}