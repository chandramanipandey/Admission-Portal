import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/CSS/App.css";
import Auth from "./components/Authentication/Authenticate";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {FieldsProvider} from "./components/States/FieldStates";
import Dashboard from "./components/Dashboard/Dashboard";
import FEDSEForm from "./components/RegistrationForms/FEDSEForm";
import MyProfile from "./components/MyProfile/MyProfile";
import FeesDetails from "./components/Linked Pages/FeesDetails";
import StudentList from "./components/Linked Pages/StudentList/StudentList";
import StudentFees from "./components/Linked Pages/StudentFees";
import StudentDetail from "./components/Linked Pages/StudentList/StudentDetail";
import AdminView from "./components/Dashboard/components/AdminView"
import StudentView from "./components/Dashboard/components/StudentView"
import Aboutus from "./components/Dashboard/Aboutus";

function App() {
  return (
    <Container fluid className="contentBox">
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />

        {/* Added FieldsProvider so that states can be accessed in FEDSE Form from FieldsContext */}
        <FieldsProvider>
          <Route path="/Dashboard" component={Dashboard} account={true}/>
          <Route path="/MyProfile" component={ MyProfile } account={true}/>
          <Route path="/FeesDetails" component={FeesDetails} account={true}/>
          <Route path="/fedseform" component={FEDSEForm} account={true}/>
          <Route path="/StudentList" component={StudentList} account={true}/>
          <Route path="/StudentDetail/:prn" component={StudentDetail} account={true}/>
          <Route path="/AdminView" component={AdminView} account={true}/>
          <Route path="/StudentView" component={StudentView} account={true}/>
          <Route path="/Aboutus" component={Aboutus} account={true}/>
          <Route path="/StudentFees" component={StudentFees} account={true} />

          {/* <Route path='/404' component={Auth} />
          <Redirect from='*' to='/404' /> */}
        </FieldsProvider>

        </Switch>
      </Router>
    </Container>
  )
}

export default App
