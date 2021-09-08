import React from "react";
import { Link } from "react-router-dom";

import {Action} from "./Action";
import basket from "../../../../../pictures/actions-svg/basket.svg";
import pencil from "../../../../../pictures/actions-svg/pencil.svg";
import arrow from "../../../../../pictures/actions-svg/arrow.svg";

import { deleteAxios, getAxios} from "../../../../../server/api";

const Actions = ({id, setPers, persons, setAuthorInfo}) => {
	const handleClick = e => {
		setAuthorInfo(id);
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
			<Action text='basket' path={basket} id="remove"/>
			<Link to="/books">
				<Action text='arrow' path={arrow} id="to_books"/>
			</Link>
		</div>
	);
}

export {Actions};