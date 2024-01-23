'use client'

import React, { useState, useEffect } from "react";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

import {} from 'react-icons/fa6';

import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";
uuidv4();

const TaskSheet = () => {
    const [ tasks, setTasks ] = useState<any[]>([]);

    const addTask = task => {
        setTasks([...tasks, { id: uuidv4(), todo: task, completed: false, isEditing: false }])
        console.log(tasks);
    }

    return (
        <main id="" className="">
            <div id="" className="">
                <TaskForm addTask={addTask} />
                {tasks.map((task, index) => (
                    <Task todo={task} key={index} />
                ))}
                {/* <TaskList /> */}
            </div>
        </main>
    );
};

export default TaskSheet;