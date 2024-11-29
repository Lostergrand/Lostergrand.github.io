let score = 0;
let lastClickTime = 0;
const clickInterval = 200;  // Ограничение на скорость кликов (в миллисекундах)

const scoreElement = document.getElementById("score");
const clickArea = document.getElementById("clickArea");

clickArea.addEventListener("pointerdown", function(event) {
    const currentTime = new Date().getTime();

    // Проверка на ограничение скорости кликов
    if (currentTime - lastClickTime >= clickInterval) {
        score++;
        scoreElement.textContent = score;
        lastClickTime = currentTime;

        // Создание анимации "+1"
        const animation = document.createElement("div");
        animation.classList.add("click-animation");
        animation.textContent = "+1";
        animation.style.left = `${event.clientX - clickArea.getBoundingClientRect().left}px`;
        animation.style.top = `${event.clientY - clickArea.getBoundingClientRect().top}px`;
        
        clickArea.appendChild(animation);

        // Удаление анимации после завершения
        setTimeout(() => {
            clickArea.removeChild(animation);
        }, 1000);
    }
});

















































/* const clickArea = document.getElementById("clickArea");

// Объект для хранения времени последнего клика для каждого пальца
const lastClickTimes = {};
const clickInterval = 200;  // Ограничение на скорость кликов (в миллисекундах)

// Обработчик события нажатия
clickArea.addEventListener("pointerdown", function(event) {
    const pointerId = event.pointerId; // Уникальный ID для каждого касания
    const currentTime = new Date().getTime();

    // Проверка на ограничение скорости кликов для каждого касания
    if (!lastClickTimes[pointerId] || currentTime - lastClickTimes[pointerId] >= clickInterval) {
        console.log(`Клик зарегистрирован! Палец ID: ${pointerId}`);
        lastClickTimes[pointerId] = currentTime;
    }
});

// Обработчик события отпускания
clickArea.addEventListener("pointerup", function(event) {
    const pointerId = event.pointerId;
    delete lastClickTimes[pointerId]; // Удаление записи после отпускания пальца
});
 */