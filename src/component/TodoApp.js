import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {

    const [todos,setTodos] = useState([]);
    const [filteredTodos,setFilterTodos] = useState([]);
    const [selectedOption,setSelectedOption] = useState("All");

    useEffect(() => {
        // console.log(selectedOption.value );
        filterTodos(selectedOption);
    },[todos,selectedOption]);

    const addTodo = (input) => {
        console.log(input);

        const newTodo = {
            id:Math.floor(Math.random()*1000),
            name:input,
            iscomplated:false
        }

        setTodos([...todos,newTodo]); 
    }

    const completeTodo = (id) => {
        // item => findIndex => clone
       const index =  [...todos].findIndex((p) => p.id===id);
        // clone : dont mutate
        const selectedTodo = {...todos[index]}
        selectedTodo.iscomplated=!selectedTodo.iscomplated ;
       console.log(selectedTodo.iscomplated);
        // clone todos
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
    }

    const removeTodo = (id) => {
        console.log(id);
        const filterTodos = todos.filter((p) => p.id !== id);
        setTodos(filterTodos);
    }

    const updateTodo = (id,newValue) => {

        // item => findIndex => clone
        const index =  [...todos].findIndex((p) => p.id===id);
         // clone : dont mutate
        const selectedTodo = {...todos[index]}
        selectedTodo.name = newValue;
        // clone todos
        const updatedTodos = [...todos];
        updatedTodos[index] = selectedTodo;
        setTodos(updatedTodos);
    }

    const filterTodos = (status) => {

        switch(status){
            case "All":
                setFilterTodos(todos);
                break;
            case "completed":
                setFilterTodos(todos.filter((t) => t.iscomplated));
                break;
            case "uncompleted":
                setFilterTodos(todos.filter((t) => !t.iscomplated));
                break;
            default:
                setFilterTodos(todos)
        }

    }

    const selectHandler = (e) => {
        setSelectedOption(e.target.value);
        filterTodos(e.target.value);
    }

    return ( 
        <div className="container"> 
            <NavBar 
                uncompletedTodos={todos.filter((t) => !t.iscomplated).length} 
                selectedOption={selectedOption}
                onChange={selectHandler}
                />
            <TodoForm addTodoHandler={addTodo}/>
            <TodoList 
                todos={filteredTodos} 
                onComplate={completeTodo} 
                onDelete={removeTodo} 
                onUpdateTodo={updateTodo} 
                />
        </div>
        
     );
}
 
export default TodoApp;