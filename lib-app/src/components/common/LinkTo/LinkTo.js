import React from "react";
import { Link } from 'react-router-dom'

const LinkTo = ({name}) => (
	<div className="text_path">
		<Link to={`/${name.toLowerCase()}`}>
			{ name }
		</Link>
	</div>
);

export { LinkTo };