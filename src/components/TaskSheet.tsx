'use client'

import React, { useState, useEffect } from "react";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

import { FaWandMagicSparkles } from 'react-icons/fa6';

import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";
uuidv4();

const TaskSheet = () => {
    const [ tasks, setTasks ] = useState<any[]>([]);

    useEffect(() => {
        const storedTasks: any = JSON.parse(localStorage.getItem('task'));

        if ( storedTasks ) {
            setTasks(storedTasks);
        }
    }, []);

    const addTask = ( task ) => {
        const newTask = { id: uuidv4(), todo: task, completed: false, isEditing: false };
        setTasks([ ...tasks, newTask ]);
        console.log(tasks);
        localStorage.setItem('task', JSON.stringify([ ...tasks, newTask ]));
    }

    const deleteAllTasks = () => {
        localStorage.clear();
    }

    const removeTask = ( taskKey ) => {
        localStorage.removeItem(taskKey);
    }

    return (
        <main id="" className="lg:w-[800px] bg-sky-300/30 dark:bg-slate-950 p-6 rounded-2xl lg:rounded-3xl">
            <div id="" className="">
                <TaskForm addTask={addTask} />
                {tasks.map((task, index) => (
                    <Task todo={task.todo} id={task.id} key={task.id} />
                ))}
                {/* <TaskList /> */}
                <div className="flex text-lg bg-slate-800 dark:bg-slate-300 rounded-full mt-9 lg:mb-1 w-fit px-3 text-blue-100 dark:text-gray-800">
                    <div className="flex flex-row items-center gap-3 p-3 lg:p-2">
                        <button className="">delete all</button>
                        <FaWandMagicSparkles />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TaskSheet;