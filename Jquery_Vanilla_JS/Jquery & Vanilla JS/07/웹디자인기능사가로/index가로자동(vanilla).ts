const wi = 960;
let num = 0;
const bannerLi = document.querySelectorAll('#banner li');
const banner: HTMLElement = document.querySelector('#banner');

const total = bannerLi.length;
const copy1 = bannerLi[0].cloneNode(true);
banner.appendChild(copy1);

function auto () {
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
}

setInterval(auto, 3000);