'use client'

import React, { useState, useEffect } from "react";

import TaskForm from "./TaskForm";

import { FaWandMagicSparkles } from 'react-icons/fa6';

import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";
uuidv4();

const TaskSheet = () => {
    const [ tasks, setTasks ] = useState<any[]>([]);

    useEffect(() => {
        const storedTasks: any = JSON.parse(localStorage.getItem('task') || '[]');

        if ( storedTasks ) {
            setTasks(storedTasks);
        }
    }, []);

    const addTask = ( task:any ) => {
        const newTask = { 
            id: uuidv4(), 
            todo: task, 
        };
        setTasks([ ...tasks, newTask ]);
        localStorage.setItem('task', JSON.stringify([ ...tasks, newTask ]));
    }

    const deleteAllTasks = () => {
        localStorage.clear();
        setTasks([]);
    }

    const updateLocalStorage = ( updateTasks:any ) => {
        localStorage.setItem('task', JSON.stringify(updateTasks));
    }

    const removeTask = ( taskId:any ) => {
        const updateTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updateTasks);
        updateLocalStorage(updateTasks);
    }

    return (
        <main className="lg:w-[800px] bg-sky-300/30 dark:bg-slate-950 p-6 rounded-2xl lg:rounded-3xl">
            <div>
                <TaskForm addTask={addTask} />
                {tasks.map((todo) => (
                    <Task
                    task={todo}
                    removeTask={removeTask} />
                ))}
                <div className="flex text-lg bg-slate-800 dark:bg-slate-300 rounded-full mt-9 lg:mb-1 w-fit px-3 text-blue-100 dark:text-gray-800">
                    <div className="flex flex-row items-center gap-3 p-3 lg:p-2">
                        <button onClick={deleteAllTasks} >delete all</button>
                        <FaWandMagicSparkles />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TaskSheet;