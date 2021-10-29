import React from "react";
import { useState, useEffect } from 'react';

import { get } from "../../api/rest/get";

import { Header, Search } from "../common";
import { Card } from "./Card";

const Books = () => {
	const [books, setBooks] = useState([]);
	const [searchExp, setSearchExp] = useState('');
	const [filtered, setFiltered] = useState([]);

	useEffect(() => get('/books').then(res => setBooks(res.data)), [setBooks]);

	useEffect(() => {
		const searchRegExp = new RegExp(`${searchExp}`, 'i');
		const filter = books
			.filter(({ author }) => searchRegExp.test(author));

		setFiltered(filter);
	}, [searchExp, books]);

	const data = searchExp ? filtered : books;

	return (
		<>
			<Header page="Books" />
			<main className="main">
				<Search setSearch={setSearchExp}/>
				<div className="books_container">
					{data.map(book => {
						const {id, picture, name, author, description} = book;
						return (
							<Card
								key={id}
								path={picture}
								name={name}
								author={author}
								description={description}
							/>
						);
					})}
				</div>
			</main>
		</>
	);
}

export { Books };