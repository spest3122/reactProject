import { useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { doAuth } from 'api'

const Main = (props) => {
    console.log(props)
    // useEffect(() => {
    //     async function callAuthWhenRefresh() {
    //         let res = await doAuth()
    //         if (!res.data.success) {
    //             localStorage.clear()
    //             return <Redirect to="/login" />
    //         }
    //     }
    //     callAuthWhenRefresh()
    // }, [])
    return (
        <main className="flex flex-col">
            <header className="flex justify-between items-center w-full h-11 shadow border-b-2 border-black border-opacity-40 px-4">
                <div className="logo">
                    <p className="text-2xl">LOGO</p>
                </div>
                <div className="flex linkList">
                    <ul className="flex">
                        <li className="mr-5 text-xs text-blue-500">
                            <Link to={'/'}>首頁</Link>
                        </li>
                        <li className="text-xs text-blue-500">
                            <Link to={'/member'}>會員管理</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <aside className="flex">
                <ul className="flex flex-col">
                    {props.route.routes.map((item, index) => {
                        return (
                            <li className="text-blue-500">
                                <Link to={item.path}>{item.path}</Link>
                            </li>
                        )
                    })}
                </ul>
            </aside>
            <main className="w-full h-full p-4">
                <Switch>
                    {props.route.routes.map((item, index) => {
                        return (
                            <Route
                                path={item.path}
                                render={(props) => (
                                    <item.component {...props} />
                                )}
                                exact={item.exact ? item.exact : false}
                            />
                        )
                    })}
                </Switch>
            </main>
        </main>
    )
}

export default Main
