interface NodeListOf<TNode> extends Array<TNode> {};

const liOdd:NodeListOf<HTMLElement> = document.querySelectorAll('#list1 li:nth-child(2n)');
for(const item of liOdd){
  item.style.background = 'yellow';
}

const liEven:NodeListOf<HTMLElement> = document.querySelectorAll('#list1 li:nth-child(2n-1)');
for(const item of liEven){
  item.style.background = 'gray';
}

const liFirst:HTMLElement = document.querySelector('#list1 li:first-child');
liFirst.style.color = 'red';

const liLast:HTMLElement = document.querySelector('#list1 li:last-child');
liLast.style.color = 'green';

const liAll:NodeListOf<HTMLElement> = document.querySelectorAll('#list1 li');
liAll[1].style.fontStyle = 'italic';

for(let i = 0; i<2; i++){
  liAll[i].style.border = '2px dotted aqua';
}

for(let i = 3; i<liAll.length; i++){
  liAll[i].style.border = '2px dotted purple';
}
