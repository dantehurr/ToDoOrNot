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

    useEffect(() => {
        const storedTasks: any = JSON.parse(localStorage.getItem('taskKey'));

        if ( storedTasks ) {
            setTasks(storedTasks);
        }
    }, []);

    const addTask = ( task ) => {
        const newTask = { id: uuidv4(), todo: task, completed: false, isEditing: false };
        setTasks([ ...tasks, newTask ]);
        console.log(tasks);
        localStorage.setItem('taskKey', JSON.stringify([ ...tasks, newTask ]));
    }

    return (
        <main id="" className="">
            <div id="" className="">
                <TaskForm addTask={addTask} />
                {tasks.map((task, index) => (
                    <Task todo={task.todo} id={task.id} key={task.id} />
                ))}
                {/* <TaskList /> */}
            </div>
        </main>
    );
};

export default TaskSheet;