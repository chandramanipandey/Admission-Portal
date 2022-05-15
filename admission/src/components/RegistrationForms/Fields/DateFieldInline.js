import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function DateFieldInline({title, controlId, size}) {
	const { transactionDateState } = useContext(FieldsContext)

	const [transactionDate, setTransactionDate] = transactionDateState

	return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column md={3}>
            {title}
          </Form.Label>
          <Col sm={size? size : 9}>
            <Form.Control
              type="date"
              onChange={(e) => handleChange(e, controlId)}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "transactionDate":
				setTransactionDate(e.target.value)
				console.log(transactionDate)
				break
      default:
        console.log("No DateField Match")
    }
  }
}
