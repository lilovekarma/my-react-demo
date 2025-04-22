import { useState } from "react"

function CreateForm({addTodo}) {
    //建立input內容變數
    const [content, setContent] = useState('');
    const handleSubmi=(e)=>{
        //取消網頁預設行為,不然會抓不到資料
        e.preventDefault();
        //增加todo內容
        addTodo(content);
        /* 消空input */
        setContent('');

    }
    return (
        <form className="Create-form" onSubmit={handleSubmi}>
            <input
             type="text" placeholder="輸入代辦事項"
             value={content}
             /* e是event */
             onChange={(e)=>{
                setContent(e.target.value)/* 當文字變動透過setContent */

             }}  
            />
            <button type="submit">加入</button>
        </form>
    )
}
export default CreateForm