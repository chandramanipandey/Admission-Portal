import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import { FieldsContext } from "../../States/FieldStates"

export default function DateField({ title, controlId }) {
  // const [dob, setDob] = useState("")

  const {dobState} = useContext(FieldsContext)

  const [dob, setDob] = dobState

  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column md={4}>
            {title}
          </Form.Label>
          <Col sm={8}>
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
      case "dob":
        setDob(e.target.value)
        break
      default:
        console.log("No DateField Match")
    }
  }
}
