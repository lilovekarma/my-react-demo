import { MdDelete, MdEdit } from "react-icons/md";

/* function Todo({todo}){
    return(
        <div className="todo">
            <p>{todo}</p>
        </div>

    )
} */
function Todo({ todo, delTodo, toggleCompleted }/* props */) {
    return (
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            <p onClick={() => { toggleCompleted(todo.id) }} >{todo.content  /* props.todo */}</p>
            {/* 先修改再刪除 */}
            <div> <MdEdit style={{ cursor: 'pointer' }} />

                <MdDelete
                    onClick={() => { delTodo(todo.id) }}
                    style={{ cursor: 'pointer', marginLeft: '5px' }} />
            </div>
        </div>

    )
}

export default Todo