import pulse from "./pulse.mp3";

export const chormatic_scale = [
	"C",
	"C#",
	"D",
	"D#",
	"E",
	"F",
	"F#",
	"G",
	"G#",
	"A",
	"A#",
	"B",
];

export const Cmajor_scale = ["C", "D", "E", "F", "G", "A", "B"];

export const toBeat = () => {
	let audio = new Audio(pulse);
	audio.play();
};
