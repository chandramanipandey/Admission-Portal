import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { FieldsContext } from '../../States/FieldStates'

export default function FileInput({title, controlId}) {
	const {transactionReceiptState} = useContext(FieldsContext)

	const [transactionReceipt, setTransactionReceipt] = transactionReceiptState

	return (
		<>
			<Form.Group controlId={controlId} className="mb-3">
			<Form.Label>{title}</Form.Label>
			<Form.Control type="file" onChange={(e) => handleChange(e, controlId)}/>
			</Form.Group>
		</>
	)

	function handleChange(e, controlId) {
		switch(controlId) {
			case "transactionReceipt":
				setTransactionReceipt(e.target.files[0])
				console.log(transactionReceipt)
				break
			default:
				console.log("Does not match any file upload")

		}
	}
}
