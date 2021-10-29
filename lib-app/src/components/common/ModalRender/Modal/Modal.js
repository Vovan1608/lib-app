import React from "react";

import { postAxios, putAxios, deleteAxios } from "../../../../server/api";
import { post } from "../../../../api/rest/post";
import { put } from "../../../../api/rest/put";

const Modal = ({ data, setData }) => {
	const { isOpen, info, title, body, isEdit, isSubmit, isDelete } = data;

	const handleClose = e => {
		setData({ ...data, isOpen: false });
	}

	const handleSave = e => {
		if (isEdit) {
			put('/authors', info.id, info);
		}

		if (isSubmit) {
			post('/authors', info);
		}

		if (isDelete) {
			console.log('yes');
		}

		data.isOpen = false;
		data.isPopUp = true;
		setData({ ...data });

		const delay = 1500;

		setTimeout(() => {
			data.isPopUp = false;
			setData({ ...data });
		}, delay);
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
									<p>{body}</p>
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
		</>
  );
}

export { Modal };