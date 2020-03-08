import { gsap } from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate');
const titleEl = document.getElementById('title');
const infoEl = document.getElementById('info');
const subEl = document.getElementById('sub');
const mainEl = document.getElementById('main');

nodecg.listenFor('playComingUp', (data) => {
	titleEl.innerHTML = data.title;
	infoEl.innerHTML = data.info;
	subEl.innerHTML = data.sub;

	const tl = gsap.timeline();

	tl.from([ mainEl, nameplateEl ], 1, { width: 0, opacity: 0 });
	tl.to([ mainEl, nameplateEl ], 1, { opacity: 1 }, '-=1');

	tl.from([ titleEl ], 1, { width: 0, opacity: 0 });
	tl.to([ titleEl ], 1, { opacity: 1 }, '-=1');

	tl.from([ subEl ], 1, { width: 0, opacity: 0 });
	tl.to([ subEl ], 1, { opacity: 1 }, '-=1');

	tl.from([ infoEl ], 1, { width: 0, opacity: 0 });
	tl.to([ infoEl ], 1, { opacity: 1 }, '-=1');

	tl.to([ nameplateEl, titleEl, , infoEl, mainEl, subEl ], 1, { width: 0, opacity: 0 }, '+=5');

	tl.call(() => {
		titleEl.innerHTML = '';
		infoEl.innerHTML = '';
		subEl.innerHTML = '';
	});

	tl.set([ nameplateEl, titleEl, subEl, infoEl, mainEl ], { width: '', opacity: '' });
});
