import React from "react";
import { useState } from "react";

import Header from "../common/Header/Header";
import Search from "../common/Search/Search";
import LinkTo from "../common/LinkTo/LinkTo";
import Table from "./Table/Table";

const Authors = () => {
	const [searchExp, setSearchExp] = useState('');

	return (
		<>
			<Header page="Authors" />
			<main className="main">
				<Search setSearch={setSearchExp}/>
				<LinkTo name="Add" />
				<Table searchStr={searchExp}/>
			</main>
		</>
	);
}

export default Authors;