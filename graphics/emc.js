import { gsap } from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate');
const emTitleEl = document.getElementById('emtitle');
const emSubEl = document.getElementById('emsub');

nodecg.listenFor('playEm', (data) => {
	emTitleEl.innerHTML = data.emtitle;
	emSubEl.innerHTML = data.emsub;

	const tl = gsap.timeline();

	tl.from([ nameplateEl, emTitleEl, emSubEl ], 1, { width: 0, opacity: 0 });

	tl.to([ nameplateEl, emTitleEl, emSubEl ], 1, { width: 0, opacity: 0 }, '+=5');

	tl.call(() => {
		emTitleEl.innerHTML = '';
		emSubEl.innerHTML = '';
	});

	tl.set([ nameplateEl, emTitleEl, emSubEl ], { width: '', opacity: '' });
});
