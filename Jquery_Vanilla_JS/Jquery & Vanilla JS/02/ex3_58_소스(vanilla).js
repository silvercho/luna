;
var liOdd = document.querySelectorAll('#list1 li:nth-child(2n)');
for (var _i = 0, liOdd_1 = liOdd; _i < liOdd_1.length; _i++) {
    var item = liOdd_1[_i];
    item.style.background = 'yellow';
}
var liEven = document.querySelectorAll('#list1 li:nth-child(2n-1)');
for (var _a = 0, liEven_1 = liEven; _a < liEven_1.length; _a++) {
    var item = liEven_1[_a];
    item.style.background = 'gray';
}
var liFirst = document.querySelector('#list1 li:first-child');
liFirst.style.color = 'red';
var liLast = document.querySelector('#list1 li:last-child');
liLast.style.color = 'green';
var liAll = document.querySelectorAll('#list1 li');
liAll[1].style.fontStyle = 'italic';
for (var i = 0; i < 2; i++) {
    liAll[i].style.border = '2px dotted aqua';
}
for (var i = 3; i < liAll.length; i++) {
    liAll[i].style.border = '2px dotted purple';
}
