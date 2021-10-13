import { renderRoute } from '@/routes/tool'
import { Switch, Link } from 'react-router-dom'
import { MemberContext } from './context'
import { useEffect, useState } from 'react'
import { getUserName } from 'api'

const Member = (props) => {
    const [list, setList] = useState([])
    const [pageConfig, setPageConfig] = useState({
        total: 0,
        page: 0,
        size: 10,
        pageList: [],
    })
    useEffect(() => {
        getUserList()
    }, [pageConfig.page])

    const getUserList = async () => {
        let res = await getUserName({
            page: pageConfig.page,
            size: pageConfig.size,
            pageList: [],
        })
        let listData = res.data.data.content
        let totalNumber = res.data.data.total
        let pageList = Array.from(
            { length: Math.ceil(totalNumber / 10) },
            (_, i) => i + 1
        )
        setPageConfig((prev) => ({
            ...prev,
            total: totalNumber,
            pageList: pageList,
        }))
        setList(listData)
    }

    const changePage = (move) => {
        let page = pageConfig.page
        let list = pageConfig.pageList
        if (move === 'next') {
            page += 1
        } else if (move === 'prev') {
            page -= 1
        } else {
            page = move
        }

        if (page >= list[list.length - 1] || page < 0) {
            return
        }

        setPageConfig((prev) => ({ ...prev, page: page }))
    }
    return (
        <MemberContext.Provider value={{ list, changePage, pageConfig }}>
            <Switch>{renderRoute(props.route.routes, props.route.path)}</Switch>
        </MemberContext.Provider>
    )
}

export default Member
