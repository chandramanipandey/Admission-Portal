import React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { useState } from "react"
import YearPicker from "react-year-picker"

export default function YearField({ title, controlId }) {
  const [yearOfLeaving, setYearOfLeaving] = useState(new Date())

  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {title}
        </Form.Label>
        <Col sm={10}>
          <YearPicker onChange={(e) => setYearOfLeaving(e)} />
        </Col>
      </Form.Group>
    </div>
  )
}
