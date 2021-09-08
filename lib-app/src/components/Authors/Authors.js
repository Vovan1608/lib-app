import React, { useState } from "react";

import {Header, Search, LinkTo} from "../common";
import {Table} from "./Table";

const Authors = ({setAuthorInfo}) => {

	const [searchExp, setSearchExp] = useState('');

	return (
		<>
			<Header page="Authors" />
			<main className="main">
				<Search setSearch={setSearchExp}/>
				<LinkTo name="Add" />
				<Table
					searchStr={searchExp}
					setAuthorInfo={setAuthorInfo}
				/>
			</main>
		</>
	);
}

export {Authors};