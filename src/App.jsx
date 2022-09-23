import React from "react";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

const App = () => {
   
    return (
        <div style={{ textAlign: "center", width: "500px", margin: "0 auto" }}>
           <TodoForm/>
           <TodoList />
        </div>
    );
};

export default App;
