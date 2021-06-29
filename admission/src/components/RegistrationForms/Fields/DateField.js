import React from "react"
import { Col, Form } from "react-bootstrap"

export default function DateField({ title, name }) {
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            {title}
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="date" name={name} />
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )
}
