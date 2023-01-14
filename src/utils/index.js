import pulse from "./pulse.mp3";

export const chromatic_scale = [
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
export const Cminor_scale = ["C", "D", "Eb", "F", "G", "Ab", "Bb"];

export const toBeat = () => {
	let audio = new Audio(pulse);
	audio.play();
};

export const sortNotes = (array) => [...array.sort(() => 0.5 - Math.random())];
