import React from "react";

import {Header, Form} from "../common";

const Edit = () => {
	return (
		<>
			<Header page="Edit author" />
			<main className="main">
				<Form buttons_type="Edit"/>
			</main>
		</>
	);
}

export {Edit};