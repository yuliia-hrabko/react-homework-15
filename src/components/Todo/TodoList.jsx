import React, { useContext} from "react";
import Context from "../../providers/Context";

const TodoList = () => {

    const {inputValue, toggleCrossOut, isChecked, removeTodoList} = useContext(Context);
   
    return (
       
        <ul style={{ listStyle: "none" }}>
            {!inputValue?.length && <li>No date</li>}
            {inputValue?.map((item, idx) => {
                return (
                   
                    <li key={`${item}-${idx}`} style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div>
                                <input type="checkbox" value={item} onChange={toggleCrossOut} style={{ marginRight: "10px" }} />
                                <span style={isChecked(item)}>{item}</span>
                            </div>
                            <button onClick={() => removeTodoList(idx)} disabled={!isChecked(item)} style={{border: "none", background: "none", fontSize: "20px" }} >
                                &#128465;
                            </button>
                    </li>
                );
            })}
        </ul>
        
    )
}

export default TodoList;