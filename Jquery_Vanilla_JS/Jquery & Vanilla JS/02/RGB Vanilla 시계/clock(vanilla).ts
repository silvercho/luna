function clock() {
  const today = new Date();
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  const milliSecond = today.getMilliseconds();

  if (hour > 11) hour -= 12;

  const degreeOfSecond = (second * 6) + (milliSecond * 6 / 1000);
  const degreeOfMinute = (minute * 6) + (degreeOfSecond / 60);
  const degreeOfHour = (hour * 30) + (degreeOfMinute / 12);

  let redNeedle: number = 0;
  let greenNeedle: number = 0;
  let blueNeedle: number = 0;

  if (degreeOfSecond < 90) {
    redNeedle = Math.round(255 * degreeOfSecond / 90);
  } else if (90 <= degreeOfSecond && degreeOfSecond < 180) {
    redNeedle = Math.round(255 - 255 * ((degreeOfSecond - 90) / 90));
    greenNeedle = Math.round(255 * (degreeOfSecond - 90) / 90);
  } else if (180 <= degreeOfSecond && degreeOfSecond < 270) {
    greenNeedle = Math.round(255 - 255 * (degreeOfSecond - 180) / 90);
    blueNeedle = Math.round(255 * (degreeOfSecond - 180) / 90);
  } else {
    blueNeedle = Math.round(255 - 255 * (degreeOfSecond - 270) / 90);
  }

  const needles: Array<HTMLElement> = Array.apply(null, document.querySelector('#clock').children);

  needles[1].style.transform = `rotate(${degreeOfHour}deg)`;
  needles[2].style.transform = `rotate(${degreeOfMinute}deg)`;
  needles[3].style.transform = `rotate(${degreeOfSecond}deg)`;
  needles[3].style.backgroundColor = `rgb(${redNeedle},${greenNeedle},${blueNeedle})`;

}
setInterval(clock, 1000 / 60)
