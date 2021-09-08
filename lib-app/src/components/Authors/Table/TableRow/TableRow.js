import React, { useState, useEffect } from "react";

import {Actions} from "./Actions";
import { fetchData } from "../../../../server/api";

const TableRow = ({search, setAuthorInfo}) => {
	const [persons, setPers] = useState([]);
	const [filtered, setFiltered] = useState([]);

	useEffect(() => fetchData('/authors', setPers), [setPers]);

	useEffect(() => {
		const searchRegExp = new RegExp(`${search}`, 'i');
		const filter = persons
			.filter(({name, surname}) => [name, surname].some(el => searchRegExp.test(el)));

		setFiltered(filter);

	}, [search, persons, setFiltered]);

	const data = search ? filtered : persons;

	return (
		<tbody>
			{data.map(person => {
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
							/>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export {TableRow};