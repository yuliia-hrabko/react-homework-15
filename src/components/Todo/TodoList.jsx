import React, { useContext, useState } from "react";
import Context from "../../providers/Context";

const TodoList = () => {

    const {inputValue, setinputValue} = useContext(Context);
    const [checked, setChecked] = useState([]);

    const toggleCrossOut = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const checkedItem = {
        textDecoration: "line-through",
    };

    const isChecked = (item) => {
        if (checked.includes(item)) {
            return checkedItem;
        }
    };

    const removeTodoList = (index) => {
        setinputValue([...inputValue.slice(0, index), ...inputValue.slice(index + 1)]);
    };
    
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