import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function TextFieldDisabled({title, placeholder, size}) {

	return (
		<div>
			<Form.Group>
        <Form.Row>
          <Col md={2}>
            <Form.Label>{title}</Form.Label>
          </Col>
          <Col md={size? size : 10}>
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
