import Context from "./Context"
import React, {useState} from "react";


const Provider = ({children}) => {

    const [inputValue, setinputValue] = useState([]);
    const [value, setValue] = useState("");
    const [checked, setChecked] = useState([]);
   

    const onClick = (event) => {
        event.preventDefault();
        if (!!value) {
            setinputValue([...inputValue, value]);
            setValue("");
        }
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

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
        <Context.Provider value={{inputValue, setinputValue, value, onClick, onChange, toggleCrossOut, isChecked, removeTodoList}}>
            {children}
        </Context.Provider>
    )
}

export default Provider;