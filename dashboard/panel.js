const titleInput = document.getElementById('waittitle');
const subInput = document.getElementById('subtitle');

function play() {
	const data = { title: titleInput.value, sub: subInput.value };

	nodecg.sendMessage('startpanel', data);
}

function stop() {
	const data = { title: titleInput.value, sub: subInput.value };

	nodecg.sendMessage('stoppanel', data);
}

function update() {
	const data = { title: titleInput.value, sub: subInput.value };

	nodecg.sendMessage('updatepanel', data);
}
