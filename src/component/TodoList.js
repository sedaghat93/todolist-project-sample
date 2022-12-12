import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({todos,onComplate,onDelete,onEdit,onUpdateTodo}) => {

    const [edit,setEdit] = useState({id:null,name:"",iscomplated:false});

    const editTodo = (newValue) => {

        onUpdateTodo(edit.id,newValue);
        setEdit({id:null,name:""})
    }

    const renderTodos = () => {
        if(todos.length === 0) return <div>add some todos</div>;

        return todos.map((todo) => {

            return (
                < Todo 
                    key={todo.id} 
                    todo={todo} 
                    onComplate={()=>onComplate(todo.id)} 
                    onDelete={()=>onDelete(todo.id)}
                    onEdit={()=>setEdit(todo)}
                />);
        });
    }
    
    return <div>{ edit.id ? <TodoForm addTodoHandler={editTodo} edit={edit} /> : renderTodos()}</div>
       
};
 
export default TodoList;