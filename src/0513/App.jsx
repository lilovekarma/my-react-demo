import { input } from "motion/react-client";
import { useRef, useState } from "react"

function App(){
    //const [value,setValue]=useState('');
    //建立useRef的變數
    const inputRef=useRef(null)/* useRef不會因為狀態改變一直被執行 */
    console.log('App  渲染了');

    const submitHandler=(flag)=>{
        //console.log(value);
        //傳回被綁定useRef的物件
        //console.log(inputRef);
        //查看值
        //console.log(inputRef.current.value);
        //查看類型
        //console.log(inputRef.current.type);
        //動態改為password 變成原本可以看到數字就會送出時不能看
        //inputRef.current.type="password";
     if(flag){
        inputRef.current.type="password";
     }else{
        inputRef.current.type="text";
     }
    }
  
    return(
        <>
        {/* <input type="text" onChange={(e)=>setValue(e.target.value)} /> */}
        <input type="text" ref={inputRef} />
        <button onClick={submitHandler(true)}>查看密碼</button>
        <button onClick={submitHandler2(false)}>關閉密碼</button>

        </>
    )

}
export default App