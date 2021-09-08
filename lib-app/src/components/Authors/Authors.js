import React, { useState } from "react";

import {Header, Search, LinkTo, ModalRenderer, SuccessPopUp} from "../common";
import {Table} from "./Table";

const Authors = ({setAuthorInfo}) => {
	const initialData = {
		isOpen: false,
		isPopUp: false,
		title: '',
		body: '',
		info: {},
		isDelete: null
	}

	const [searchExp, setSearchExp] = useState('');
	const [data, setData] = useState(initialData);
	console.log(data.isDelete);
	return (
		<>
			<Header page="Authors" />
			<main className="main">
				<Search setSearch={setSearchExp}/>
				<LinkTo name="Add" />
				<Table
					searchStr={searchExp}
					setAuthorInfo={setAuthorInfo}
					setData={setData}
				/>
			</main>
		</>
	);
}

export {Authors};