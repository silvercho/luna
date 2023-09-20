var box1 = document.querySelector('.box1');
var i = -90;
function box1Animate() {
    var ease = ((Math.sin(i * Math.PI / 180)) + 1) / 2;
    // https://tentotwelvemath.com/classroom-resources/trigonometric-functions-2/sine-and-cosine-transformations/
    // 위 사이트 맨 처음 그래프의 -90 ~ 90 부분이 box1Animate 함수의 ease와 비슷
    box1.style.left = 0 + (500 * ease) + "px";
    box1.style.width = 100 + (100 * ease) + "px";
    box1.style.height = 100 + (100 * ease) + "px";
    box1.style.opacity = "" + (1 - (.5 * ease));
    i += 180 / 60;
    // 60FPS 모니터에 맞추어서 프레임을 60으로 나눔
    if (i > 90) {
        i = 90;
        return clearInterval(id);
    }
}
var id = setInterval(box1Animate, 1000 / 60);
// 60FPS 모니터에 맞추어서 프레임을 60으로 나눔
