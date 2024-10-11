import React, { useState, useEffect } from 'react';
import Column from './Column';
import '../style/Project.css';
import api from '../api/config';
import { useParams } from 'react-router-dom';
import ErrorPage from './Error/ErrorPage';

export const Board = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    const { projectId } = useParams();

    useEffect(() => {
        fetchTasksFromDB();
    }, [projectId]);

    const fetchTasksFromDB = async () => {
        try {
            console.log(projectId);
            const response = await api.get(`/api/tasks/project/tasks/${projectId}`)
            setTasks(response.data);
            console.log(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return <ErrorPage errorMessage={error} />;
    }

    return (
        tasks.message == 'No auth' ? (
            <div>auth...</div>
        ) : (
            <div className="board">
                <Column title="To Do" tasks={tasks.filter(task => task.status === 'todo')} />
                <Column title="In Progress" tasks={tasks.filter(task => task.status === 'in_progress')} />
                <Column title="Review" tasks={tasks.filter(task => task.status === 'review')} />
                <Column title="Done" tasks={tasks.filter(task => task.status === 'done')} />
            </div>
        )
    );
};
