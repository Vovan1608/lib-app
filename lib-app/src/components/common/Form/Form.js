import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

import Input from "./Input/Input";
import { postAxios } from "../../../server/api";

const Form = ({buttons_type}) => {
	const initialInfo = {
		id: '',
		name: '',
		surname: '',
		date_of_birth: '',
		date_of_death: ''
	}

	const [info, setInfo] = useState(initialInfo);

	const handleSubmit = e => {
		if (buttons_type === 'Submit') {
			postAxios('authors', info);
		}
		e.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit}>
			{['id', 'name', 'surname', 'date_of_birth', 'date_of_death'].map(el => {
				return (
					<Input
						key={el}
						name={el}
						setInfo={setInfo}
						info={info}
						id={el}
					/>
				);
			})}
			<input
				type="submit"
				className="btn btn-primary"
				value={buttons_type}
			/>
			<Link to="/authors">
				<input
					type="button"
					className="m-2 btn btn-primary"
					value="Close"
				/>
			</Link>
		</form>
	);
}

export default Form;