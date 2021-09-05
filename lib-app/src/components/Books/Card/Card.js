import React from "react";

const Card = ({name, author, description, path}) => {
	return (
		<div className="card col-xl-4 col-lg-4 mb-3" >
			<div className="row g-0">
				<div className="col-md-4">
					<img src={path} className="img-fluid rounded-start" alt={name} />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">
							<small className="text-muted">
								{author}
							</small>
						</p>
						<p className="card-text">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;