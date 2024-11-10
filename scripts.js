const button = document.getElementById("button");
const score = document.getElementById("score");

let clickCounter = 0;
const clickDelay = 80;
let lastClickTime = 0;
isTouchEvent = false;


button.addEventListener('touchstart', function(event) {
    handleClick();
    isTouchEvent = true;
});
button.addEventListener('click', function(event) {
    if(!isTouchEvent){
        handleClick();
    }
    isTouchEvent = false;
});
function handleClick() {
    const currentTime = new Date().getTime();

    // Проверяем, прошло ли достаточно времени с последнего клика
    if (currentTime - lastClickTime >= clickDelay) {
        clickCounter++; // Увеличиваем счетчик только при разрешенном клике
        score.textContent = clickCounter
        lastClickTime = currentTime; // Обновляем время последнего клика
    }
}
