import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserName } from 'api'

const Column = () => {
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
        <main className="ml-4 mr-4 mt-4">
            <h1>會員管理(列表式)</h1>
            <table className="w-full text-left mt-3">
                <thead className="border-b-2 border-black">
                    <tr>
                        <th>姓名</th>
                        <th>帳號</th>
                        <th>角色</th>
                        <th>功能</th>
                    </tr>
                </thead>
                <tbody className="mt-12">
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.role}</td>
                            <td>
                                <Link to="/member/detail">詳情</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex flex-col items-center mt-4">
                <ul className="flex">
                    <li
                        className="mr-2 leading-5"
                        onClick={() => changePage('prev')}
                    >
                        {'<'}
                    </li>
                    {pageConfig.pageList.map((item, index) => (
                        <li
                            className={`pl-1 leading-5 pr-1 ${
                                pageConfig.page === index
                                    ? 'text-2xl text-blue-500'
                                    : ''
                            }`}
                            key={'page' + index}
                            onClick={() => changePage(index)}
                        >
                            {item}
                        </li>
                    ))}
                    <li
                        className="leading-5 ml-2"
                        onClick={() => changePage('next')}
                    >
                        {'>'}
                    </li>
                </ul>
                <p>{`共 ${pageConfig.total} 筆`}</p>
            </div>
        </main>
    )
}

export default Column
