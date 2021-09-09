import React from "react";

const Action = ({path, text, id, setData, data}) => {
	const handleDelete = e => {
		if (e.target.id === 'remove') {
			data.isOpen = true;
			data.isDelete = true;
			data.title = 'You are going to delete author:';
			setData({...data});
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