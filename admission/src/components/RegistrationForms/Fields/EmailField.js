import React from "react"
import { Col, Form, Row } from "react-bootstrap"

export default function EmailFieldInline({ controlId }) {
  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            placeholder="for example, Example@mail.com"
            controlId={controlId}
          />
        </Col>
      </Form.Group>
    </div>
  )
}
