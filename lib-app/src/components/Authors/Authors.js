import React from "react";

import Header from "../common/Header/Header";
import Search from "../common/Search/Search";
import LinkTo from "../common/LinkTo/LinkTo";
import Table from "./Table/Table";

const Authors = () => {
	return (
		<>
			<Header page="Authors" />
			<main className="main">
				<Search />
				<LinkTo name="Add" />
				<Table />
			</main>
		</>
	);
}

export default Authors;