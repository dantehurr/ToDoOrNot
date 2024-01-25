'use client'

import React, { useEffect, useState } from "react";

import { FaPlus } from 'react-icons/fa6';


const TaskForm = ({ addTask }) => {
    const [ value, setValue ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTask(value);

        setValue('');
    }

    return (
        <div className="flex flex-row justify-center pb-6">
            <form className= "flex flex-row w-full bg-slate-500 dark:bg-sky-300/40 rounded-full" onSubmit={handleSubmit}>
                <input type="text" className="rounded-full p-3 lg:p-4 w-full  bg-gray-300 dark:bg-gray-400" value={value} placeholder="task here" onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="p-3 lg:p-4 w-fit rounded-e-full text-gray-950 dark:text-sky-200"><FaPlus /></button>
            </form>
        </div>
    );
};

export default TaskForm;