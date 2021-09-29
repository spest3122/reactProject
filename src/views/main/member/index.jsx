import { renderRoute } from '@/routes/tool'
import { Switch } from 'react-router-dom'

const Member = (props) => {
    return <Switch>{renderRoute(props.route.routes, props.route.path)}</Switch>
}

export default Member
