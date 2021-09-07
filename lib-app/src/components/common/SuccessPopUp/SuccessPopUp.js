import React from "react";

const SuccessPopUp = ({dataAuthor}) => {
  const {name, surname} = dataAuthor;
	return (
		<div className="alert alert-success " role="alert">
			<h4 className="alert-heading">Well done!</h4>
			<p>
				You successfully added author {`${name} ${surname}`}.
			</p>
		</div>
	);
}

export {SuccessPopUp};