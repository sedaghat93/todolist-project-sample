// import Select from 'react-select';

// const options = [
//   { value: "All", label: "All" },
//   { value: "completed", label: "completed" },
//   { value: "uncompleted", label: "uncompleted" }
// ];

const NavBar = ({uncompletedTodos,onChange,selectedOption}) => {

    if(!uncompletedTodos) return <h2>set your today todos !</h2>;
    return ( 
        <header>
            <span>{uncompletedTodos} </span> <h2>todos are not compeleted.</h2>
            {/* <select onChange={onChange} value={selectedOption} options={options} className="select" /> */}
            <select onChange={onChange} value={selectedOption} className="select" >
                <option value="All">All</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </header>
     );
}
 
export default NavBar;