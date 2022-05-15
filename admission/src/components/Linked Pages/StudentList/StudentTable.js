import { useState, useEffect } from "react";
import { Table, Badge } from "react-bootstrap";
import useAsync from "../../Others/useAsync";
import { useHistory } from "react-router-dom";

export default function StudentList(props) {

  const history = useHistory();
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoadig] = useState(false);

  console.log('first', props.studentData);

  useEffect(() => {
    setStudentData(props.studentData);
  },[]);

  setIsLoadig(true);

    function handleClick(prn) {
        history.push(`/StudentDetail/${prn}`);
    };

    return (
    <>
    {console.log('nice',isLoading)}
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
        {console.log('gg', studentData)}
            {Object.keys(studentData).map((key, value) => {
            var data = studentData[key];
            return(
          <tr key={data.prn} onClick={()=> handleClick(data.prn)} style={{cursor : "pointer"}}>
            <td>{data.prn}</td>
            <td>{value}</td>
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