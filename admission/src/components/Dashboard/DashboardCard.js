import React from 'react'
import { Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

export default function DashboardCard({title, titleText, controlId}) {
	const history = useHistory();

	async function handleClick(controlId) {
			
			if (controlId == "fedseform") {
					history.push('/fedseform');
			}

			if (controlId == "MyProfile") {
					history.push('/MyProfile')
			}
			
			if (controlId == "FeesDetails") {
					history.push('/FeesDetails')
			}

			if (controlId == "StudentList") {
					history.push('/StudentList')
			}
			
	}

	return (
			<Col md={4}>
					<div className="d-flex align-items-start rounded border border-primary bg-fff">
							<div className="p-15">
							<h1 className="mb-40">{title}</h1>

							<a href="#" class="btn btn-primary" onClick={() => handleClick(controlId)}>
								{titleText}
							</a>
							</div>
					</div>
			</Col>
	)
}
