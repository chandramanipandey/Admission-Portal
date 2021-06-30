import React from "react"
import { Col, Form } from "react-bootstrap"
import { useState } from "react"

export default function DateField({ title, controlId }) {
  const [dob, setDob] = useState("")
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            {title}
          </Form.Label>
          <Col sm={10}>
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
