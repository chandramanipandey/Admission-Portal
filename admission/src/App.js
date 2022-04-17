import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/CSS/App.css"
import Auth from "./components/Authentication/Authenticate"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import FEForm from "./components/RegistrationForms/FEForm"
import DSEForm from "./components/RegistrationForms/DSEForm"

function App() {
  return (
    <Container fluid className="contentBox">
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/feform" component={FEForm} />
          <Route path="/dseform" component={DSEForm} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
