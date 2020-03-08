import { gsap } from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate');
const leftCaster = document.getElementById('casterleft');
const leftHandle = document.getElementById('handleleft');
const rightCaster = document.getElementById('casterright');
const rightHandle = document.getElementById('handleright');

const left = document.getElementsByClassName('left');
const right = document.getElementsByClassName('right');

nodecg.listenFor('playCaster', (data) => {
	leftCaster.innerHTML = data.cleft;
	leftHandle.innerHTML = data.hleft;
	rightCaster.innerHTML = data.cright;
	rightHandle.innerHTML = data.hright;

	const tl = gsap.timeline();

	tl.from([ nameplateEl, leftCaster, rightCaster ], 1, { width: 0, opacity: 0 });
	tl.from([ leftHandle, rightHandle ], 1, { width: 0, opacity: 0 });

	tl.to([ nameplateEl, leftCaster, leftHandle, rightCaster, rightHandle ], 1, { width: 0, opacity: 0 }, '+=5');

	tl.call(() => {
		leftCaster.innerHTML = '';
		leftHandle.innerHTML = '';
		rightCaster.innerHTML = '';
		rightHandle.innerHTML = '';
	});

	tl.set([ nameplateEl, leftCaster, leftHandle, rightCaster, rightHandle ], { width: '', opacity: '' });
});
