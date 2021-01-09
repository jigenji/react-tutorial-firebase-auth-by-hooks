import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Container className="d-flax align-item justify-content-center" style={{minHeight:"100vh"}}>
      <div className="w-100" style={{maxWidth:"400px"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;

