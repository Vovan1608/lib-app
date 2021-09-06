import React from "react";
import ReactDOM from "react-dom";

import Modal from "./Modal";

function ModalRenderer() {
  return (
		ReactDOM.createPortal(
			<Modal />,
			document.body
		)
  );
}

export default ModalRenderer;