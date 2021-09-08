import { Suspense, lazy } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import NewsComponent from './views/main/news'
import SubMainComponent from './views/main/subMain'

const LoginComponent = lazy(() => import('./views/login/index'))
const RegisterComponent = lazy(() => import('./views/register/index'))
const MainComponent = lazy(() => import('./views/main/index'))
const ErrorComponent = lazy(() => import('./views/error/index'))

const ToLogin = () => (<Redirect to="/login" />)

const routes = [
  {
    path: '/',
    exact: true,
    needAuth: true,
    component: () => (
      <MainComponent>
        <SubMainComponent />
      </MainComponent>
    ),
  },
  {
    path: '/news',
    needAuth: true,
    component: () => (
      <MainComponent>
        <NewsComponent />
      </MainComponent>
    ),
  },
  {
    path: '/register',
    component: RegisterComponent,
  },
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '*',
    component: ErrorComponent,
  },
]


function App() {
  const auth = localStorage.getItem('AUTHENTICATION_TOKEN')
  
  return (
    <div className="h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(item => (
            <Route 
              path={item.path}
              component={
                item.needAuth 
                ? (auth ? item.component : ToLogin) 
                : item.component
              }
              exact={item.exact ? item.exact : false}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
