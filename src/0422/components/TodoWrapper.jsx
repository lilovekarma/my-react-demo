import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"


function TodoWrapper() {
    //因為有n個todo所以用陣列來儲放
    const [todos, setTodos] = useState([
        { content: '停車費', id: Math.random(), isCompleted: false, isEdit: false },
        { content: '對發票', id: Math.random(), isCompleted: false, isEdit: false },
    ])
    /* 加入新的todo的內容函示 */
    //其餘運算子
    const addTodo = (newContent) => {
        setTodos([...todos, { content: newContent, id: Math.random(), isCompleted: false, isEdit: false }])
    }
    //建立刪除todo函示
    //傳入被刪除的id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id

        }))
    }
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo

        }))
    }

    /* 建立切換 isEdit屬性函示 傳給todo */
    const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            /* not false=>true
               not true=>false */
            return todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo

        }))
    }

    //建立完成修改的函示
    //完成會異動兩個值
    //content=>新的修改內容
    //isEdit=>改回false
    const editTodo = (id, newContent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, content: newContent, isEdit: false }
                : todo
        }))
    }

    return (
        <div className="wrapper">
            <h1>代辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo, /* index */) => {
                    return <Todo
                        todo={todo}
                        key={todo.id}
                        delTodo={delTodo}
                        toggleCompleted={toggleCompleted}
                        toggleIsEdit={toggleIsEdit}
                        editTodo={editTodo}


                    /* key={index} */ />
                })
            }
        </div>
    )
}
export default TodoWrapper