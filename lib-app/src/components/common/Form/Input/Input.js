import React from "react";
// import { useState } from "react";

const Input = ({name}) => {
	// const [input, setInput] = useState('');

	// const onInput = e => {
	// 	const {value} = e.target;
	// 	setInput(value);
	// 	state[name] = value;
	// 	setState({...state});

	// 	if (name === 'name') {
	// 		isValidate['isNameField'] = true;
	// 		setValidate({...isValidate});
	// 	}

	// 	if (name === 'surname') {
	// 		isValidate['isSurnameField'] = true;
	// 		setValidate({...isValidate});
	// 	}

	// 	if (name === 'date_of_birth') {
	// 		isValidate['isBirthDate'] = true;
	// 		setValidate({...isValidate});
	// 	}
	// }

	return (
		<div className="input-group mb-3">
			<span className="input-group-text input_width" id={name}>{name}</span>
			<input
				type="text"
				className="form-control"
				placeholder={name}
				aria-label={name}
				aria-describedby={name}/>
		</div>
	);
}

export default Input;