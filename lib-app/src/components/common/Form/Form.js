import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../../server/api";

import { Input } from "./Input";

const Form = ({buttons_type, setData, data, authorId}) => {
	const initialInfo = {
		id: '',
		name: '',
		surname: '',
		date_of_birth: '',
		date_of_death: ''
	}

	const [info, setInfo] = useState(initialInfo);

	useEffect(() => authorId && fetchData(`/authors/${authorId}`, setInfo), [setInfo, authorId]);

	const handleSubmit = e => {
		e.preventDefault();

		if (buttons_type === 'Submit') {
			data.title = 'You are going to add author:';
		}

		if (buttons_type === 'Edit') {
			data.title = 'You are going to edit author:';
			data.isEdit = true;
		}

		data.isOpen = true;
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
						value={'' || info[el]}
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