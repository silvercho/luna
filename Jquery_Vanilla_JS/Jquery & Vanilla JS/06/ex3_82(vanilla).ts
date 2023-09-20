const box1: HTMLElement = document.querySelector('#box1');
let i = -90;
let intervalState = 0;

function box1Animate(leftStart, leftGap, widthStart, widthGap, heightStart, heightGap, opacityStart, opacityGap, seconds) {
  const ease = ((Math.sin(i * Math.PI / 180)) + 1) / 2;

  box1.style.left = `${leftStart + (leftGap*ease)}px`;
  box1.style.width = `${widthStart + (widthGap*ease)}px`;
  box1.style.height = `${heightStart + (heightGap*ease)}px`;
  box1.style.opacity = `${opacityStart + (opacityGap*ease)}`;

  i += 180 / (60 * seconds);

  if (i >= 90) {
    i = 90;
    return clearInterval(intervalState);
  }
  console.log(box1.style.opacity)

}

intervalState = setInterval(function(){
  box1Animate(0,500,100,100,100,100,1,-.5,2)
}, 1000 / 60);


setTimeout(function () {
  clearInterval(intervalState);
  i = -90;
  intervalState = setInterval(function(){
    box1Animate(500,-500,200,-100,200,-100,.5,.5,1)
  }, 1000 / 60);
}, 2000)
