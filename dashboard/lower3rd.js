const titleInput = document.getElementById('title');
const subInput = document.getElementById('sub');

function update() {
	const data = { title: titleInput.value, sub: subInput.value };

	nodecg.sendMessage('playLowerthird', data);
}
