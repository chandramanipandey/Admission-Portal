import { useState } from "react";
import { Table, Badge } from "react-bootstrap";
import useAsync from "../../Others/useAsync";
import { useHistory } from "react-router-dom";

export default function StudentList(props) {

    const history = useHistory();
    const [studentData, setStudentData] = useState(props.studentData);
    let [isLoading] = useAsync(load, true);

    async function load() {
        return Promise.allSettled([getStudents()]);
    }

    function getStudents() {
        setStudentData(props.studentData);
    }

    function handleClick(prn) {
        history.push(`/StudentDetail/${prn}`);
    }

    return (
    <>
        {isLoading ? (
            "Loading")
            :
            (
      <Table className="project-list-table table-nowrap align-middle table-hover responsive-sm">
      <thead>
        <tr>
          <th>prn</th>
          <th>name</th>
          <th>department</th>
          <th>class</th>
          <th>rollno</th>
          <th>dob</th>
          <th>category</th>
          <th>feesPaid</th>
          <th>pendingFees</th>
          <th>totalFees</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((st, _key) => (
          <tr key={st.prn} onClick={()=> handleClick(st.prn)} style={{cursor : "pointer"}}>
            <td>{st.prn}</td>
            <td>{st.name}</td>
            <td>{st.department}</td>
            <td>{st.class}</td>
            <td>{st.rollno}</td>
            <td>{st.dob}</td>
            <td>{st.category}</td>
            <td><Badge pill style={{background : "yellow", color: "black"}}>{st.feesPaid}</Badge></td>
            <td>{st.pendingFees}</td>
            <td>{st.totalFees}</td>
          </tr>
        ))}
      </tbody>
    </Table>)}
    </>

    )}