import { FaPencil, FaXmark } from 'react-icons/fa6';

const Task = (task) => {
    return (
        <div className='flex flex-row items-center justify-between text-2xl py-4 lg:py-2 lg:pb-4 border-b-2 border-b-sky-300 lg:mx-6'>
            <p className=''>{task.todo}</p>
            <div className='flex flex-row gap-6'>
                {/* <button id='' className=''><FaPencil /></button> */}
                <button id='' className=''><FaXmark /></button>
            </div>
        </div>
    );
};

export default Task;