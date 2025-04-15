import { useState } from "react";

function ChildComponet({count}){
    return<div>{count}</div>
}

//
function MyComponent() {
    //let count=0;
    //使用狀態 State 控制變數
    const [count, setCount] = useState(0);
    const handleClick = () => {
        //count++;
        //使用useState的方法改變count
        setCount(count + 1);

    }

    return (
        <>
            <button onClick={handleClick}>點擊次數:{count}</button>
            <ChildComponet count={count}/>
        </>
    )
}



function App() {
    return (
        <>
            {/* 呼叫子元件 */}
            <MyComponent />
            <MyComponent />
            <MyComponent />
        </>
    )
}
export default App