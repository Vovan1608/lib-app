import React, { useState, useEffect } from "react";
import { fetchData } from "../../server/api";

import {Header, Search, LinkTo, ModalRenderer, SuccessPopUp} from "../common";
import {Table} from "./Table";

const Authors = ({setAuthorInfo}) => {
	const initialData = {
		isOpen: false,
		isPopUp: false,
		title: '',
		body: '',
		info: {},
		id: null,
		isDelete: null
	}

	const [searchExp, setSearchExp] = useState('');

	const [data, setData] = useState(initialData);
	const [pers, setPers] = useState(data.info);

	useEffect(() => {
		data.id && fetchData(`/authors/${data.id}`, setPers);
	}, [data, setPers]);

	useEffect(() => {
		data.info = pers;
		data.body = `${pers.name} ${pers.surname}`;
	}, [data, pers, setData]);

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

export {Authors};