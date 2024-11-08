const button = document.getElementById("button");
const score = document.getElementById("score");

let clickCounter = 0;
let canClick = true;
const clickDelay = 50;

button.addEventListener("click", function(event){
    const x = event.clientX;
    const y = event.clientY;

    const effect = document.createElement('div');
    effect.classList.add('clickEffect');
    effect.innerText = '+1';
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;

    document.body.appendChild(effect);

    setTimeout(() => {
        effect.remove();
    }, 300)

    addScore();
});

function addScore(){
    if(canClick){
        clickCounter++;
        score.textContent = clickCounter;
        canClick = false;
        
        setTimeout(() => {
            canClick = true;
        }, clickDelay);
    }
}