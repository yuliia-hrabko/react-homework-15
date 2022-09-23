import Context from "./Context"
import React, {useState} from "react";


const Provider = ({children}) => {

    const [inputValue, setinputValue] = useState([]);
    const [value, setValue] = useState("");
   

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

    return (
        <Context.Provider value={{inputValue, setinputValue, value, onClick, onChange}}>
            {children}
        </Context.Provider>
    )
}

export default Provider;