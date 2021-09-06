import React, { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

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
		e.preventDefault();

		if (buttons_type === 'Submit') {
			postAxios('authors', info);
		}
	}


	return (
		<form onSubmit={handleSubmit}>
			{Object.keys(initialInfo).map(el => {
				return (
					<Input
						key={el}
						name={el}
						setInfo={setInfo}
						info={info}
					/>
				);
			})}
			<input
				type="submit"
				className="btn btn-primary"
				value={buttons_type}
				data-bs-toggle="popover"
				title="Popover title"
				data-bs-content="And here's some amazing content. It's very engaging. Right?"
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