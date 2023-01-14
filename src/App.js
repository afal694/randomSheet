import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
	Cmajor_scale,
	Cminor_scale,
	chromatic_scale,
	sortNotes,
	toBeat,
} from "./utils";
import Select from "./components/SelectComponent";

const beat = 30;

function App() {
	const [stateNotes, setStateNotes] = useState([]);
	const [notesSelected, setNotesSelected] = useState(-1);
	const [indexNotes, stateIndexNotes] = useState(0);
	const [state, setState] = useState("waiting");
	const timerRef = useRef(null);

	useEffect(() => {
		console.log({ stateNotes });
		return () => clearInterval(timerRef.current);
	}, []);

	useEffect(() => {
		if (indexNotes === stateNotes.length - 1) {
			clearInterval(timerRef.current);
			setState("end");
		}
	}, [indexNotes]);

	useEffect(() => {
		console.info({ notesSelected });
		if (notesSelected === 0) {
			setStateNotes(sortNotes(Cmajor_scale));
		}
		if (notesSelected === 1) {
			setStateNotes(sortNotes(Cminor_scale));
		}
		if (notesSelected === 2) {
			setStateNotes(sortNotes(chromatic_scale));
		}
	}, [notesSelected]);

	useEffect(() => {
		console.log({ state });
	}, [state]);

	const onRestart = () => {
		stateIndexNotes(0);
		setState("active");
		timerRef.current = setInterval(() => {
			stateIndexNotes((s) => s + 1);
			toBeat();
		}, [60000 / beat]);
	};

	const onStart = () => {
		if (notesSelected === -1) {
			alert("Please select a group of notes!");
			return;
		}
		setState("active");
		timerRef.current = setInterval(() => {
			stateIndexNotes((s) => s + 1);
			toBeat();
		}, [60000 / beat]);
	};

	return (
		<div className="app">
			<div className="title">
				<h1>Random Sheet</h1>
				<Select
					classname={""}
					label={"Select notes"}
					options={[
						{ value: 0, name: "C major scale" },
						{ value: 1, name: "C minor scale" },
						{ value: 2, name: "Chromatic scale" },
					]}
					onSelect={(e) => {
						setNotesSelected(parseInt(e.target.value));
					}}
				/>
			</div>
			<div className="actual-container">
				<span>{`${stateNotes[indexNotes] || "_"}`}</span>
			</div>
			<div className="next-container">
				{state === "end" && (
					<button className="restart-button" onClick={onRestart}>
						Restart
					</button>
				)}
				{state === "waiting" && (
					<button className="restart-button" onClick={onStart}>
						Start
					</button>
				)}
				<span>
					{state === "active" ? `Next: ${stateNotes[indexNotes + 1]}` : "End"}
				</span>
			</div>
		</div>
	);
}

export default App;
