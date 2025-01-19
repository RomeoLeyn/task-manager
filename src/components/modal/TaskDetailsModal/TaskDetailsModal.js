import { useState } from 'react';
import { assignedTask } from '../../../api/task';

import './TaskDetails.css';

import { FaUser, FaCalendarAlt, FaProjectDiagram, FaFlag } from "react-icons/fa";

const TaskDetailsModal = ({ isOpen, onClose, taskDetails }) => {

    const [formData, setFormData] = useState('todo');

    const handleClickAssigneToMe = async () => {
        await assignedTask(taskDetails.id, 'assigned');
    }

    const handleChangeStatus = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <header className="modal-header">
                    <h2>{taskDetails.title}</h2>
                    <button className="close-button" onClick={onClose}>✖</button>
                </header>

                <section className="modal-section">
                    <p><strong>Description:</strong> {taskDetails.description}</p>
                </section>

                <section className="modal-section">
                    <div className="task-details-row">
                        <FaFlag /> <span><strong>Priority:</strong> {taskDetails.priority}</span>
                    </div>
                    <div className="task-details-row">
                        <FaCalendarAlt /> <span><strong>Status:</strong> {taskDetails.status}</span>
                    </div>
                    <div className="task-details-row">
                        <FaCalendarAlt /> <span><strong>Due Date:</strong> {new Date(taskDetails.dueDate).toLocaleDateString()}</span>
                    </div>
                </section>

                <section className="modal-section">
                    <h3>Project Info</h3>
                    <div className="task-details-row">
                        <FaProjectDiagram /> <span><strong>Project:</strong> {taskDetails.project?.title || 'N/A'}</span>
                    </div>
                    <p><strong>Project Description:</strong> {taskDetails.project?.description || 'N/A'}</p>
                </section>

                <section className="modal-section">
                    <h3>People</h3>
                    <div className="task-details-row">
                        <FaUser /> <span><strong>Created By:</strong> {taskDetails.createdByUser?.username || 'N/A'} ({taskDetails.createdByUser?.email})</span>
                    </div>
                    {taskDetails.assignedUser ? (
                        <div className="task-details-row">
                            <FaUser /> <span><strong>Assigned To:</strong> {taskDetails.assignedUser.username} ({taskDetails.assignedUser.email})</span>
                        </div>
                    ) : (
                        <div className="task-details-row">
                            <FaUser /> <span><strong>Assigned To:</strong> Not assigned</span>
                        </div>
                    )}
                </section>

                <div className='assingn-button'>
                    <button onClick={handleClickAssigneToMe}>Assigne to me</button>
                </div>

                <div className='change-status-button'>
                    <select name="status" value={formData.status} onChange={handleChangeStatus}>
                        <option value="todo">Low</option>
                        <option value="in_progress">Medium</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default TaskDetailsModal;