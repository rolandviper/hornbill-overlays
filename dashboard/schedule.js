const event1 = document.getElementById('1E');
const time1 = document.getElementById('1T');
const event2 = document.getElementById('2E');
const time2 = document.getElementById('2T');
const event3 = document.getElementById('3E');
const time3 = document.getElementById('3T');
const event4 = document.getElementById('4E');
const time4 = document.getElementById('4T');

function show() {
	const data = {
		event1: event1.value,
		time1: time1.value,
		event2: event2.value,
		time2: time2.value,
		event3: event3.value,
		time3: time3.value,
		event4: event4.value,
		time4: time4.value
	};

	nodecg.sendMessage('showSchedule', data);
}
