import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function DateFieldInline({title, controlId, size, isDisabled}) {
	const { transactionDateState, issueDateState } = useContext(FieldsContext)

	const [transactionDate, setTransactionDate] = transactionDateState;
	const [issueDate, setIssueDate] = issueDateState;

	return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column md={3}>
            {title}
          </Form.Label>
          <Col sm={size? size : 9}>
            {isDisabled ? (
              <Form.Control
              type="date"
              onChange={(e) => handleChange(e, controlId)}
              disabled
            />
            ) : (
              <Form.Control
              type="date"
              onChange={(e) => handleChange(e, controlId)}
            />
            )}
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "transactionDate":
				setTransactionDate(e.target.value)
				break
      case "issueDate":
				setIssueDate(e.target.value)
				console.log(issueDate)
				break
      default:
        console.log("No DateField Match")
    }
  }
}
