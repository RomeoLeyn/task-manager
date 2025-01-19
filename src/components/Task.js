import React, { useState } from 'react';

import { getTaskPriorityColor } from '../utils/utils';
import { getDetailsTask } from '../api/task';

import TaskDetailsModal from './modal/TaskDetailsModal/TaskDetailsModal';

import avatarImg from "../img/avatar.png";

import '../style/Task.css';

export const Task = ({ id, title, createdByUser, assignedUser, priority }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [task, setTask] = useState({});


    const handleClickAssigneToMe = () => {

    }

    const handleClickChangeStatus = () => {
        console.log("Change status");
    }

    const handleClickGetTaskDetails = async () => {
        setIsModalOpen(true)
        const response = await getDetailsTask(id);
        setTask(response.data);
    }

    return (
        <div onClick={handleClickGetTaskDetails} className='task-container'>
            <div className='task-title'>
                {title}
            </div>
            <div className='task-users'>
                <div className='assigned-user'>
                    <span>Assigned to:</span>
                    {assignedUser ? (
                        <>
                            <img className='assigned-user-avatar' src={avatarImg} alt="avatar" />
                            <span>{assignedUser.username}</span>
                        </>
                    ) : (
                        <span>Unassigned</span>
                    )}
                </div>
            </div>

            <TaskDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} taskDetails={task} />
        </div>
    );
};
