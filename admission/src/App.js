import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/CSS/App.css";
import Auth from "./components/Authentication/Authenticate";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {FieldsProvider} from "./components/States/FieldStates";
import NavigationBar from "./components/Dashboard/NavigationBar";
import Dashboard from "./components/Dashboard/Dashboard";
import FEDSEForm from "./components/RegistrationForms/FEDSEForm";
import MyProfile from "./components/MyProfile/MyProfile";
import FeesDetails from "./components/Linked Pages/FeesDetails";
import StudentList from "./components/Linked Pages/StudentList/StudentList";
import StudentFees from "./components/Linked Pages/StudentFees";
import FeeStructure from "./components/Linked Pages/FeeStructure";
import StudentDetail from "./components/Linked Pages/StudentList/StudentDetail";
import AdminView from "./components/Dashboard/components/AdminView"
import StudentView from "./components/Dashboard/components/StudentView"
import Aboutus from "./components/Dashboard/Aboutus";
import NoticeGeneration from "./components/Linked Pages/NoticeGeneration";
import Page404 from "./components/Linked Pages/Page404";

function App() {
  return (
    <Container fluid>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />

        {/* Added FieldsProvider so that states can be accessed in FEDSE Form from FieldsContext */}

        <FieldsProvider>
        {/* <NavigationBar /> */}
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
          <Route path="/FeeStructure" component={FeeStructure} account={true} />
          <Route path="/GenerateNotice" component={NoticeGeneration} account={true} />

          {/* <Route path='/404' component={Page404} />
          <Redirect from='*' to='/404' /> */}
        </FieldsProvider>

        </Switch>
      </Router>
    </Container>
  )
}

export default App
