const casterLeft = document.getElementById('casterleft');
const handleLeft = document.getElementById('handleleft');
const casterRight = document.getElementById('casterright');
const handleRight = document.getElementById('handleright');

function play() {
	const data = {
		cleft: casterLeft.value,
		hleft: handleLeft.value,
		cright: casterRight.value,
		hright: handleRight.value
	};

	nodecg.sendMessage('playCaster', data);
}
