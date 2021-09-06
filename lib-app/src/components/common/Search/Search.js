import React from "react";
import { useState } from "react";

const Search = ({setSearch}) => {
	const [searchString, setSearchString] = useState('');

  const onChangeSearch = e => {
    const { value } = e.target;
		setSearchString(value);
    setSearch(value);
  }

	return (
		<input
			className="input"
			placeholder="search"
			value={searchString}
			onChange={onChangeSearch}/>
	);
}

export default Search;