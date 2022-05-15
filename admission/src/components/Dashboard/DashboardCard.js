import React from 'react'
import { Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import "../CSS/DashboardCard.css"


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
				case "FeeStructure":
					history.push('/FeeStructure')
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
					<div className="dashboardCard d-flex align-items-start rounded border border-primary bg-fff" onClick={() => handleClick(controlId)}>
							<div className="p-15">
							<h2 className="cardTitle mb-40">{title}</h2>
							</div>
					</div>
			</Col>
	)
}
