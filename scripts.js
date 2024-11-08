const button = document.getElementById("button");
const score = document.getElementById("score");
let clickCounter = 0;
let touchDevise = false;
let canClick = true;
const clickDelay = 100;

function handleMouseDown(){
    if(!touchDevise){
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
    button.classList.add("active");
}

function touchUp(){
    button.classList.remove("active");
    incrementScore();
}

function incrementScore(){
    
    score.textContent= clickCounter;

    setTimeout(() => {
        clickCounter++;
    }, clickDelay);
}


button.addEventListener("mousedown", handleMouseDown);
button.addEventListener("mouseup", handleMouseUp);
button.addEventListener("mouseleave", handleMouseUp)

button.addEventListener("touchstart", touchDown);
button.addEventListener("touchcancel", touchUp);
button.addEventListener("touchend",touchUp);






