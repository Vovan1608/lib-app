import React from "react";

import Header from "../common/Header/Header";
import Form from "../common/Form/Form";

const Add = () => {
	return (
		<>
			<Header page="Add" />
			<main className="main">
				<Form buttons_type="Submit" />
			</main>
		</>
	);
}

export default Add;