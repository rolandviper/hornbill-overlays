import { gsap } from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate');
const titleEl = document.getElementById('title');
const subEl = document.getElementById('sub');

nodecg.listenFor('playLowerthird', (data) => {
	titleEl.innerHTML = data.title;
	subEl.innerHTML = data.sub;

	const tl = gsap.timeline();

	tl.from([ nameplateEl, titleEl, subEl ], 1, { width: 0, opacity: 0 });

	tl.to([ nameplateEl, titleEl, subEl ], 1, { width: 0, opacity: 0 }, '+=5');

	tl.call(() => {
		titleEl.innerHTML = '';
		subEl.innerHTML = '';
	});

	tl.set([ nameplateEl, titleEl, subEl ], { width: '', opacity: '' });
});
