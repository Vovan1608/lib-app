import React from "react";

const TableHeaders = ({ headers }) => (
	<thead>
		<tr>
			{headers.map(header => <td key={header}>{header}</td>)}
		</tr>
	</thead>
);

export { TableHeaders };