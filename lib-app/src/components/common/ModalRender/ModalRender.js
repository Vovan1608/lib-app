import React from "react";
import ReactDOM from "react-dom";

import Modal from "./Modal/Modal";

const ModalRenderer = ({data, setData}) => {
  return (
		ReactDOM.createPortal(
			<Modal
				data={data}
				setData={setData}
			/>,
			document.body
		)
  );
}

export default ModalRenderer;