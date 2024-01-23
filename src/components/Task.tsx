import { FaPenToSquare, FaTrash } from 'react-icons/fa6';

const Task = (task) => {
    return (
        <div className=''>
            <p className=''>{task.todo}</p>
            <div className=''>
                <FaPenToSquare />
                <FaTrash />
            </div>
        </div>
    );
};

export default Task;