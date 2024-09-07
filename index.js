let counterEl = document.getElementById("counter-left")
let counterEr = document.getElementById("counter-right")
let resetEL = document.getElementById("reset-btn")
let countLeft = 0
let countRight = 0


function addOne(){
    countLeft+=1
    counterEl.innerText=countLeft
}
function addTwo(){
    countLeft+=2
    counterEl.innerText=countLeft
}
function addThree(){
    countLeft+=3
    counterEl.innerText=countLeft
}

function addOneR(){
    countRight+=1
    counterEr.innerText=countRight
}
function addTwoR(){
    countRight+=2
    counterEr.innerText=countRight
}
function addThreeR(){
    countRight+=3
    counterEr.innerText=countRight
}

function reset(){
    countLeft=0
    countRight=0
    counterEr.innerText=countLeft
    counterEl.innerText=countRight
}