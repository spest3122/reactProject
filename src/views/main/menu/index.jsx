import { Link } from 'react-router-dom'
const Menu = ({ list }) => {
    const renderSideBar = (routes) => {
        return (
            <ul className="flex flex-col ml-2">
                {routes.map((item) => {
                    let nestRoutesExist = item?.routes
                    return (
                        <li className="p-1" key={item.path}>
                            {item?.icon ? item.icon : null}
                            {nestRoutesExist ? item.name + '▼' : ''}
                            {nestRoutesExist ? (
                                renderSideBar(item.routes)
                            ) : (
                                <Link to={item.path}>{item.name}</Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        )
    }
    return renderSideBar(list)
}

export default Menu
