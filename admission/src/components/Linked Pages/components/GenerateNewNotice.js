import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

export default function GenerateNewNotice() {
	const [FENotice, setFENotice] = useState(false)
	const [SENotice, setSENotice] = useState(false)
	const [TENotice, setTENotice] = useState(false)
	const [BENotice, setBENotice] = useState(false)
	const [noticeTitle, setNoticeTitle] = useState("")
	const [noticeContent, setNoticeContent] = useState("")

	function handleChange(e, controlId) {
		switch (controlId) {
			case "noticeTitle":
				setNoticeTitle(e.target.value)
				break
			case "noticeContent":
				setNoticeContent(e.target.value)
				console.log(noticeContent)
				break
			case "FECheck":
				setFENotice(!FENotice)
				console.log(FENotice)
				break
			case "SECheck":
				setSENotice(!SENotice)
				console.log(SENotice)
				break
			case "TECheck":
				setTENotice(!TENotice)
				console.log(TENotice)
				break
			case "BECheck":
				setBENotice(!BENotice)
				console.log(BENotice)
				break
			default:
				console.log("No match case for Checkbox")
		}
	}

	function handleGenerate(e) {
		e.preventDefault();
		console.log("Generate")
	}

	return (
		<div className=''>
			<div className='p-2'>
				<h4 className='p-2'>Generate New Notice</h4>
				<hr />
				
				<Form onSubmit={handleGenerate}>
						<Form.Group>
							<Form.Row>
								<Form.Label column md={1} className='mx-3'>Title</Form.Label>
								<Col md>
									<Form.Control placeholder='Enter Title for the notice' onChange={(e) => handleChange(e, "noticeTitle")}/>
								</Col>
							</Form.Row>
						</Form.Group>

						<Form.Group>
							<Form.Row>
								<Form.Label column md={1} className='mx-3'>Content</Form.Label>
								<Col md>
									<Form.Control as='textarea' rows={3} placeholder='Enter notice content' onChange={(e) => handleChange(e, "noticeContent")}/>
								</Col>
							</Form.Row>
						</Form.Group>

						<Form.Group>
							<Form.Row>
								<Form.Label column md={1} className='mx-3'>For Year</Form.Label>
								<Col md className=''>
									<input type="checkbox" className='mr-2' onChange={() => handleChange("FECheck")}/>
									<label class="form-check-label" for="FECheckbox">
										FE
									</label>
								</Col>
								<Col>
								<input type="checkbox" className='mr-2' onChange={() => handleChange("SECheck")}/>
									<label class="form-check-label" for="SECheckbox">
										SE
									</label>
								</Col>
								<Col>
								<input type="checkbox" className='mr-2' onChange={() => handleChange("TECheck")}/>
									<label class="form-check-label" for="TECheckbox">
										TE
									</label>
								</Col>
								<Col>
								<input type="checkbox" className='mr-2' onChange={() => handleChange("BECheck")}/>
									<label class="form-check-label" for="BECheckbox">
										BE
									</label>
								</Col>
							</Form.Row>
						</Form.Group>

						<Form.Group>
							<Form.Row>
								<Form.Label column md={1} className='mx-3'>For Department</Form.Label>
								<Col md>
									<Form.Control as="select" defaultValue={"Computer"} >
										<option>Computer</option>
										<option>Electronics and Telecommunication</option>
										<option>Mechanical</option>
										<option>Civil</option>
									</Form.Control>
								</Col>
							</Form.Row>
						</Form.Group>

						<Button className='mx-3' variant="success" type="submit" >Generate</Button>{' '}

				</Form>


				<hr />
			</div>

			<h4>All Notices</h4>

		</div>
	)
}
