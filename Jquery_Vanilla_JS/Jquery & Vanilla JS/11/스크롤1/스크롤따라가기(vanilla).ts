interface NodeListOf < TNode > extends Array < TNode > {}

let tops = [];

const art = document.querySelectorAll('article');

for (let i = 0; i < art.length; i++) {
  tops.push(
    art[i].getBoundingClientRect().top
  );
}

const f_btn: HTMLElement = document.querySelector('#f_btn');
const f_off = f_btn.getBoundingClientRect().top;
// const f_off = parseInt(getComputedStyle(f_btn).top);

f_btn.style.transition = 'top .8s';

addEventListener('scroll', function () {
  const scroll: HTMLElement = document.querySelector('#scroll');
  scroll.innerText = `${pageYOffset}`; //pageYOffset = 스크롤의 현재위치
  f_btn.style.top = `${f_off + pageYOffset}px`;

  const indicator = document.querySelector('#indicator');
  if (pageYOffset > 100) {
    indicator.classList.add('on');
  } else {
    indicator.classList.remove('on');
  }
})

const f_btnLi = Array.apply(null, document.querySelectorAll('#f_btn li'));
for (const item of f_btnLi) {
  item.addEventListener('click', function (e) {
    const i = f_btnLi.indexOf(this);

    let k = -90;

    const startScroll = pageYOffset;

    function scrollToAnimate() {
      if (k > 90) k = 90;

      const easeUp = ((Math.sin(k * Math.PI / 180)) + 1) / 2;
      const easeDown = ((Math.sin((k + 180) * Math.PI / 180)) + 1) / 2;

      scrollTo(0, startScroll*easeDown + i*900*easeUp + 1); // scrollTo(x,y)

      /* 애니메이션의 처음 위치는 startScroll*1 + i*900*0 이 되고,
      나중 위치는 startScroll*0 + i*900*1 이 된다. */

      k += 180 / (60*1.3); // 1.3초 = 1300밀리 초

      if (k > 90) {
        return clearInterval(id);
      }
    }

    const id = setInterval(scrollToAnimate,1000/60);

    e.preventDefault();
  })
}