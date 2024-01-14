// --------------------------- clock logic starts ---------------------------
// current time
let date = new Date();
let hour = parseFloat(date.getHours() - 12);
let minute = date.getMinutes();
let second = date.getSeconds();

// targeting clock niddles
const secondNiddle = document.getElementById("niddle1");
const minuteNiddle = document.getElementById("niddle2");
const hourNiddle = document.getElementById("niddle3");

hour = parseFloat(hour) + (0.2 * minute) / 12;

const setClock = () => {
	// positioning hour niddle
	hourNiddle.style.transform = `rotate(${30 * hour}deg) translate(-50%,-50%)`;

	// positioning minute niddle
	minuteNiddle.style.transform = `rotate(${
		6 * minute
	}deg) translate(-50%,-50%)`;

	// positioning second niddle
	secondNiddle.style.transform = `rotate(${
		6 * second
	}deg) translate(-50%,-50%)`;

	if (second === 60) {
		second = 1;
		// because updates after 1 sec
		minute++;
	} else {
		second++;
	}
	if (minute === 60) {
		minute = 0;
	}
	if (minute % 12 === 0 && second === 0) {
		hour += 0.2;
	}
	if (hour === 12) {
		hour = 0;
	}
};

setInterval(setClock, 1000);

setClock();

// --------------------------- rain logic ends ---------------------------

// --------------------------- rain logic starts ---------------------------

const rain = () => {
	let amount = 200;
	let body = document.querySelector(".rain");
	let i = 0;
	while (i < amount) {
		let drop = document.createElement("i");

		let size = Math.random() * 5;
		let posX = Math.floor(Math.random() * window.innerWidth);
		let delay = Math.random() * -20;
		let duration = Math.random() * 5;

		drop.style.width = size + "px";
		drop.style.left = posX + "px";
		drop.style.animationDelay = delay + "s";
		drop.style.animationDuration = 1 + duration + "s";
		body.appendChild(drop);

		i++;
	}
};

rain();

// --------------------------- rain logic ends ---------------------------
