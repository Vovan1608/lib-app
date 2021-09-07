import React from "react";

const SuccessPopUp = ({data}) => {

	return (
		<div className="alert alert-success" role="alert">
			<h4 className="alert-heading">Well done!</h4>
			<p>
				You successfully added author {`${data.name} ${data.surname}`}.
			</p>
		</div>
	);
}

export default SuccessPopUp;