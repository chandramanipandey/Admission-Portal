import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useState, useContext } from "react";
import YearPicker from "react-year-picker";
import { FieldsContext } from "../../States/FieldStates";

export default function YearField({ title, controlId, isDisabled }) {
  const { yearOfLeavingState, financialYearState } = useContext(FieldsContext);

  const [yearOfLeaving, setYearOfLeaving] = yearOfLeavingState;
  const [ financialYear, setFinancialYear ] = financialYearState;

  return (
    <div>
      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          {title}
        </Form.Label>
        <Col sm={9}>
          {isDisabled ? (
            <YearPicker
              selected={controlId}
              onChange={(e) => handleChange(e, controlId)}
              dateFormat="yyyy"
              disabled
            />
          ) : (
            <YearPicker
              selected={controlId}
              onChange={(e) => handleChange(e, controlId)}
              dateFormat="yyyy"
            />
          )}
        </Col>
      </Form.Group>
    </div>
  );

  function handleChange(e, controlId) {
    switch (controlId) {
      case "yearOfLeaving":
        setYearOfLeaving(e.target.value);
        break
        case "financialYear":
          setFinancialYear(e.target.value);
        break
      default:
        console.log("Does not match any case")
    }
  }
}
