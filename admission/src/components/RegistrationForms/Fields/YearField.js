import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useState, useContext } from "react";
import YearPicker from "react-year-picker";
import { FieldsContext } from "../../States/FieldStates";

export default function YearField({ title, controlId, isDisabled }) {
  const { yearOfLeavingState } = useContext(FieldsContext);

  const [yearOfLeaving, setYearOfLeaving] = yearOfLeavingState;

  function handleChange(date) {
    setYearOfLeaving(date);
  }

  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          {title}
        </Form.Label>
        <Col sm={9}>
          {isDisabled ? (
            <YearPicker
              selected={yearOfLeaving}
              onChange={handleChange}
              dateFormat="yyyy"
              disabled
            />
          ) : (
            <YearPicker
              selected={yearOfLeaving}
              onChange={handleChange}
              dateFormat="yyyy"
            />
          )}
        </Col>
      </Form.Group>
    </div>
  );
}
