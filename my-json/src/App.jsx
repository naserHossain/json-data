import React, { useState } from "react";
import DynamicForm from "./components/DynamicForm";

const App = () => {
    const [formStates, setFormStates] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (event) => {
        setFormStates({
            ...formStates,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formStates);
        console.log(event.target[1].value);
        console.log(event.target[2].value);
    };
    // console.log(formStates.name);

    return (
        <div>
            <h1> App </h1>

            <DynamicForm />

        </div>
    );
};

export default App;
