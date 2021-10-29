import React, { useState } from "react";

import { Header, Form, ModalRenderer, SuccessPopUp } from "../common";

const Add = () => {
	const initialData = {
		isOpen: false,
		isPopUp: false,
		title: '',
		body: '',
		info: {},
		isSubmit: null
	}

	const [data, setData] = useState(initialData);

	return (
		<>
			<Header page="Add author" />
			<main className="main">
				<Form
					buttons_type="Submit"
					setData={setData}
					data={data}
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

export { Add };