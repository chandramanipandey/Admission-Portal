import React from "react"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function GenderField() {
  return (
    <div>
      <Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Gender
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Male"
                name="genderRadio"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Female"
                name="genderRadio"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </fieldset>
      </Form.Group>
    </div>
  )
}
