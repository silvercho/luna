const box2: HTMLElement = document.querySelector('#box2');

let intervalState = 0;
let i = 0;

function box2Animate(leftStart, leftGap, seconds) {

  const ease = ((Math.sin(i * Math.PI / 180)) + 1) / 2;

  box2.style.left = `${leftStart + (leftGap*ease)}px`;

  i += 180 / (60 * seconds);

  if (i >= 90) {
    i = 90;
    return clearInterval(intervalState);
  }
}

document.querySelector('#rightBtn').addEventListener('click', function () {
  clearInterval(intervalState);

  const leftStartInt = parseInt(getComputedStyle(box2).left);
  i = -90;

  intervalState = setInterval(function () {
    box2Animate(leftStartInt, 100, .5)
  }, 1000 / 60);
})


document.querySelector('#leftBtn').addEventListener('click', function () {
  clearInterval(intervalState);
  const leftStartInt = parseInt(getComputedStyle(box2).left);
  i = -90;

  intervalState = setInterval(function () {
    box2Animate(leftStartInt, -100, .5)
  }, 1000 / 60);
})
