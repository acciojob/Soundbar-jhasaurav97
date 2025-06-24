//your JS code here. If required.
const soundsName = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const sounds = {};

soundsName.forEach(name => {
	sounds[name] = new Audio(`sounds/${name}.mp3`);
});

document.querySelectorAll(".btn").forEach(button => {
	button.addEventListener('click', () => {
		stopAll();
		const soundName = button.textContent.trim();
		sounds[soundName].play();
	})
});

document.querySelector(".stop").addEventListener("click", stopAll);

function stopAll(){
	for(let sound in sounds){
		sounds[sound].pause();
		sounds[sound].currentTime = 0;
	}
}