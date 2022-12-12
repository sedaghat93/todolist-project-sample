const Todo = ({todo,onComplate,onDelete,onEdit}) => {
    return ( 
        <div className="todo">
            <div onClick={onComplate} className={`todoText ${todo.iscomplated ? "complate" : ""}`} >{todo.name}</div>
            <div>
                <button onClick={onEdit} className="btn" >Edit</button>
                <button onClick={onDelete} className="btn remove" >Delete</button>
            </div>
        </div>
     );
}
 
export default Todo;