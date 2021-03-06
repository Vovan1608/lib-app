import React from "react";
import { Link } from "react-router-dom";

import {Action} from "./Action";
import basket from "../../../../../pictures/actions-svg/basket.svg";
import pencil from "../../../../../pictures/actions-svg/pencil.svg";
import arrow from "../../../../../pictures/actions-svg/arrow.svg";

const Actions = ({ id, setAuthorInfo, setData, data }) => {

	const handleClick = e => {
		setAuthorInfo(id);

		data.id = id;
		setData({...data});
	}

	return (
		<div className="actions" id={id} onClick={handleClick}>
			<Link to="/edit">
				<Action
					text='pencil'
					path={pencil}
					id="edit"
				/>
			</Link>
			<Action
				text='basket'
				path={basket}
				id="remove"
				setData={setData}
				data={data}
			/>
			<Link to="/books">
				<Action text='arrow' path={arrow} id="to_books"/>
			</Link>
		</div>
	);
}

export {Actions};