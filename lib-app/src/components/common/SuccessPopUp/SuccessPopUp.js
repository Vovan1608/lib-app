import React from "react";
import ReactDOM from "react-dom";

const SuccessPopUp = ({data}) => {
  const {info: {name, surname}, isPopUp} = data;

	return (
		ReactDOM.createPortal(
			<>
				{isPopUp &&
					<div className="alert alert-success alert_wrap" role="alert" id="pop_up">
						<h4 className="alert-heading">Well done!</h4>
						<p>
							You successfully added author {`${name} ${surname}`}.
						</p>
					</div>
				}
			</>,
			document.body
		)
	);
}

export {SuccessPopUp};