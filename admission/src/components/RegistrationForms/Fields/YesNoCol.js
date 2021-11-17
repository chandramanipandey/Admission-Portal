import React from "react"
import { Form, Row, Col } from "react-bootstrap"
import { useState } from "react"

export default function YesNo({ title, name, controlId }) {
  const [maharashtraPass, setMaharashtraPass] = useState("")

  return (
    <div>
      <Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={4}>
              {title}
            </Form.Label>
            
            <Col sm={8} onChange={(e) => handleChange(e, controlId)}>
              <Form.Check type="radio" label="Yes" name={name} value="Yes" />
              <Form.Check type="radio" label="No" name={name} value="No" />
            </Col>
          </Form.Group>
        </fieldset>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "maharashtraPass":
        setMaharashtraPass(e.target.value)
        break
      default:
        console.log("Does not match any Radios")
    }
  }
}