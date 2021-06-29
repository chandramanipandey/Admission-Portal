import React from "react"
import { Col, Form } from "react-bootstrap"

export default function Category() {
  return (
    <div>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            Category
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="select">
              <option>Open</option>
              <option>SC</option>
              <option>ST</option>
              <option>NT</option>
              <option>NT1</option>
              <option>NT2</option>
              <option>VJ</option>
              <option>DT</option>
              <option>OBC</option>
              <option>SBC</option>
              <option>EWS</option>
              <option>TFWS</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  )
}
