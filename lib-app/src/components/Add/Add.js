import React, {useState} from "react";

import Header from "../common/Header/Header";
import Form from "../common/Form/Form";
import ModalRenderer from "../common/ModalRender/ModalRender";

const Add = () => {
	const initialData = {
		isOpen: false,
		title: '',
		body: '',
		info: {}
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
		</>
	);
}

export default Add;