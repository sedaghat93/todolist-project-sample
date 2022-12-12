import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {

    const [input,setInput] = useState(props.edit ? props.edit.name : "");
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(!input){
            alert("enter your todos");
            return;
        }

        props.addTodoHandler(input);

        setInput("");
    }

    return ( 
        <form onSubmit={submitHandler} >      
           <div className="formControl">
                <input type="text" onChange={changeHandler} value={input} placeholder={props.edit ? "update value ..." : "add new todo"} ref={inputRef} />
                <button type="submit" className={`btn ${props.edit ? "updateTodo" : "addTodo"}`} >{props.edit ? "Update" : "Add"}</button>
           </div>

        </form>
     );
}
 
export default TodoForm;
