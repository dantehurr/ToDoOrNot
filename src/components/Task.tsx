import React from 'react';

import { FaXmark } from 'react-icons/fa6';

const Task = ( {task, removeTask} : {task:any, removeTask:any}) => {

    const handleRemoveTask = () => {
        removeTask(task.id);
    }
    return (
        <div className='flex flex-row items-center justify-between text-2xl py-4 lg:py-2 lg:pb-4 border-b-2 border-slate-500 dark:border-b-slate-400 lg:mx-6'>
            <p className='dark:text-sky-50'>{task.todo}</p>
            <div className='flex flex-row gap-6'>
                <button onClick={handleRemoveTask} className='text-slate-600 dark:text-gray-400'><FaXmark /></button>
            </div>
        </div>
    );
};

export default Task;