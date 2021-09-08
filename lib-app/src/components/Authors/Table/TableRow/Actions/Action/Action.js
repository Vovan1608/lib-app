import React from "react";

const Action = ({path, text, id, setData}) => {
	const handleDelete = e => {
		if (e.target.id === 'remove') {
			setData(true);
		}
	}

	return (
		<>
			<span className="action">
				<img src={path} alt={text} className="action_img" id={id} onClick={handleDelete}/>
			</span>
		</>
	);
}

export {Action};