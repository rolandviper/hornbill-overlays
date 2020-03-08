import { gsap } from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate');
const titleEl = document.getElementById('waittitle');
const subEl = document.getElementById('subtitle');

const logoEl = document.getElementById('logo');
const bgEl = document.getElementById('bg');
const sponsorEl = document.getElementById('sponsor');

nodecg.listenFor('startpanel', (data) => {
	titleEl.innerHTML = data.title;
	subEl.innerHTML = data.sub;

	const tl = gsap.timeline();

	tl.to([ bgEl ], 1, { opacity: 1 });
	tl.from([ bgEl ], 1, { width: 0 });

	tl.to([ logoEl, sponsorEl ], 1, { opacity: 1 });

	tl.from([ nameplateEl, titleEl, subEl ], 1, { width: 0, opacity: 0 });
});

nodecg.listenFor('updatepanel', (updatedata) => {
	titleEl.innerHTML = updatedata.title;
	subEl.innerHTML = updatedata.sub;

	const tl = gsap.timeline();

	tl.to([ nameplateEl, titleEl, subEl ], 1, { width: 0, opacity: 0 });

	tl.from([ nameplateEl, titleEl, subEl ], 1, { width: 0, opacity: 0 });
});

nodecg.listenFor('stoppanel', (stopdata) => {
	const tl = gsap.timeline();

	tl.to([ nameplateEl, titleEl, subEl ], 0.5, { width: 0, opacity: 0 });
	tl.to([ sponsorEl, logoEl ], 0.5, { opacity: 0 });
	tl.to([ bgEl ], 0.5, { width: 0, opacity: 0 });

	tl.call(() => {
		titleEl.innerHTML = '';
		subEl.innerHTML = '';
	});

	tl.set([ nameplateEl, titleEl, subEl, bgEl, sponsorEl, logoEl ], { width: '', opacity: '' });
});
