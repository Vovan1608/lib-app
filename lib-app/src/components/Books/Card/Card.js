import React from "react";

const Card = ({name, author, description, path}) => (
	<div className="card col-xl-3 col-lg-4 col-md-6 col-sm-12">
		<div className="row g-0">
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
				<img src={path} className="img-fluid rounded-start" alt={name} />
			</div>
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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

export { Card };