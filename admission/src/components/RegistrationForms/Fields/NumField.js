import React from "react"
import { Col } from "react-bootstrap"
import Form from "react-bootstrap/Form"
export default function NumField({ title, maxlength, controlId, placeholder }) {
  return (
    <div>
      <Form.Group controlId={controlId}>
        <Form.Row>
          <Form.Label column sm={2}>
            {title}
          </Form.Label>
          <Col sm={10}>
            <Form.Control placeholder={placeholder} maxlength={maxlength} />
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )
}
