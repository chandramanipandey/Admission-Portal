import React from "react"
import { Form, Row, Col } from "react-bootstrap"

export default function YesNo({ title, name }) {
  return (
    <div>
      <Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              {title}
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Yes"
                name={name}
                // id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="No"
                name={name}
                // id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </fieldset>
      </Form.Group>
    </div>
  )
}
