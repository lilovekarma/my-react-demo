//子組件 用props查看父組件傳過來內容
function MyComponent(props) {
    //執行父元件傳過的c屬性的函示
    props.c()
    //使用大括號{props.屬性名稱}
    return <>      {/* return後不能空所以<>要搬上來 */}
        <div>我是子元件,帶有主元件傳遞過來的屬性內容為{props.a}</div>
        <div>我是子元件,帶有主元件傳遞過來的屬性內容為{props.b}</div>
        {props.c()}
    </>
}

//子元件
//由於props是物件,所以可以用解構賦值,來用取資料
function MyComponent2({a,b,c}){
    //呼叫c屬性的方法
    c()
    return<>
    <div>第一個屬性:{a}</div>
    <div>第二個屬性:{b}</div>
    <div>第三個屬性:{c()}</div>



    </>
}

//父組件
function App() {
    return (
        <>
            {/* 回饋函示=>callback function */}
            <MyComponent
                a="我是屬性a"
                b="我是屬性b"
                c={() => { console.log("我是屬性c") }} 
                />


            <MyComponent2
                a="我是屬性a"
                b="我是屬性b"
                c={() => { console.log("我是屬性c") }} 
                />
        </>
    )

}
export default App
