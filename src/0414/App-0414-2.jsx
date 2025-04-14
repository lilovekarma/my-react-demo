function Component() {
    return <h1>React</h1>
}

function App() {
    //建立陣列1
    //同一個陣列中,key屬性的
    const listItem = [
        <Component key="0" />,
        <Component key="1" />


    ]

    //建立陣列2
    const listBooks = [
        { bookName: 'HTML', id: 'book1' },
        { bookName: 'CSS', id: 'book2' },
        { bookName: 'Javescript', id: 'book3' },
        { bookName: 'React', id: 'book4' },
    ]

    //過濾陣列中除了css
    const filterBooks = listBooks.filter((book) => {
        //檢查書本名稱不是css就保留 再加入HTML  (book.bookName != 'CSS'&&book.bookName!='HTML')
        if (book.bookName != 'CSS') {
            return true
        }
    })




    return (
        <>
            {/* 使用陣列方法1 */}
            {listItem}
            <hr />

            {/* 使用陣列方法2 :map方法 */}
            {
                listBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>

                })
            }
            <hr />
            {/*顯示filter()過濾中的陣列資料 */}
            {
                filterBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }

        </>
    )

}
export default App