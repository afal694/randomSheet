import React from "react";

function Select({ options, label, classname, onSelect }) {
	
	return (
		<div className={`select-class ${classname}`}>
			<label for="my-select">{label}</label>
			<select name="select" id="my-select" onChange={onSelect}>
				<option key={-1} value="">
					--Please choose an option--
				</option>
				{options.map((o) => (
					<option key={o.value} value={o.value}>
						{o.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
