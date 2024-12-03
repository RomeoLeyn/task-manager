import React from 'react';

import '../style/Task.css';
import { getTaskPriorityColor } from '../utils/utils';

export const Task = ({ title, priority }) => {


    const handleClickAssigneToMe = () => {
        
    }

    const handleClickChangeStatus = () => {
        console.log("Change status");
    }

    return (
        <div className='task-container' style={{ borderLeftColor: getTaskPriorityColor(priority)}}>

            <div className='task-title'>
                {title}
            </div>

            <div className="task-card">
            </div>

        </div>
    );
};
