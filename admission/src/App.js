import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/CSS/App.css";
import Auth from "./components/Authentication/Authenticate";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {FieldsProvider} from "./components/States/FieldStates";
import Dashboard from "./components/Dashboard/Dashboard";
import FEDSEForm from "./components/RegistrationForms/FEDSEForm";
import MyProfile from "./components/MyProfile/MyProfile";
import FeesDetails from "./components/Linked Pages/FeesDetails";
import StudentList from "./components/Linked Pages/StudentList/StudentList";
import StudentDetail from "./components/Linked Pages/StudentList/StudentDetail";

function App() {
  return (
    <Container fluid className="contentBox">
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />

        {/* Added FieldsProvider so that states can be accessed in FEDSE Form from FieldsContext */}
        <FieldsProvider>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/MyProfile" component={ MyProfile } account={true}/>
          <Route path="/FeesDetails" component={FeesDetails} account={true}/>
          <Route path="/fedseform" component={FEDSEForm} account={true}/>
          <Route path="/StudentList" component={StudentList} account={true}/>
          <Route path="/StudentDetail/:prn" component={StudentDetail} account={true}/>
        </FieldsProvider>

        </Switch>
      </Router>
    </Container>
  )
}

export default App
