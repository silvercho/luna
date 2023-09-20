const bannerLi: NodeListOf<HTMLElement> = document.querySelectorAll('#banner li');
const banner: HTMLElement = document.querySelector('#banner');

const he = bannerLi[0].offsetHeight;
let num = 0;
const total = bannerLi.length;
const copy1 = bannerLi[0].cloneNode(true);
banner.appendChild(copy1);

function vauto () {
  if (num === total) {
    num = 0;
    banner.style.transition = 'none';
    banner.style.marginTop = '0px';
  }

  setTimeout(
    function () {
      num++;
      banner.style.transition = 'margin-top .5s';
      banner.style.marginTop = `${-num*he}px`;
    }, 50)
}

setInterval(vauto, 3000);