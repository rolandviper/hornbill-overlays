const emceeTitle = document.getElementById('emtitle');
const emceeSub = document.getElementById('emsub');

function play() {
	const data = { emtitle: emceeTitle.value, emsub: emceeSub.value };

	nodecg.sendMessage('playEm', data);
}
