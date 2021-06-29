import React from "react"
import { Col, Form } from "react-bootstrap"

export default function TextFieldInline({ title, placeholder, controlId }) {
  return (
    <div>
      <Form.Group controlId={controlId}>
        <Form.Row>
          <Form.Label column sm={2}>
            {title}
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder={placeholder} />
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )
}
