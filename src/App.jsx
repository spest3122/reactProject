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
                    {routes.map((route) => (
                        <Route
                            path={route.path}
                            render={
                                (props) => (
                                    <route.component {...props} route={route} />
                                )
                                // item.needAuth
                                //     ? auth
                                //         ? item.component
                                //         : ToLogin
                                //     : item.component
                            }
                            exact={route.exact ? route.exact : false}
                        />
                    ))}
                </Switch>
            </Suspense>
        </div>
    )
}

export default App
