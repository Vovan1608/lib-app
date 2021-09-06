import React from "react";

import Header from "../common/Header/Header";
import Form from "../common/Form/Form";

const Edit = () => {
	return (
		<>
			<Header page="Edit" />
			<main className="main">
				<Form buttons_type="Edit"/>
			</main>
		</>
	);
}

export default Edit;