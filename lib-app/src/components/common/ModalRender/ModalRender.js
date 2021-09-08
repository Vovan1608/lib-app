import React from "react";
import ReactDOM from "react-dom";

import {Modal} from "./Modal";

const ModalRenderer = ({data, setData, initial}) => {
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

export {ModalRenderer};