import React from "react"
import { Form } from "react-bootstrap"

export default function YearField({ title, controlId }) {
  return (
    <div>
      <Form.Group>
        <Form.Label>{title}</Form.Label>
        <Form.Control type="date" />
        {/* Change to year */}
      </Form.Group>
    </div>
  )
}
