import React, { useState, useEffect } from "react";

import {Actions} from "./Actions";
import { fetchData } from "../../../../server/api";
import { get } from "../../../../api/rest/get";

const TableRow = ({search, setAuthorInfo, setData, data }) => {
	const [persons, setPers] = useState([]);
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		get('/authors').then(res => console.log(res.data));
		fetchData('/authors', setPers);
	}, [setPers]);

	useEffect(() => {
		const searchRegExp = new RegExp(`${search}`, 'i');
		const filter = persons
			.filter(({name, surname}) => [name, surname].some(el => searchRegExp.test(el)));

		setFiltered(filter);

	}, [search, persons, setFiltered]);

	const dataPersons = search ? filtered : persons;

	return (
		<tbody>
			{dataPersons.map(person => {
				const {id, name, surname, date_of_birth, date_of_death} = person;

				return (
					<tr key={id + name}>
						<td>{id}</td>
						<td>{name}</td>
						<td>{surname}</td>
						<td>{date_of_birth}</td>
						<td>{date_of_death}</td>
						<td>
							<Actions
								id={id}
								setPers={setPers}
								persons={persons}
								setAuthorInfo={setAuthorInfo}
								setData={setData}
								data={data}
							/>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export {TableRow};