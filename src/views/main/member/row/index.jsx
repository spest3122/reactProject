import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserName } from 'api'
import './styles.css'

const Row = () => {
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
    return (
        <main className="ml-2 mt-4 h-full">
            <h1>會員管理(表格式)</h1>
            <section className="mt-4 pl-4 pr-4 h-full overflow-y-auto hiddenScroll">
                {list.map((item, index) => (
                    <div
                        key={'row' + index}
                        className="flex border-2 border-black p-5 rounded-lg justify-between leading-6 mb-6"
                    >
                        <div className="flex">
                            <p>姓名 : {item.name}</p>
                            <div className="pl-4 pr-4 w-px flex items-center">
                                |
                            </div>
                            <p>帳號 : {item.username}</p>
                            <siv className="pl-4 pr-4 w-px flex items-center">
                                |
                            </siv>
                            <p>角色 : {item.role}</p>
                        </div>
                        <div>
                            <Link to="/member/detail">詳情</Link>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Row
