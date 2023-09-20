var textZone = document.querySelector('#textZone');
//1. id="btn1" 클릭 했을때 id="textZone" 글자 색상을 파란색으로 변경
var btn1 = document.querySelector('#btn1');
btn1.onclick = function () {
    textZone.style.color = 'blue';
};
//2. id="btn2"에 마우스 오버 했을때 id="textZone" 배경 색상을 노란색으로 변경
var btn2 = document.querySelector('#btn2');
btn2.onmouseover = function () {
    textZone.style.backgroundColor = 'yellow';
};
//3. id="btn2"에 포커스가 생겼을때 id="textZone" 배경 색상을 노란색으로 변경
//키보드 tab키가 #btn2에 머물때 노란색으로 변경
btn2.onfocus = function () {
    textZone.style.backgroundColor = 'yellow';
};
/*4. 두개이상의 이벤트(mouseove,click,focus)를 등록시킬때 */
var btn3 = document.querySelector('#btn3');
function textZone4() {
    textZone.style.color = 'green';
    textZone.style.fontWeight = 'bold';
}
btn3.addEventListener('mouseover', textZone4);
btn3.addEventListener('focus', textZone4);
//5. id="listWrap"에 마우스가 올라가 있으면 class="list1" 을 블록요소 변경합니다. mouseover와 비슷
var listWrap = document.querySelector('#listWrap');
var list1 = document.querySelector('.list1');
listWrap.onmouseenter = function () {
    list1.style.display = 'block';
};
//6. id="listWrap"에서 마우스가 벗어나면 class="list1" 을 블록요소 변경합니다. mouseout과 비슷
listWrap.onmouseleave = function () {
    list1.style.display = 'none';
};
//8. class="hover"인 요소에 마우스를 올렸을땐 함수1을 벗어났을때에는 함수2를 실행 합니다.
var hover = document.querySelector('.hover');
hover.addEventListener('mouseenter', function () {
    this.style.color = 'aqua'; //함수1
});
hover.addEventListener('mouseleave', function () {
    this.style.color = 'red'; //함수2
});
