import React from "react";

import { SuccessPopUp } from "../../"
import { postAxios } from "../../../../server/api";

const Modal = ({data, setData}) => {
	const { isOpen, info, title } = data;

	const handleClose = e => {
		setData(false);
	}

	const handleSave = e => {
		postAxios('authors', info);
		setData(false);
	}

  return (
		<>
			{isOpen &&
				<div>
					<div className="modal" style={{display: 'block'}}>
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">{title}</h5>
								</div>
								<div className="modal-body">
									<p>{data.body}</p>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal"
										onClick={handleClose}
									>
										Close
									</button>
									<button
										type="button"
										className="btn btn-primary"
										onClick={handleSave}
									>
										Save changes
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
			<SuccessPopUp dataAuthor={info}/>
		</>
  );
}

export {Modal};