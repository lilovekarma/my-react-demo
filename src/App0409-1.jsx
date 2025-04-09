import { useState } from "react";

//建立元件(字首名稱要大寫)
function Card({person}) {
    const{name,age}=person
    return (
        <div className="card">
            <div className="card-body">
                {/* Hi,Reat */}
                {/* 一般寫法 */}
                {/* Hi,{person.name} */}
                {/* 解構寫法 */}
                Hi,{name}今年{age}歲
            </div>
        </div>



    )
}
function App() {
    //解構
    //取出特定值為變數
    //const person = {
    //  name: '建仔',
    //  age: '10',
    //}
    //一般寫法
    //const name=person.name;
    //const age=person.age;
    //console.log(name,age);
    //物件解構   
    //const{name,age}=person;
    // console.log(name,age);
    
    // useState-ReactHook 一個變數
    const[person,setPerson]=useState({
        name:'建仔',
        age:'10'
    });


    return (
        <>
        {/* 第一個Person=>元件的屬性 */}
        {/* 第二個Person=>變數 */}

            <Card person={person}></Card>
            <Card person={person}/>
        </>
    )

}
export default App