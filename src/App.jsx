import React, { Suspense } from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import NewsComponent from './views/main/news'
import SubMainComponent from './views/main/subMain'

const LoginComponent = React.lazy(() => import('./views/login/index'))
const RegisterComponent = React.lazy(() => import('./views/register/index'))
const MainComponent = React.lazy(() => import('./views/main/index'))
const ErrorComponent = React.lazy(() => import('./views/error/index'))


function App() {
  return (
    <div className="h-screen">
      <ul>
        <li>
          <Link to="/news"></Link>
        </li>
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
            exact
            path="/"
            component={() => 
              <MainComponent>
                <SubMainComponent />
              </MainComponent>
            }
          />
          <Route 
            path="/news"
            component={() => 
              <MainComponent>
                <NewsComponent />
              </MainComponent>
            }
          />
          <Route 
            path="/login" 
            component={LoginComponent} 
          />
          <Route 
            path="/register" 
            component={RegisterComponent} 
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
