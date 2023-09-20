const list:HTMLElement = document.querySelector('#banner');
const listLi = document.querySelectorAll('#banner li');

const show_num = 3;
const total = listLi.length;
const li_width = parseInt(getComputedStyle(listLi[0]).width);

for(let i = 0; i<3; i++){
  const copyobj = listLi[i].cloneNode(true);
  list.appendChild(copyobj);
}

let num = 0;

document.querySelector('.next').addEventListener('click',function(e){
  if(num === 5){
    num = 0;
    list.style.transition = 'none';
    list.style.marginLeft = '0px';
  }

  setTimeout(function(){  
    num++;
    list.style.transition = 'margin-left .5s';
    list.style.marginLeft = `${-li_width*num}px`;

    e.preventDefault();
  },50)

})

document.querySelector('.prev').addEventListener('click',function(e){
  if(num === 0){
    num = 5;
    list.style.transition = 'none';
    list.style.marginLeft = `${-li_width*num}px`;
  }
  setTimeout(function(){  
    num--;
    list.style.transition = 'margin-left .5s';
    list.style.marginLeft = `${-li_width*num}px`;

    e.preventDefault();
  },50)
})
