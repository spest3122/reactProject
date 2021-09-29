const Row = () => {
    return (
        <main className="ml-2 mt-4">
            <h1>會員管理(表格式)</h1>
            <section className="mt-4 pl-4 pr-4">
                <div className="flex border-2 border-black p-5 rounded-lg">
                    <p className="border-r-2 border-black">姓名 : Frank.wcw</p>
                    <p className="border-r-2 border-black">
                        帳號 : frank.wcw@dddd.com.tw
                    </p>
                    <p>角色 : ADMIN</p>
                    <button className="">詳情</button>
                </div>
            </section>
        </main>
    )
}

export default Row
