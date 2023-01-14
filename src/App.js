import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Cmajor_scale, toBeat } from "./utils";

const beat = 30;

function App() {
	const [stateNotes, setStateNotes] = useState([
		// ...notes.sort((a, b) => 0.5 - Math.random()),
		// ...notes.sort((a, b) => 0.5 - Math.random()),
		...Cmajor_scale.sort(() => 0.5 - Math.random()),
		...Cmajor_scale.sort(() => 0.5 - Math.random()),
	]);

	const timerRef = useRef(null);

	const [indexNotes, stateIndexNotes] = useState(0);

	const [state, setState] = useState("active");

	useEffect(() => {
		timerRef.current = setInterval(() => {
			stateIndexNotes((s) => s + 1);
			toBeat();
		}, [60000 / beat]);

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
		if (state === "active") {
		}
		console.log({ state });
	}, [state]);

	return (
		<div className="app">
			<div className="title">
				<h1>Random Sheet</h1>
			</div>
			<div className="actual-container">
				<span>{`${stateNotes[indexNotes]}`}</span>
			</div>
			<div className="next-container">
				<span>
					{state === "active" ? `Next: ${stateNotes[indexNotes + 1]}` : "End"}
				</span>
			</div>
		</div>
	);
}

export default App;
