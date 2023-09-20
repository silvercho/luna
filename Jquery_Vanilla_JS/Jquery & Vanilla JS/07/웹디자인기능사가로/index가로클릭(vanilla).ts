const wi = 960;
let num = 0;
const bannerLi = document.querySelectorAll('#banner li');
const banner: HTMLElement = document.querySelector('#banner');

const total = bannerLi.length;
const copy1 = bannerLi[0].cloneNode(true);
banner.appendChild(copy1);

document.querySelector('.next').addEventListener('click', function () {
  if (num === total) {
    num = 0;
    banner.style.transition = 'none';
    banner.style.marginLeft = '0px';
  }

  setTimeout(
    function () {
      num++;
      banner.style.transition = 'margin-left .5s';
      banner.style.marginLeft = `${-num*wi}px`;
    }, 50)
})

document.querySelector('.prev').addEventListener('click', function () {
  if (num === 0) {
    num = total;
    banner.style.transition = 'none';
    banner.style.marginLeft = `${-num*wi}px`;
  }

  setTimeout(
    function () {
      num--;
      banner.style.transition = 'margin-left .5s';
      banner.style.marginLeft = `${-num*wi}px`;
    }, 50)
})
