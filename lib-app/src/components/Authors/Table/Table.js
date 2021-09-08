import React from "react";

import {TableHeaders} from "./TableHeaders";
import {TableRow} from "./TableRow";

const Table = ({searchStr, setAuthorInfo, setData}) => {
	const headers = ['Date', 'First Name', 'Last Name', 'Date of birth', 'Date of death', 'Actions'];

	return (
		<table className="table">
			<TableHeaders headers={headers}/>
			<TableRow
				search={searchStr}
				setAuthorInfo={setAuthorInfo}
				setData={setData}
			/>
		</table>
	);
}

export {Table};