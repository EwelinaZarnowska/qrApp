// QR code 
const wrapper = document.querySelector(".wrapper"),
    generateBtn = wrapper.querySelector(".form button"),
    qrInput = wrapper.querySelector(".form input"),
    qrImg = wrapper.querySelector(".qr-code img");

const audioMeow = new Audio("sound/meow.mp3");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerHTML = "Generating QR Code...";
    audioMeow.play();
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerHTML = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active")
    };
});

// cat
document.querySelector("body").addEventListener("mousemove", eyeball1);
		function eyeball1() {
			const eye1 = document.querySelectorAll(".eye1");
			eye1.forEach (function(eye1) {
			let x = (eye1.getBoundingClientRect().left) + (eye1.clientWidth / 2);
			let y = (eye1.getBoundingClientRect().top) + (eye1.clientHeight / 2);
			let radian = Math.atan2 (event.pageX - x, event.pageY - y);
			let rotation = (radian * (180 / Math.PI) * -1) + 270;
			eye1.style.transform = "rotate(" + rotation + "deg)"

		});
	}

    document.querySelector("body").addEventListener("mousemove", eyeball2);
    function eyeball2() {
        const eye2 = document.querySelectorAll(".eye2");
        eye2.forEach (function(eye2) {
        let x = (eye2.getBoundingClientRect().left) + (eye2.clientWidth / 2);
        let y = (eye2.getBoundingClientRect().top) + (eye2.clientHeight / 2);
        let radian = Math.atan2 (event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye2.style.transform = "rotate(" + rotation + "deg)"

    });
}

const audioPurr = new Audio("sound/purr.mp3");

document.querySelector(".cat").addEventListener("mousemove", sound);
function sound() {
    audioPurr.play();
}

document.querySelector(".cat").addEventListener("mouseleave", () => {
    audioPurr.pause();
});