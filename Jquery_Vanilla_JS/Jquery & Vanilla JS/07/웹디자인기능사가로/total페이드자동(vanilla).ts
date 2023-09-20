interface NodeListOf < TNode > extends Array < TNode > {}

const bannerLi: NodeListOf < HTMLElement > = document.querySelectorAll('#banner li');
const banner: HTMLElement = document.querySelector('#banner');

for (const item of bannerLi) {
    item.style.display = 'none';
    item.style.transition = 'opacity 1s';
    item.style.opacity = '0';
}
bannerLi[0].style.display = 'block';
bannerLi[0].style.opacity = '1';

let i = 0;
setInterval(auto, 3000);

function auto() {
    i++;

    bannerLi[i-1].style.opacity = '0';

    if (i === 4) {
        setTimeout(
            function () {
                bannerLi[3].style.display = 'none';
            }, 1000)
            // 1초가 지나는 동안 i가 0이 되어 버리기 때문에 인덱스 번호를 3으로 고정
        i = 0;
    } else {
        setTimeout(
            function () {
                bannerLi[i-1].style.display = 'none';
            }, 1000)
    }

    bannerLi[i].style.display = 'block';
    
    setTimeout(
        function () {
            bannerLi[i].style.opacity = '1';
        }, 1)
}