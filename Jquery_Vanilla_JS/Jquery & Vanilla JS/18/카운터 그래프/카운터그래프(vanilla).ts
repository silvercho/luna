const charts = document.querySelectorAll('section>div');

for(let i = 0 ; i < charts.length ; i ++){
  const chartBar:HTMLElement = charts[i].querySelector('.skill_g');
  chartBar.style.width = '0%';
  const pnum:HTMLElement = charts[i].querySelector('.skill_p .num');
  const pdata = Number(pnum.innerText);

  pnum.innerText = '0';


	function percent(){
    let k = -90;



    function percentAnimate() {
      if (k > 90) {
				k = 90;
			}

      const easeUp = ((Math.sin(k * Math.PI / 180)) + 1) / 2;

      const now = pdata*easeUp;

      chartBar.style.width = `${now}%`;
      pnum.innerText = `${Math.floor(now)}`;

      k += 180 / (60 * 3);

      if (k > 90) {
        return clearInterval(id);
      }
    }

    const id = setInterval(percentAnimate,1000/60);

	}

  setTimeout(percent,300 * i)
}