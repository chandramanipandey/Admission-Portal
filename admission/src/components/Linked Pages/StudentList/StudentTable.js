import { useState, useEffect } from "react";
import { Table, Badge } from "react-bootstrap";
import useAsync from "../../Others/useAsync";
import { useHistory } from "react-router-dom";

export default function StudentList(props) {

  const history = useHistory();
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoadig] = useState(false);

  console.log('student', props.studentData);
  console.log('admission', props.admissionData);

  useEffect(() => {
    setStudentData(props.studentData);
    setIsLoadig(false)
  },[isLoading]);

    function handleClick(prn) {
        history.push(`/StudentDetail/${prn}`);
    };

    return (
    <>
        {isLoading ? (
            "Loading")
            :
            (
      <Table className="project-list-table table-nowrap align-middle table-hover responsive-sm">
      <thead>
        <tr>
          <th>Prn</th>
          <th>Email</th>
          <th>Name</th>
          <th>department</th>
          <th>class</th>
          <th>dob</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
            {Object.keys(studentData).map((key, value) => {
            var data = studentData[key];
            return(
          <tr key={data.prn} onClick={()=> handleClick(data.prn)} style={{cursor : "pointer"}}>
            <td>{data.prn}</td>
            <td>{data.collegeEmail}</td>
            <td>{data.studentName}</td>
            <td>{data.department}</td>
            <td>{data.class}</td>
            <td>{data.dob}</td>
            <td>{data.studentMobile}</td>
          </tr>)}
        )}
      </tbody>
    </Table>)}
    </>

    )}