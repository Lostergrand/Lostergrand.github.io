const button = document.getElementById("button");
  const score = document.getElementById("score");

  let clickCounter = 0;
  const clickDelay = 80;
  let firstLastClickTime = 0;
  let isTouchEvent = false;



  button.addEventListener('touchstart', function(event) {
      handleClick(event.touches[0].clientX, event.touches[0].clientY);
      isTouchEvent = true;
  });

  button.addEventListener('click', function(event) {
      if (!isTouchEvent) {
          handleClick(event.clientX, event.clientY);
      }
      isTouchEvent = false;
  });

  function handleClick(x, y) {
    const currentTime = new Date().getTime();

    // Проверяем, прошло ли достаточно времени с последнего клика
    if (currentTime - firstLastClickTime >= clickDelay) {
        firstLastClickTime = currentTime; // Обновляем время последнего разрешенного клика
        clickCounter++; // Увеличиваем счетчик только при разрешенном клике
        score.textContent = clickCounter;

        // Создаем эффект +1
        createPlusOneEffect(x, y);

        animateScore();
    }
}


  function createPlusOneEffect(x, y) {
      const plusOne = document.createElement("div");
      plusOne.textContent = "+1";
      plusOne.classList.add("clickEffect");

      // Устанавливаем начальную позицию около точки клика
      plusOne.style.left = `${x}px`;
      plusOne.style.top = `${y}px`;

      // Добавляем его к документу
      document.body.appendChild(plusOne);

      // Получаем координаты счетчика
      const scoreRect = score.getBoundingClientRect();
      const targetX = scoreRect.left;
      const targetY = scoreRect.top;

      // Запускаем анимацию к счетчику
      setTimeout(() => {
          plusOne.style.left = `${targetX}px`;
          plusOne.style.top = `${targetY}px`;
          plusOne.style.opacity = 0; // Элемент исчезает у счетчика
          score.classList.add("fade-out");
      }, 20);

      // Удаляем элемент после завершения анимации
      setTimeout(() => document.body.removeChild(plusOne), 600);
  }

  function animateScore() {
    // Добавляем класс для анимации увеличения
    score.classList.add("scale-up");
    
    // Убираем класс после завершения анимации, чтобы можно было повторно применять эффект
    setTimeout(() => score.classList.remove("scale-up"), 300);
}

