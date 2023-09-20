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

function autoplay(){
  if(num === 5){
    num = 0;
    list.style.transition = 'none';
    list.style.marginLeft = '0px';
  }

  setTimeout(function(){  
    num++;
    list.style.transition = 'margin-left .5s';
    list.style.marginLeft = `${-li_width*num}px`;
  },50)
}

setInterval(autoplay, 3000);
