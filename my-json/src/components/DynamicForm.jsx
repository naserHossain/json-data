import React, { useState } from "react";

const formFields = {
    name: {
        type: "text",
        label: "What's your name",
        placeholder: "John Doe",
    },
    email: {
        type: "email",
        label: "What's your email",
        placeholder: "john@example.com",
    },
    phone: {
        type: "tel",
        label: "Your phone number",
        placeholder: "+8801793699572",
    },
    password: {
        type: "password",
        label: "type your password",
        placeholder: "*********",
    },
    color: {
        type: "color",
        label: "type a color",
        placeholder: "rgb(0, 83, 250)",
    },
    birthDay: {
        type: "date",
        label: "What is your birth date",
        placeholder: "enter birth date",
    },
    age: {
        type: "number",
        label: "What is your current age",
        placeholder: "demo age",
    },
};

const objectToArr = (obj) => {
    return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
    /* const keys = Object.keys(obj);
    const arr = keys.map((key) => {
        return {
            name: key,
            type: formFields[key].type,
            label: formFields[key].label,
            placeholder: formFields[key].placeholder,
        };
    });
    return arr; */
};

const transformObj = (obj) => {
    return Object.keys(obj).reduce((acc, cur) => {
        acc[cur] = {
            ...obj[cur],
            value: "",
        };
        return acc;
    }, {});
};

const DynamicForm = () => {
    const [formState, setFormState] = useState(transformObj(formFields));
    const formData = objectToArr(formState);

    const handleSubmit = (event) => {
        event.preventDefault();
        const values = Object.keys(formState).reduce((acc, cur) => {
            acc[cur] = formState[cur].value;
            return acc;
        }, {});
        console.log(values);
    };

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: {
                ...formState[event.target.name],
                value: event.target.value,
            },
        });
    };

    return (
        <div>
            <h2> Hello this is for compo</h2>
            <form>
                {formData.map((item, index) => {
                    return (
                        <div key={index}>
                            <label htmlFor="name">{item.label} </label>
                            <input
                                type={item.type}
                                name={item.name}
                                placeholder={item.placeholder}
                                value={item.value}
                                onChange={handleChange}
                            />
                        </div>
                    );
                })}
                <div>
                    <button onClick={handleSubmit} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DynamicForm;
