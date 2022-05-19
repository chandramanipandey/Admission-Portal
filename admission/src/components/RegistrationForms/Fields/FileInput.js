import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FieldsContext } from "../../States/FieldStates";

export default function FileInput({ title, controlId }) {
  const {
    transactionReceiptState,
    SSCMarksheetState,
    HSCMarksheetState,
    CETMarksheetState,
    JEEMainsMarksheetState,
    JEEAdvMarksheetState,
    StudentPhotoState,
  } = useContext(FieldsContext);

  const [transactionReceipt, setTransactionReceipt] = transactionReceiptState;
  const [SSCMarksheet, setSSCMarksheet] = SSCMarksheetState;
  const [HSCMarksheet, setHSCMarksheet] = HSCMarksheetState;
  const [CETMarksheet, setCETMarksheet] = CETMarksheetState;
  const [JEEMainsMarksheet, setJEEMainsMarksheet] = JEEMainsMarksheetState;
  const [JEEAdvMarksheet, setJEEAdvMarksheet] = JEEAdvMarksheetState;
  const [studentImage, setstudentImage] = StudentPhotoState;

  return (
    <>
      <Form.Group as={Row} controlId={controlId} className="mb-3">
        <Form.Label as={Col} md={2}>
          {title}
        </Form.Label>
        <Col md>
          <Form.Control
            type="file"
            onChange={(e) => handleChange(e, controlId)}
          />
        </Col>
      </Form.Group>
    </>
  );

  function handleChange(e, controlId) {
    switch (controlId) {
      case "transactionReceipt":
        setTransactionReceipt(e.target.files[0]);
        console.log(transactionReceipt);
        break;
      case "SSCMarksheetFile":
        setSSCMarksheet(e.target.files[0]);
        console.log(SSCMarksheet);
        break;
      case "HSCMarksheetFile":
        setHSCMarksheet(e.target.files[0]);
        console.log(HSCMarksheet);
        break;
      case "CETMarksheetFile":
        setCETMarksheet(e.target.files[0]);
        console.log(CETMarksheet);
        break;
      case "JEEMainsMarksheetFile":
        setJEEMainsMarksheet(e.target.files[0]);
        console.log(JEEMainsMarksheet);
        break;
      case "JEEAdvMarksheetFile":
        setJEEAdvMarksheet(e.target.files[0]);
        console.log(JEEAdvMarksheet);
        break;
      case "StudentImageFile":
        setstudentImage(e.target.files[0]);
        console.log(studentImage);
        break;
      default:
        console.log("Does not match any file upload");
    }
  }
}
