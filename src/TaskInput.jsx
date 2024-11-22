import React, { useState } from 'react';
const TaskInput = ({ handleAddTask }) => {
    const [task, setTask] = useState('');
    const addTask = () => {
        if (task.trim()) {
            handleAddTask(task);
            setTask('');
        }
    };
    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Enter a task'
            ></input >
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}
export default TaskInput;