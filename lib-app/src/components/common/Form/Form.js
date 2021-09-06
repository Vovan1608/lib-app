import React from "react";
import { Link } from "react-router-dom";

import Input from "./Input/Input";

const Form = ({buttons_type}) => {
	const fields = ['id', 'name', 'surname', 'date of birth', 'date of death']
	return (
		<form>
			{fields.map(el => {
				return (
					<Input
						key={el}
						name={el}
					/>
				);
			})}
			<input type="submit" className="btn btn-primary" value={buttons_type} disabled/>
			<Link to="/authors">
				<input type="button" className="m-2 btn btn-primary" value="Close"/>
			</Link>
		</form>
	);
}

export default Form;