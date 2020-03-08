const titleInput = document.getElementById('title');
const infoInput = document.getElementById('info');
const subInput = document.getElementById('sub');

function update() {
	const data = { title: titleInput.value, info: infoInput.value, sub: subInput.value };

	nodecg.sendMessage('playComingUp', data);
}
