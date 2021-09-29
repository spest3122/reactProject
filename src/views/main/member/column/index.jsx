import { useEffect, useState } from 'react'
import { getUserName } from 'api'

const Column = () => {
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        async function getUserList() {
            let res = await getUserName({ page: 0, size: 10 })
            let listData = res.data.data.content
            let totalNumber = res.data.data.total
            setTotal(totalNumber)
            setList(listData)
        }
        getUserList()
    }, [])

    return (
        <main className="ml-2 mt-4">
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
                                <a>詳細</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex flex-col items-center">
                <ul className="flex">
                    <li>{'<'}</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>{'>'}</li>
                </ul>
                <p>{`共 ${total} 筆`}</p>
            </div>
        </main>
    )
}

export default Column
