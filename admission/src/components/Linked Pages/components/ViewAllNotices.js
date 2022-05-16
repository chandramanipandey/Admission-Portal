// import { async } from '@firebase/util'
import React, { useEffect } from 'react'
import {Table, Button, Row, Col} from 'react-bootstrap'
import { receivenotice } from '../../Firebase/ReceiveNotice'
import { useState } from 'react'
import { admindeletenotice } from '../../Firebase/DeleteNotice'

export default function ViewAllNotices() {
	const data = []
	const [loading, setLoading] = useState(true)
	const [noticeData, setNoticeData] = useState([])
	
	async function fetchNoticeData() {
		let response = await receivenotice()
		for (var key in response) {
			data[key] = response[key]
		}
		setNoticeData(data)
	}

	useEffect(() => {
		fetchNoticeData()
		const setLoadingTimeout = setTimeout(setLoading(false), 3000) 
		setTimeout(console.log(noticeData), 3000)
	}
	, [])


	return loading ? 'Loading Data' : (
		<div>
			<Row>
				<Col md={2}>
				<h4 className='p-2'>All Notices</h4>
				</Col>
				<Col md><Button variant='warning' onClick={fetchNoticeData}>Reload</Button></Col>
			</Row>
			<hr />
			
			<Table className="project-list-table table-nowrap align-middle table-hover responsive-sm">
				<thead className='thead-dark'>
					<tr>
						<th>Title</th>
						<th>Content</th>
						<th>Department</th>
						<th>Displayed For</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
				{!loading && Object.keys(noticeData).map((key, value) => {
					var data = noticeData[key];
					console.log(data)
					
					function handleDelete(key) {
						admindeletenotice(key);
						console.log(key, " deleted")
						fetchNoticeData()
					}

					return (
						<tr>
							<td>{data.noticeTitle}</td>
							<td className='text-wrap' md={4}>{data.noticeContent}</td>
							<td>{data.department}</td>
							<td>
								{data.FENotice && "FE "}
								{data.SENotice && "SE "}
								{data.TENotice && "TE "}
								{data.BENotice && "BE "}
							</td>
							<td><Button variant='danger' size='sm' onClick={() => handleDelete(data.key)}>Delete</Button></td>
						</tr>
					)
					// console.log(key, data)
				})}
				</tbody>

			</Table>
			
			<div className='my-3 py-3'></div>
			<div className='my-3 py-3'></div>
			
		</div>
	)
}
