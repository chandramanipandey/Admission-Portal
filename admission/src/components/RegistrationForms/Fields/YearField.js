import React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { useState } from "react"
import DatePicker from "react-datepicker"

export default function YearField({ title, controlId }) {
  const [yearOfLeaving, setYearOfLeaving] = useState(new Date())

  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {title}
        </Form.Label>
        <Col sm={10}>
          <DatePicker
      selected={yearOfLeaving}
      onChange={(date) => setYearOfLeaving(date)}
      showYearPicker
      dateFormat="yyyy"
    />
        </Col>
      </Form.Group>
    </div>
  )
}
