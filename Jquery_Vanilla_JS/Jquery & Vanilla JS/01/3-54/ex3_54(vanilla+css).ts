interface NodeListOf < TNode > extends Array < TNode > {};

addEventListener('load', function () {

  const all = document.querySelectorAll('*');
  for (const item of all) {
    item.classList.add('size13');
  }

  document.querySelector('h1').classList.add('red');

  document.querySelector('#firstTitle').classList.add('green');

  document.querySelector('.nextTitle').classList.add('blue');

  const obj3Li = document.querySelectorAll('.obj3>li');
  for (const item of obj3Li) {
    item.classList.add('bold');
  }

  const obj3Children = Array.apply(null, document.querySelector('.obj3').children);
  for (const item of obj3Children) {
    item.classList.add('black');
  };

  document.querySelector('.obj3').querySelector('.theObj1').classList.add('purple');

  document.querySelector('.obj5').parentElement.classList.add('border2px');

  const wrapH3 = document.querySelectorAll('#wrap h3');
  for (const item of wrapH3) {
    item.classList.add('size20');
    item.classList.add('bgYellow');
  }

  document.querySelector('.obj4').nextElementSibling.classList.add('orange');
  document.querySelector('.obj5').previousElementSibling.classList.add('right');

  const obj6Siblings = Array.apply(null, document.querySelector('.obj6').parentElement.children);
  for (const item of obj6Siblings) {
    if (item !== document.querySelector('.obj6')) {
      item.classList.add('center');
    }
  };

  const inputText = document.querySelector('input[type=text]');
  inputText.classList.add('bgCcc');
  inputText.classList.add('border1px');
  inputText.classList.add('green');


})