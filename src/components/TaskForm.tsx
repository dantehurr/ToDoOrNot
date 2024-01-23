'use client'

import React, { useEffect, useState } from "react";

const TaskForm = ({ addTask }) => {
    const [ value, setValue ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTask(value);

        setValue('');
    }

    return (
        <form className="bg-gray-300" onSubmit={handleSubmit}>
            <input type="text" className="" value={value} placeholder="task here" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="">add</button>
        </form>
    );
};

export default TaskForm;