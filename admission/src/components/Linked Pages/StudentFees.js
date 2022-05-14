import React from 'react'
import Footer from '../Dashboard/Footer'
import NavigationBar from '../Dashboard/NavigationBar'
import { receiveallpendingpaymentsfromfirebase } from '../Firebase/receiveallpendingpayments'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { Table } from 'react-bootstrap'

export default function StudentFees() {
	const [loading, setLoading] = useState(true)
	const [displayDataAll, setDisplayDataAll] = useState([])
	const auth = getAuth();
	const history = useHistory();
	const [userauth, setuserauth] = useState(undefined)
	useEffect(() => {
		try {
			setuserauth(auth.currentUser.uid);
			fetchStudentFeesList();
			setLoading(false);
		}
		catch (e) {
			history.push('/', e);
		}
	}, [auth])


	async function fetchStudentFeesList() {
		let response = await receiveallpendingpaymentsfromfirebase()
		const displayData = []

		for (var key in response) {
			const data = response[key];
			const userdata = data['userdata']

			var userdataD = []

			const PendingFeesData = data['PendingFeesData']
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
			<h1>Student Fees</h1>

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
					</tr>
				</thead>

				{!loading && Object.keys(displayDataAll).map((key, value) => {
					var data = displayDataAll[key];
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
							</tr>
						</tbody>
					);
				})}
			</Table>
			<Footer />

		</div>
	)
}
