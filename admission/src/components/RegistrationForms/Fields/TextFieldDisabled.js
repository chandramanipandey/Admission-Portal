import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function TextFieldDisabled({title, placeholder}) {

	return (
		<div>
			<Form.Group>
        <Form.Row>
          <Col md={2}>
            <Form.Label>{title}</Form.Label>
          </Col>
          <Col md={10}>
            <Form.Control
              placeholder={placeholder}
							disabled
            />
          </Col>
        </Form.Row>
      </Form.Group>
		</div>
	)
}
