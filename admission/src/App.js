import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/CSS/App.css"
import Auth from "./components/Authentication/Authenticate"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import FEDSEForm from "./components/RegistrationForms/FEDSEForm"
import {FieldsProvider} from "./components/States/FieldStates"
import FeesDetails from "./components/Dashboard/components/FeesDetails"

function App() {
  return (
    <Container fluid className="contentBox">
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/Dashboard" component={Dashboard} />
          

        {/* Added FieldsProvider so that states can be accessed in FEDSE Form from FieldsContext */}
        <FieldsProvider>
          <Route path="/FeesDetails" component={FeesDetails} />
          <Route path="/fedseform" component={FEDSEForm} />
        </FieldsProvider>

        </Switch>
      </Router>
    </Container>
  )
}

export default App
