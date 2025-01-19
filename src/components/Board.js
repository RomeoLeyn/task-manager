import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Column from './Column';
import ErrorPage from './Error/ErrorPage';
import api from '../api/config';

import '../style/Board.css';

export const Board = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    const { projectId } = useParams();

    useEffect(() => {
        fetchTasksFromDB();
    }, [projectId]);

    const fetchTasksFromDB = async () => {
        try {
            const response = await api.get(`/api/tasks/${projectId}`)
            setTasks(response.data);
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
                <Column title="To Do" id="todo" tasks={tasks.filter(task => task.status === 'todo')} projectId={projectId} />
                <Column title="In Progress" id="in-progress" tasks={tasks.filter(task => task.status === 'in_progress')} />
                <Column title="Review" id="in-review" tasks={tasks.filter(task => task.status === 'review')} />
                <Column title="Done" id="done" tasks={tasks.filter(task => task.status === 'done')} />
            </div>
        )
    );
};
