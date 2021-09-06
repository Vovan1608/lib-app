import React, { useState } from "react";

const Input = ({name, info, setInfo}) => {
	const [input, setInput] = useState('');

	const handleInput = e => {
		const {value} = e.target;
		setInput(value);
		info[name] = value;
		setInfo({...info});
	}

	return (
		<div className="input-group mb-3">
			<span className="input-group-text input_width" id={name}>{name.replaceAll('_', ' ')}</span>
			<input
				onInput={handleInput}
				type="text"
				className="form-control"
				placeholder={name.replaceAll('_', ' ')}
				aria-label={name}
				aria-describedby={name}
				value={input}
				required={name === 'name' || name === 'surname' || name ==='date_of_birth'}
			/>
		</div>
	);
}

export default Input;