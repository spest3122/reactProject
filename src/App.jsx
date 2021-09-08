import { Suspense } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from '@/routes'

const ToLogin = () => <Redirect to="/login" />

function App() {
    const auth = localStorage.getItem('AUTHENTICATION_TOKEN')

    return (
        <div className="h-screen">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes.map((item) => (
                        <Route
                            path={item.path}
                            component={
                                item.needAuth
                                    ? auth
                                        ? item.component
                                        : ToLogin
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
