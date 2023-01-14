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

export const BEAT_OPTIONS = [
	{ value: 0, name: "60 bpm" },
	{ value: 1, name: "80 bpm" },
	{ value: 2, name: "120 bpm" },
	{ value: 3, name: "150 bpm" },
];

export const sortNotes = (array) => [...array.sort(() => 0.5 - Math.random())];
