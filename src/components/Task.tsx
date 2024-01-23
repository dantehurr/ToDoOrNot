import { FaPenToSquare, FaTrash } from 'react-icons/fa6';

const Task = (todo) => {
    return (
        <div className=''>
            <p className=''>{todo.todo}</p>
            <div className=''>
                <FaPenToSquare />
                <FaTrash />
            </div>
        </div>
    );
};

export default Task;