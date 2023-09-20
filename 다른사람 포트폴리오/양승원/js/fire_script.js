class Fire
{
	constructor(containerElement)
	{	
		// Setup PixiJS
		
		this.pixi = new PIXI.Application({
			width: 0,
			height: 0,
			backgroundColor : "transparent",
			resolution: window.devicePixelRatio || 1
		});

		// Add PixiJS view to the DOM
		containerElement.appendChild(this.pixi.view);
		
		// Create a container for our whole fire animation
		// and add it to the main pixi stage
		
		this.fire = new PIXI.Container();
		this.pixi.stage.addChild(this.fire);
		
		// create our flames and embers
		
		this.createMarkerPoint();
		this.createEmbers();
		this.createFlames();
		
		// Resize the PixiJS canvas to match 
		// the window size, and start a 
		// resize listener so we can reset 
		// the canvas size if the browser
		// size changes
		
		this.onResize();
		window.addEventListener('resize', e => { this.onResize() });
	}
	
	createMarkerPoint()
	{
		let circle = new PIXI.Graphics();
		circle.beginFill(0xFF0000, 1);
		circle.drawCircle(0, 0, 6);
		circle.endFill();
		this.fire.addChild(circle)
	}
	
	createFlames()
	{
		const flameSettings = [
			{ color: 0xE23B00, scale: 1,   offset: { y: -30, x: 0} },
		 	{ color: 0xFE8200, scale: 1,   offset: { y: -15, x: 0} },
			{ color: 0xFBE416, scale: 0.9, offset: { y: 10,  x: 0} },
			{ color: 0xFDFDB4, scale: 0.7, offset: { y: 30,  x: 0} }
		]
		
		flameSettings.map(settings => {
			
			let flame = new Flame(settings.color, this.pixi.renderer);
			
			flame.container.y = settings.offset.y;
			flame.container.x = settings.offset.x;
			flame.container.scale.set(settings.scale);
			
			this.fire.addChild(flame.container);
		})
	}
	
	createEmbers(){
		const emberColors = [0xFE9C00, 0xFEA600, 0xE27100];
		
		emberColors.map(color => 
		{
			let embers = new Embers(color, this.pixi.renderer);
			embers.container.y = -150;
			this.fire.addChild(embers.container);
		})
		
	}
	
	onResize(){
		this.pixi.renderer.resize(window.innerWidth, window.innerHeight);
		this.fire.x = window.innerWidth / 2;
		this.fire.y = window.innerHeight * 0.75;
	}
}

class Flame
{
	constructor(color, renderer)
	{
		this.container = new PIXI.Container();
		
		this.flameParticles = new PIXI.Container();
		this.flameParticles.alpha = 0.7;
		this.container.addChild(this.flameParticles);
		
		this.cutoutParticles = new PIXI.Container();
		this.container.addChild(this.cutoutParticles);
		
		this.fireTexture = this.createCircleTexture(color, 35, renderer);
		this.cutoutTexture = this.createCircleTexture(0x000000, 40, renderer);
			
		let filters = {
			bloom: new PIXI.filters.AdvancedBloomFilter(0.45, 0.5, 0.5),
			void: new PIXI.filters.AlphaFilter()
		}
		
		filters.void.blendMode = PIXI.BLEND_MODES.SCREEN;
		this.container.filters = [filters.bloom, filters.void];
		
		setInterval(() => {
			this.addFlameParticle();
			this.addCutoutParticle();
		}, 50)
	}
	
	createCircleTexture(color, radius, renderer)
	{
		let circle = new PIXI.Graphics();
		circle.lineStyle(0);
		circle.beginFill(color, 1);
		circle.drawCircle(0, 0, radius);
		circle.endFill();
		return renderer.generateTexture(circle);
	}
	
	addCutoutParticle()
	{
		const left = Math.random() > .5 ? true : false

		let particle = new PIXI.Sprite(this.cutoutTexture);
		particle.anchor.set(0.5);
		this.cutoutParticles.addChild(particle);
		
		const start = {
			scale: 1,
			x: (130 + Math.random() * 50) * (left ? -1 : 1),
			y: 0
		}
		
		const end = {
			scale: 0.75 + Math.random(),
			x: (5 + Math.random() * 60) * (left ? -1 : 1),
			y: -300
		}

		particle.position.x = start.x;
		particle.position.y = start.y;
		particle.scale.set(start.scale);
		
		const time = 1 + Math.random() * .2;
		
		TweenMax.to(particle.scale, time, {
			x: end.scale,
			y: end.scale, 
			ease: Power1.easeIn
		});
		
		TweenMax.to(particle.position, time, {
			x: end.x, 
			y: end.y, 
			ease: Power1.easeIn, 
			onComplete: () => this.removeCutoutParticle(particle)
		});
	}
	
	removeCutoutParticle(particle)
	{
		this.cutoutParticles.removeChild(particle);
		particle = null;
	}
	
	addFlameParticle()
	{
		let particle = new PIXI.Sprite(this.fireTexture);
		particle.anchor.set(0.5);
		this.flameParticles.addChild(particle);
		
		const start = {
			scale: 1.2 + Math.random(),
			x: 0,
			y: 0
		}
		
		const end = {
			scale: 0.5 + Math.random(),
			x: 0,
			y: -150 - Math.random() * 100
		}
		
		let bezier = [
			{
				x: start.x,
				y: start.y
			},
			{
				x: Math.random() * 100 - 50, 
				y: start.y + (end.y - start.y) * 0.25
			},
			{
				x: Math.random() * 100 - 50, 
				y: start.y + (end.y - start.y) * 0.66
			},
			{	x: end.x, 
			 	y: end.y
			}]
		
		particle.scale.set(start.scale);
		
		const time = 1 + Math.random() * .4;
		
		TweenMax.to(particle, time, { 
			bezier: bezier,
			ease: Power0.easeIn
		})
		
		TweenMax.to(particle.scale, time, {
			x: end.scale, 
			y: end.scale, 
			ease: Power0.easeIn, 
			onComplete: () => this.removeFlameParticle(particle)
		})
	}
	
	removeFlameParticle(particle)
	{
		this.flameParticles.removeChild(particle);
		particle = null;
	}
}

class Embers
{
	constructor(color, renderer)
	{
		this.container = new PIXI.Container();
		this.texture = this.createCircleTexture(color, renderer);
		
		setInterval(() => {
			this.addEmber();
		}, 600)
	}
	
	createCircleTexture(color, renderer)
	{
		let circle = new PIXI.Graphics();
		circle.beginFill(color, 1);
		circle.drawCircle(0, 0, 5);
		circle.endFill();
		return renderer.generateTexture(circle);
	}
	
	addEmber()
	{
		let particle = new PIXI.Sprite(this.texture);
		particle.anchor.set(0.5);
		particle.scale.set(0.2 + Math.random() * 0.3);
		
		this.container.addChild(particle);
		
		let bezier = [
			{
				x: (Math.random() * 100) - 50,
				y: 0
			},
			{
				x: Math.random() * 200 - 100, 
				y: 0 + Math.random() * -20
			},
			{
				x: Math.random() * 200 - 100, 
				y: 0 + (Math.random() * -50)
			},
			{
				x: Math.random() * 200 - 100, 
				y: -100 + (Math.random() * -50)
			},
			{
				x: Math.random() * 300 - 150, 
				y: -150 + (Math.random() * -100)
			},
			{	x: Math.random() * 500 - 250,  
			 	y: -400 + (Math.random() * -150)
			}]
		
		const time = 1.5 + Math.random() * 1.5
		
		TweenMax.to(particle, time / 2, { 
			alpha: 0,
			delay: this.time/2, 
			ease: Power1.easeOut, 
		});
		
		TweenMax.to(particle.position, time, {
			bezier: bezier, 
			ease: Power2.easeOut, 
			onComplete: () => this.removeEmber(particle)
		})	
	}
	
	removeEmber(particle)
	{
		this.container.removeChild(particle);
		particle = null;
	}
}

let fire = new Fire(document.getElementById('container'));