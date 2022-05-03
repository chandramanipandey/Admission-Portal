import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/CSS/App.css"
import Auth from "./components/Authentication/Authenticate"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import FEDSEForm from "./components/RegistrationForms/FEDSEForm"
import {FieldsProvider} from "./components/States/FieldStates"
import MyProfile from "./components/MyProfile/MyProfile"
import FeesDetails from "./components/Dashboard/components/FeesDetails"
import AdminView from "./components/Dashboard/components/AdminView"
import StudentView from "./components/Dashboard/components/StudentView"

function App() {
  return (
    <Container fluid className="contentBox">
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />

        {/* Added FieldsProvider so that states can be accessed in FEDSE Form from FieldsContext */}
        <FieldsProvider>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/MyProfile" component={ MyProfile } />
          <Route path="/FeesDetails" component={FeesDetails} />
          <Route path="/fedseform" component={FEDSEForm} />
          <Route path="/AdminView" component={AdminView} />
          <Route path="/StudentView" component={StudentView} />
        </FieldsProvider>

        </Switch>
      </Router>
    </Container>
  )
}

export default App
