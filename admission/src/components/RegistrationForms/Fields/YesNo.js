import React from "react"
import { Form, Row, Col } from "react-bootstrap"
import { useState } from "react"

import TextFieldInline from "./TextFieldInline"
import TextFieldCol from "./TextFieldCol"

export default function YesNo({ title, name, controlId }) {
  const [phyHandicapped, setPhyHandicapped] = useState(false)
  const [maharashtraPass, setMaharashtraPass] = useState(false)
  const [hasPAN, setHasPAN] = useState(false);

  return (
    <div>
      <Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column md={2}>
              {title}
            </Form.Label>
            <Col md={4} onChange={(e) => handleChange(e, controlId)}>
              <Form.Check type="radio" label="Yes" name={name} value={true} />
              <Form.Check type="radio" label="No" name={name} value={false} />
            </Col>
            <Col md={6}>
              {hasPAN === "true" && <TextFieldCol title="PAN no." placeholder="Enter PAN no." controlId="PANNo" />}
            </Col>
          </Form.Group>
        </fieldset>
      </Form.Group>
    </div>
  )

  function handleChange(e, controlId) {
    switch (controlId) {
      case "hasPAN":
        setHasPAN(e.target.value)
        break
      case "phyHandicapped":
        setPhyHandicapped(e.target.value)
        break
      case "maharashtraPass":
        setMaharashtraPass(e.target.value)
        break
      default:
        console.log("Does not match any Radios")
    }
  }
}
