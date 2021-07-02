import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from "./components/Authentication/Authenticate"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import FEForm from "./components/RegistrationForms/FEForm"

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/feform" component={FEForm} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
