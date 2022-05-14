import React from 'react'
import { Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

export default function DashboardCard({title, titleText, controlId}) {
	const history = useHistory();

	async function handleClick(controlId) {
			switch (controlId) {
				case "fedseform":
						history.push('/fedseform');
						break
				case "MyProfile":
						history.push('/MyProfile')
						break
				case "FeesDetails":
						history.push('/FeesDetails')
						break
				case "StudentList":
						history.push('/StudentList')
						break
				case "StudentFees":
					history.push('/StudentFees')
					break
				case "GenerateNotice":
					history.push('/GenerateNotice')
					break
				default:
					console.log("Doesn't Match any History.push")
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
