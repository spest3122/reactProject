import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { debounce } from 'lodash'
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
    const scrollRef = useRef(null)

    useEffect(() => {
        getUserList()
    }, [pageConfig.page])

    // useLayoutEffect(() => {
    //     scrollRef.current.scrollTop = 156
    // }, [list])

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
        setList((prev) => [...prev, ...listData])
    }
    const callNextUserList = debounce((e) => {
        if (
            e.target.scrollTop > 150 &&
            pageConfig.page !== Math.ceil(pageConfig.total / 10) - 1
        ) {
            let page = pageConfig.page + 1
            setPageConfig((prev) => ({ ...prev, page: page }))
        }
    }, 300)
    const scrollHandle = (e) => {
        callNextUserList(e)
    }

    return (
        <main className="ml-2 mt-4 h-full">
            <h1>會員管理(表格式)</h1>
            <section
                className="mt-4 pl-4 pr-4 h-5/6 overflow-y-auto hiddenScroll"
                ref={scrollRef}
                onScroll={scrollHandle}
            >
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
                            <div className="pl-4 pr-4 w-px flex items-center">
                                |
                            </div>
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
