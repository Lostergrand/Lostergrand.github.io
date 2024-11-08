const button = document.getElementById("button");
const score = document.getElementById("score");
let clickCounter = 0;
let touchDevise = false;
let canClick = true;
const clickDelay = 50;

function handleMouseDown(){
    if(!touchDevise && canClick){
        button.classList.add("active");
        incrementScore();
    }

}

function handleMouseUp(){
    if(!touchDevise){
        button.classList.remove("active");
    }
}

function touchDown(){
    touchDevise = true;
    if(canClick){
        button.classList.add("active");
    }
}

function touchUp(){
    if(canClick){
        button.classList.remove("active");
        incrementScore();
    }
}

function incrementScore(){
    clickCounter++;
    score.textContent= clickCounter;
    canClick = false;

    setTimeout(() => {
        canClick = true;
    }, clickDelay);
}


button.addEventListener("mousedown", handleMouseDown);
button.addEventListener("mouseup", handleMouseUp);
button.addEventListener("mouseleave", handleMouseUp)

button.addEventListener("touchstart", touchDown);
button.addEventListener("touchcancel", touchUp);
button.addEventListener("touchend",touchUp);






