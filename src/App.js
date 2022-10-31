import { useEffect, useState } from "react";
import "./App.css";

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function App() {
	const [index, setIndex] = useState({
		actual: null,
		next: Math.floor(Math.random() * 11),
	});

	useEffect(() => {
		const timer = setInterval(
			() =>
				setIndex((s) => ({
					next: Math.floor(Math.random() * 11),
					actual: s.next,
				})),
			[2000]
		);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="app">
			<div className="title">
				<h1>Random Sheet</h1>
			</div>
			<div className="actual-container">
				{index.actual !== undefined && <span>{`${notes[index.actual]}`}</span>}
			</div>
			<div className="next-container">
				<span>{`Next: ${notes[index.next]}`}</span>
			</div>
		</div>
	);
}

export default App;
