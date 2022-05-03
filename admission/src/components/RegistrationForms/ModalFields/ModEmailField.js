import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function ModEmailField({title, controlId}) {
	

	return (
		<div>
			<Form.Group className="mb-3">
				<Form.Label>{title}</Form.Label>
				<Form.Control
					type="email"
					placeholder="name@example.com"
					autoFocus
					onChange={(e) => handleChange(e, controlId)}
				/>
			</Form.Group>
		</div>
	)

	function handleChange(e) {

	}
}
