interface NodeListOf < TNode > extends Array < TNode > {};

addEventListener('load', function () {

  const all: NodeListOf < HTMLElement > = document.querySelectorAll('*');
  for (const item of all) {
    item.style.fontSize = '13px'
  };

  const h1Element: HTMLElement = document.querySelector('h1');
  h1Element.style.color = 'red';

  const firstTitle: HTMLElement = document.querySelector('#firstTitle');
  firstTitle.style.color = 'green';

  const nextTitle: HTMLElement = document.querySelector('.nextTitle');
  nextTitle.style.color = 'blue';

  const obj3Li: NodeListOf < HTMLElement > = document.querySelectorAll('.obj3>li');
  for (const item of obj3Li) {
    item.style.fontWeight = 'bold'
  };

  const obj3Children: Array < HTMLElement > = Array.apply(null, document.querySelector('.obj3').children);
  for (const item of obj3Children) {
    item.style.color = 'black'
  };

  const theObj1: HTMLElement = document.querySelector('.obj3').querySelector('.theObj1');
  theObj1.style.color = 'purple';

  const obj5Parent: HTMLElement = document.querySelector('.obj5').parentElement;
  obj5Parent.style.border = "dashed 2px #f00";

  const wrapH3: NodeListOf < HTMLElement > = document.querySelectorAll('#wrap h3');
  for (const item of wrapH3) {
    item.style.fontSize = '20px';
    item.style.backgroundColor = 'yellow';
  }

  const obj4Next = document.querySelector('.obj4').nextElementSibling;
  ( < HTMLElement > obj4Next).style.color = 'orange';

  const obj5Prev = document.querySelector('.obj5').previousElementSibling;
  ( < HTMLElement > obj5Prev).style.textAlign = 'right';

  const obj6Siblings: Array < HTMLElement > = Array.apply(null, document.querySelector('.obj6').parentElement.children);
  for (const item of obj6Siblings) {
    (item !== document.querySelector('.obj6')) && (item.style.textAlign = 'center');
  }

  const inputText: HTMLElement = document.querySelector('input[type=text]');
  inputText.style.backgroundColor = '#ccc';
  inputText.style.border = '1px solid #000';
  inputText.style.color = 'green';

});