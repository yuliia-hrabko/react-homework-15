import React from "react";
import { useContext } from "react";
import Context from "../../providers/Context";

const TodoForm = () => {

    const {value, onChange, onClick} = useContext(Context);
    
    return (

        
        <>
         <h1>Todos</h1>
        <form>
            <input type="text" name="name" value={value} onChange={onChange} />
            <button onClick={onClick} type={"button"} disabled={!value}>
                Save data
            </button>
        </form>
        </>
       
           
        
    )
}

export default TodoForm;