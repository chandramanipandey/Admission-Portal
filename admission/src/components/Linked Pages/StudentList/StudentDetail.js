import { useParams } from 'react-router';

import NavigationBar from "../../Dashboard/NavigationBar";

export default function StudentDetail(props) {
  const { prn } = useParams();

  return (
      <>
      <NavigationBar userType="Admin" userName="User Name" />
      <div className="row align-items-md-stretch w-100">
        <div className="col-md">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h1>Students List</h1>
          </div>
        </div>
      </div>
      <div>
      <h2>id : {prn}</h2>
      </div>
      </>
  )
}