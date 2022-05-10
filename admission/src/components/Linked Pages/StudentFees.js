import React from 'react'
import Footer from '../Dashboard/Footer'
import NavigationBar from '../Dashboard/NavigationBar'
import { receiveallpendingpaymentsfromfirebase } from '../Firebase/receiveallpendingpayments'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

export default function StudentFees() {
	const [studentFeesList, setStudentFeesList] = useState(null)
	const [loading, setLoading] = useState(true)
	const [studentObjects, setStudentObjects] = useState()
	const [displayDataAll, setDisplayDataAll] = useState([])

	let StudentObj = []

	async function fetchStudentFeesList() {
    let response = await receiveallpendingpaymentsfromfirebase()
		setStudentFeesList(response)
		
		if (studentFeesList) {
			for (const key in studentFeesList) {
				StudentObj[key] = studentFeesList[key]
			}
			setStudentObjects(StudentObj)
		}

		setLoading(false)


	}

	useEffect(() => {
    console.log("useEffect Running")
    fetchStudentFeesList()

		console.log(loading)
		console.log(StudentObj)
		const displayData = []

		for(var key in studentObjects) {
			const data = studentObjects[key];
			const userdata = data['userdata']
			
			var userdataD = []

			const PendingFeesData = data['PendingFeesData']
			for(var key2 in userdata) {
				userdataD[key2] = userdata[key2]

			}

			for (var key3 in PendingFeesData) {
				userdataD[key3] = PendingFeesData[key3]
			}
			displayData[key] = userdataD;
			
		}

		setDisplayDataAll(displayData)
		console.log("UseEffect Displaydata")
		displayData.forEach(x => console.log(x))
  }, [])

	return loading ? "Loading Page" : (
		<div>
			<NavigationBar userType="Admin"/>
			<h1>Student Fees</h1>
			{/* {console.log("Student Objects")}
			{console.log(studentObjects)} */}


			{console.log("display all")}
			{console.log(displayDataAll)}

{/* PendingFeesData userdata */}
      <Table className="project-list-table table-nowrap align-middle table-hover responsive-sm">
				<thead>
					<tr>
						{/* UID TransactionID */}
						<th>Name</th>
						<th>Department</th>
						<th>Class</th>
						<th>Rollno</th>
						<th>Category</th>
						<th>Fees Paid</th>
						<th>Pending Fees</th>
						<th>Total Fees</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						
						<td>Test</td>
						<td>Test</td>
						<td>Test</td>
						<td>Test</td>
						<td>Test</td>
						<td>Test</td>
						<td>Test</td>
						<td>Test</td>
					</tr>
				</tbody>
			</Table>

			<Footer />
			
		</div>
	)
}
