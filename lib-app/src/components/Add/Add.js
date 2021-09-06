import React from "react";

import Header from "../common/Header/Header";
import Form from "../common/Form/Form";
import ModalRenderer from "../common/Modal/ModalRender";

const Add = () => {
	return (
		<>
			<Header page="Add author" />
			<main className="main">
				<Form buttons_type="Submit" />
			</main>
			<div style={{ position: 'relative', left: 100 }}>
				<ModalRenderer />
			</div>
		</>
	);
}

export default Add;