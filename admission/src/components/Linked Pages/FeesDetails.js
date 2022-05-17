import { Button, Form, Modal } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import TextField from "../RegistrationForms/Fields/TextField";
import NumField from "../RegistrationForms/Fields/NumField";
import DateField from "../RegistrationForms/Fields/DateField";
import TextFieldDisabled from "../RegistrationForms/Fields/TextFieldDisabled";

import NavigationBar from "../Dashboard/NavigationBar";
import FileInput from "../RegistrationForms/Fields/FileInput";
import DateFieldInline from "../RegistrationForms/Fields/DateFieldInline";

import { Details } from "../Others/keywords";

import { FieldsContext } from "../States/FieldStates";
import { adduserdata } from "../Firebase/addtofirebase";
import { getAuth } from "firebase/auth";
import { addpaymentreceipt } from "../Firebase/addtransactionsliptofirebase";
import { Link, useHistory } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { Table } from "react-bootstrap";
import { receivependingfeesstatus } from "../Firebase/ReceivePendingFeesStatus";

export default function FeesDetails() {
  const auth = getAuth();
  const history = useHistory();
  const [userauth, setuserauth] = useState(undefined)
  const [acceptedfeesdata, setacceptedfeesdata] = useState(null);
  const {
    senderBankNameState,
    senderAcNameState,
    senderAcNoState,
    senderBankIFSCState,
    transactionIdState,
    transactionDateState,
    transactionReceiptState,
  } = useContext(FieldsContext);
  const BANK = Details.BANK;

  const [transactionId, setTransactionId] = transactionIdState;
  const [senderAcName, setSenderAcName] = senderAcNameState;
  const [senderBankName, setSenderBankName] = senderBankNameState;
  const [senderBankIFSC, setSenderBankIFSC] = senderBankIFSCState;
  const [transactionDate, setTransactionDate] = transactionDateState;
  const [transactionReceipt, setTransactionReceipt] = transactionReceiptState;
  const [senderAcNo, setSenderAcNo] = senderAcNoState;

  const TransactionData = {
    transactionId: transactionIdState[0],
    senderAcName: senderAcNameState[0],
    senderBankName: senderBankNameState[0],
    senderBankIFSC: senderBankIFSCState[0],
    transactionDate: transactionDateState[0],
    transactionReceipt: transactionReceiptState[0],
    senderAcNo: senderAcNoState[0],
  };

  useEffect(() => {
    try {

      auth.onAuthStateChanged((authobj) => {
        if (authobj) {
          setuserauth(authobj.uid)
        }
        else {
          history.push('/', "You are not authorised to visit this website or you have recently logged out successfully, if you are an authorised user please login to continue");
        }
      }
      );
      receiveacceptedfeesstatus();
    }
    catch (e) {
      console.log(e);
    }
  }, [])
  async function receiveacceptedfeesstatus() {
    const response = await receivependingfeesstatus(auth.currentUser.uid);
    setacceptedfeesdata(response);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const receiptlink = await addpaymentreceipt(
      auth.currentUser.uid,
      TransactionData.transactionReceipt,
      TransactionData
    );
    TransactionData.Receipt = receiptlink[0];
    TransactionData.Timestamp = receiptlink[1];

    delete TransactionData.transactionReceipt;

    await adduserdata(
      TransactionData,
      auth.currentUser.uid,
      "Fees_Paid_Pending"
    );
  }

  return (
    <>
      <NavigationBar userType="Admin" userName="User Name" />

      <div className="row align-items-md-stretch w-100">
        <div className="col-md">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h1>Fees Corner</h1>
            <p>Enter your Fees Details.</p>
          </div>
        </div>
      </div>

      <hr />

      <Form onSubmit={handleSubmit}>
        <TextFieldDisabled
          title="College Bank Name"
          placeholder={BANK.COLLEGE_BANK}
        />
        <TextFieldDisabled
          title="College Bank Account Name"
          placeholder={BANK.COLLEGE_BANK_AC_NAME}
        />
        <TextFieldDisabled
          title="College Bank Account No"
          placeholder={BANK.COLLEGE_BANK_AC_NO}
        />
        <TextFieldDisabled
          title="College Bank IFSC "
          placeholder={BANK.COLLEGE_BANK_IFSC}
        />

        <TextField
          title="Sender's Bank Name"
          placeholder="For eg: Bank of India"
          controlId="senderBankName"
        />

        <TextField
          title="Sender's Bank Account Name"
          placeholder="For eg: John Smith"
          controlId="senderAcName"
        />

        <NumField
          title="Sender's Bank Account Number"
          maxlength="16"
          controlId="senderAcNo"
          placeholder="Enter Bank Account Number"
        />

        <TextField
          title="Sender's Bank IFSC"
          placeholder="Enter Bank IFSC Code"
          controlId="senderBankIFSC"
        />

        <TextField
          title="Transaction ID"
          placeholder="Enter Transaction ID"
          controlId="transactionId"
        />

        <DateFieldInline title="Transaction Date" controlId="transactionDate" />

        <FileInput
          title="Upload Transaction receipt"
          controlId="transactionReceipt"
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <div className="pb-3"></div>
      </Form>
      {acceptedfeesdata != null ?<>
      <div style={{ paddingTop: '40px' }} className="row align-items-md-stretch w-100">
        <div className="col-md">
          <div style={{}} className=" p-5 text-white bg-dark rounded-3">
            <h1>Accepted Fees Details</h1>
          </div>
        </div>
      </div>
      <Table className="project-list-table table-nowrap align-middle table-hover responsive-sm">
        <thead>
          <tr>
            {/* UID TransactionID */}
            <th>Transaction ID</th>
            <th>Status</th>
            <th>Accepted By</th>

          </tr>
        </thead>
          <tbody>
            <tr>
              <td>{acceptedfeesdata.transactionid}</td>
              <td>{acceptedfeesdata.status}</td>
              <td>{acceptedfeesdata.Acceptedby}</td>
            </tr>
          </tbody>
          
      </Table>
      <div style={{ paddingBottom: '100px' }}></div></>
      : null}
    </>

  );
}
