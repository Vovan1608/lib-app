import React from "react";

const Action = ({path, text, id, setAuthorInfo}) => {
	return (
		<>
			<span className="action">
				<img src={path} alt={text} className="action_img" id={id}/>
			</span>
		</>
	);
}

export {Action};