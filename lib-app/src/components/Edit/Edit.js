import React, {useState} from "react";

import {Header, Form, ModalRenderer, SuccessPopUp} from "../common";

const Edit = ({authorInfo}) => {
	const initialData = {
		isOpen: false,
		isPopUp: false,
		title: '',
		body: '',
		info: {},
		isEdit: null
	}

	const [data, setData] = useState(initialData);

	return (
		<>
			<Header page="Edit author" />
			<main className="main">
				<Form
					buttons_type="Edit"
					setData={setData}
					data={data}
					authorId={authorInfo}
				/>
			</main>
			<ModalRenderer
				setData={setData}
				data={data}
			/>
			<SuccessPopUp data={data}/>
		</>
	);
}

export {Edit};