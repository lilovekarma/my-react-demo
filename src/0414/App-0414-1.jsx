function App() {
    //建立函示方法1
    function sayHi3(){
        alert('Hi3');
    }
    //建立函示方法2 const+箭頭函示
    const sayHi4=()=>{
        alert('Hi4');
    }

    return ( /* 先看return再看其他 */
        <>
            {/* 事件處理 */}
            {/* 在html標籤綁定事件 */}
            <button onClick={
                //匿名函示寫法
                function () {
                    alert('Hello1');
                }
            }>打招呼1</button>
            <button onClick={
                //箭頭函示
                () => {
                    alert('Hello2');
                }
            }>打招呼2</button>

            {/* 事件處理2 */}
            {/* 呼叫函示,被呼叫函示名稱不可加() */}
            <button onClick={sayHi3}>打招呼3</button>
            <button onClick={sayHi4}>打招呼4</button>



        </>
    )
}
export default App