import { Suspense } from 'react'
import './App.css'
import { Switch, Redirect } from 'react-router-dom'
import { renderRoute } from '@/routes/tool'
import routes from '@/routes'

const ToLogin = () => <Redirect to="/login" />

function App() {
    const auth = localStorage.getItem('AUTHENTICATION_TOKEN')

    return (
        <div className="h-screen">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>{renderRoute(routes)}</Switch>
            </Suspense>
        </div>
    )
}

export default App
