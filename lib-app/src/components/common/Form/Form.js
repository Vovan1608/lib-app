import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "./Input";

const Form = ({buttons_type, setData, data}) => {
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

		data.isOpen = true;
		data.title = 'You are going to add author:';
		data.body = `${info.name} ${info.surname}`;
		data.info = info;
		setData({...data});
	}

	const inputs = Object.keys(initialInfo).filter(el => {
		if (buttons_type === 'Submit') {
			return el !== 'id';
		}

		return el;
	});

	return (
		<form onSubmit={handleSubmit}>
			{inputs.map(el => {
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

export {Form};