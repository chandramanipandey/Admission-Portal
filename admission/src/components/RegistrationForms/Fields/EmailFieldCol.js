import React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { useState } from "react"

export default function EmailFieldInline({ controlId }) {
  const [permanentEmail, setPermanentEmail] = useState("")
  const [guardianEmail, setGuardianEmail] = useState("")

  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={4}>
          Email
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="email"
            placeholder="for example, Example@mail.com"
            controlId={controlId}
            onChange={(e) => handleChange(e, controlId)}
          />
        </Col>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "permanentEmail":
        setPermanentEmail(e.target.value)
        console.log(permanentEmail)
        break
      case "guardianEmail":
        setGuardianEmail(e.target.value)
        break
      default:
        console.log("No Match for Email")
        break
    }
  }
}
