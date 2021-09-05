import React from "react";
import { Link } from "react-router-dom";

import Action from "./Action/Action";
import basket from "../../../../../pictures/actions-svg/basket.svg";
import pencil from "../../../../../pictures/actions-svg/pencil.svg";
import arrow from "../../../../../pictures/actions-svg/arrow.svg";

import { deleteAxios, getAxios} from "../../../../../server/api";

const Actions = ({id, setPers, persons}) => {
	const onClick = e => {
		if (e.target.id === 'remove') {
			deleteAxios('authors', id);
			const filtered = persons.filter(el => el.id !== id);
			setPers(filtered);
		}

		if (e.target.id === 'edit') {
			const fetchData = async () => {
				const response = await getAxios(`/authors/${id}`);
				// postAxios('modal', response.data);
			}

			fetchData();
		}
	}

	return (
		<div className="actions" onClick={onClick} id={id}>
			<Link to="/edit">
				<Action text='pencil' path={pencil} id="edit" />
			</Link>
			<Action text='basket' path={basket} id="remove"/>
			<Link to="/books">
				<Action text='arrow' path={arrow} id="to_books"/>
			</Link>
		</div>
	);
}

export default Actions;