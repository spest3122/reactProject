import React, { Suspense } from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
const LoginComponent = React.lazy(() => import('./views/login/index'))
const RegisterComponent = React.lazy(() => import('./views/register/index'))
const MainComponent = React.lazy(() => import('./views/main/index'))
const ErrorComponent = React.lazy(() => import('./views/error/index'))


function App() {
  return (
    <div className="h-screen">
      <ul>
        <li>
          <Link to="/login"></Link>
        </li>
        <li>
          <Link to="/register"></Link>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route 
            path="/login" 
            component={LoginComponent} 
          />
          <Route 
            path="/register" 
            component={RegisterComponent} 
          />
          <Route
            path="/"
            component={MainComponent} 
          />
          <Route 
            path="*" 
            component={ErrorComponent} 
          />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
