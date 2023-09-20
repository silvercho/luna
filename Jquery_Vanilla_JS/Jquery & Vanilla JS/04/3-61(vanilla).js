var list3 = document.querySelector('#list3');
list3.insertAdjacentHTML('beforeend', '<li>list_6</li>');
list3.insertAdjacentHTML('afterbegin', '<li>list_1</li>');
var list3Li = document.querySelectorAll('#list3 li');
list3Li[4].insertAdjacentHTML('beforebegin', '<li>insertBefore</li>');
list3Li[4].insertAdjacentHTML('afterend', '<li>insertAfter</li>');
