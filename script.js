function makeBUbble() {
    var bubble = " ";
    for (var i = 1; i < 113; i++) {
        var number = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${number}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = bubble;
}
makeBUbble();
var timer = 60;
function timerval() {
    var timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over</h1>`
        }


    }, 1000);
}
timerval();
var hitrn = 0;

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitset").textContent = hitrn;
}
getNewHit();

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scorecard").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum === hitrn) {
        increaseScore();
        makeBUbble();
        getNewHit();
    }
})





