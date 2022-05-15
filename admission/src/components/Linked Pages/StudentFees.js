import React from 'react'
import Footer from '../Dashboard/Footer'
import NavigationBar from '../Dashboard/NavigationBar'
import { receiveallpendingpaymentsfromfirebase } from '../Firebase/receiveallpendingpayments'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { Button, Table, Form } from 'react-bootstrap'
import { onAuthStateChanged } from 'firebase/auth'
export default function StudentFees() {
	const [loading, setLoading] = useState(true)
	const [displayDataAll, setDisplayDataAll] = useState([])
	const auth = getAuth();
	const history = useHistory();
	const [userauth, setuserauth] = useState(undefined)
	useEffect(() => {
		try {

			auth.onAuthStateChanged((authobj) => {
				if (authobj) {
					setuserauth(authobj.uid)
				}
				else {
					history.push('/', "You are not authorised to visit this website, if you are an authorised user please login to continue");
				}
			}
			);
			fetchStudentFeesList();
		}
		catch (e) {
			console.log(e);
		}
	}, [])

	const [isApproved, setIsApproved] = useState(true)

	async function fetchStudentFeesList() {
		let response = await receiveallpendingpaymentsfromfirebase()
		console.log(response)
		const displayData = []

		for (var key in response) {
			const data = response[key];
			const userdata = data['userdata']
			const PendingFeesData = data['PendingFeesData']

			var userdataD = []

			for (var key2 in userdata) {
				userdataD[key2] = userdata[key2]
			}

			for (var key3 in PendingFeesData) {
				userdataD[key3] = PendingFeesData[key3]
			}

			displayData[key] = userdataD;

		}

		setDisplayDataAll(displayData)
		console.log(displayData);
	}
	return loading ? "Loading Page" : (
		<div>
			<NavigationBar userType="Admin" />

			<div className="row align-items-md-stretch w-100 mb-3">
				<div className="col-md">
					<div className="h-100 p-5 text-white bg-dark rounded-3">
						<h1>Students Fees</h1>
					</div>
				</div>
			</div>

			{/* PendingFeesData userdata */}
			<Table className="project-list-table table-nowrap align-middle table-hover responsive-sm">
				<thead>
					<tr>
						{/* UID TransactionID */}
						<th>PRN</th>
						<th>Name</th>
						<th>Department</th>
						<th>Class</th>
						<th>Account Name</th>
						<th>Account Number</th>
						<th>Bank Name</th>
						<th>Bank IFSC</th>
						<th>Transaction Date</th>
						<th>Transaction ID</th>
						<th>Receipt Approved</th>
					</tr>
				</thead>

				{!loading && Object.keys(displayDataAll).map((key, value) => {
					var data = displayDataAll[key];
					console.log(data)

					function handleApprove() {
						setIsApproved(!isApproved)
						console.log(data.transactionId)
						// UID
						// isApproved	
					}

					return (
						<tbody>
							<tr>
								<td>{data.prn}</td>
								<td>{data.userName}</td>
								<td>{data.department}</td>
								<td>{data.currentClass}</td>
								<td>{data.senderAcName}</td>
								<td>{data.senderAcNo}</td>
								<td>{data.senderBankName}</td>
								<td>{data.senderBankIFSC}</td>
								<td>{data.transactionDate}</td>
								<td>{data.transactionId}</td>
								<td><button className={!isApproved ? 'btn btn-sm btn-success' : 'btn btn-sm btn-secondary'} onClick={handleApprove}>{!isApproved ? "Approve" : "Approved"}</button></td>

							</tr>
						</tbody>
					)
				})}
			</Table>
			{console.log(isApproved)}
			<Footer />

		</div>
	)
}
