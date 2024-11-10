const originalWidth = 430;
const originalHeight = 932;

const currentWidthPageSize = document.documentElement.clientWidth;
const currentHeightPageSize = document.documentElement.clientHeight;

const isPortreit = currentWidthPageSize >= currentHeightPageSize || (currentHeightPageSize - currentWidthPageSize) <= 190 || (currentHeightPageSize - currentWidthPageSize) >=560;

let scaleFactor;
if(isPortreit){
    scaleFactor = Math.min((currentHeightPageSize / originalHeight),(currentWidthPageSize / originalWidth));
}else{
    scaleFactor = ((currentWidthPageSize / originalWidth) + (currentHeightPageSize / originalHeight)) / 2;
}



function scaleElement(elementId, { width = false, height = false, fontSize = false }) {
    const element = document.getElementById(elementId);
    const computedStyle = window.getComputedStyle(element);

    if (width) {
        const oldWidth = parseFloat(computedStyle.width);
        element.style.width = `${oldWidth * scaleFactor}px`;
    }
    if (height) {
        const oldHeight = parseFloat(computedStyle.height);
        element.style.height = `${oldHeight * scaleFactor}px`;
    }
    if (fontSize) {
        const oldFontSize = parseFloat(computedStyle.fontSize);
        element.style.fontSize = `${oldFontSize * scaleFactor}px`;
    }
}

// Масштабируем элементы, передавая необходимые параметры
scaleElement("user", { width: true });
scaleElement("wallet", { width: true });
scaleElement("button", { width: true, height: true });
scaleElement("gambler", { width: true, height: true });
scaleElement("investment", { width: true, height: true });
scaleElement("boost", { width: true, height: true });
scaleElement("task", { width: true, height: true });
scaleElement("recommendeds", { width: true, height: true });
scaleElement("reunion", { width: true, height: true });
scaleElement("name", { fontSize: true });
scaleElement("score", { fontSize: true });