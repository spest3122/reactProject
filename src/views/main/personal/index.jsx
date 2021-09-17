import { renderRoute } from '@/routes/tool'
import { Switch } from 'react-router-dom'

const Personal = (props) => {
    return (
        <div>
            <Switch>{renderRoute(props.route.routes, props.route.path)}</Switch>
        </div>
    )
}

export default Personal
