import { useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { doAuth } from 'api'
import Menu from '@/views/main/menu'

const Main = (props) => {
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
        <main className="flex flex-col h-full">
            <header className="flex justify-between items-center w-full h-11 shadow border-b-2 border-black border-opacity-40 px-4">
                <div className="logo">
                    <p className="text-2xl">LOGO</p>
                </div>
                <div className="flex linkList"></div>
            </header>
            <main className="h-full flex">
                <aside className="flex h-full border-r-2 border-black border-black border-opacity-40 p-6">
                    <Menu list={props.route.routes} />
                </aside>
                <section className="flex">
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
                </section>
            </main>
        </main>
    )
}

export default Main
