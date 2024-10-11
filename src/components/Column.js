import React from 'react';
import { Task } from './Task';

import '../style/Column.css';
import { addTask } from '../api/task';

const data = {
    "title": "Notification",
    "description": "Create push notification for users",
    "status": "todo",
    "priority": "medium",
    "dueDate": "2024-10-01",
    "projectId": 2,
    "assignedUserId": 1,
    "createdByUserId": 1
}



const Column = ({ title, tasks }) => {

    const handleClickAddTask = async () => {
        // const response = await addTask({title, description: "description", projectId: 1, assignedTo: 1});
        const response = await addTask(data);
        if(response.status === 201){
            window.location.reload();
        }
    }

    return (
        <div className="column">
            <div className='task'>
                <h3>{title}</h3>
                {tasks.map(task => (
                    <Task key={task.id} title={task.title} description={task.description} user={task.user.username} />
                ))}
            </div>
            <div>
                <button onClick={handleClickAddTask}>Add task</button>
            </div>
        </div>
    );
};

export default Column;
