import React from 'react';

import '../style/Task.css';

export const Task = ({ title, description, user }) => {


    const handleClickAssigneToMe = () => {
        
    }

    const handleClickChangeStatus = () => {
        console.log("Change status");
    }

    return (
        <div className='task-container'>

            <div className='task-title'>
                <p> <strong>{title}</strong> </p>
            </div>

            <div className="task-card">

                <p><strong>Task description:</strong> {description}</p>
                <p><strong>Assigned to:</strong> {user}</p>
            </div>

            <div className='buttons'>
                <div className='assigned-btn'>
                    <button onClick={handleClickAssigneToMe}>assigned to me</button>
                </div>
                <div className='change-status-btn'>
                    <button onClick={handleClickChangeStatus}>change status</button>
                </div>
            </div>

        </div>
    );
};
