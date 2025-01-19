import React, { useState } from 'react';

import { Task } from './Task';
import { addTask } from '../api/task';
import { getColumnIcon } from '../utils/utils';

import CreateTask from './modal/CreateTaskModal/CreateTask';

import '../style/Column.css';

const Column = ({ title, id, tasks, projectId }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasksList, setTasksList] = useState(tasks);


    // const handleClickAddTask = async () => {
    //     // const response = await addTask({title, description: "description", projectId: 1, assignedTo: 1});
    //     const response = await addTask(data);
    //     if (response.status === 201) {
    //         window.location.reload();
    //     }
    // }

        const handleAddTask = async (taskData) => {
        try {
            const response = await addTask(taskData);
            if (response.status === 201) {
                setTasksList([...tasksList, { ...taskData, id: response.data.id }]);
            }
        } catch (error) {
            console.error('Failed to add task', error);
        }
    };

    return (
        <div className="column">
            <div className='column-header'>
                <h3 className="column-title">{title} {getColumnIcon(id)}</h3>
            </div>
            <div className="column-body">
                {tasks.map(task => (
                    <Task key={task.id} id={task.id} title={task.title} createdByUser={task.createdByUser} assignedUser={task.assignedUser} priority={task.priority} />
                ))}
            </div>
            {/* <div className="column-footer">
                <button onClick={handleClickAddTask}><i className="fa-solid fa-plus"></i>Add task</button>
            </div> */}

            <div className="column-footer">
                <button onClick={() => setIsModalOpen(true)}>
                    <i className="fa-solid fa-plus"></i>Add task
                </button>
            </div>
            <CreateTask
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={(taskData) =>
                    handleAddTask({ ...taskData, projectId: projectId })
                }
                initialData={{
                    title: '',
                    description: '',
                    status: 'todo',
                    priority: 'medium',
                    dueDate: '',
                    projectId: projectId,
                }}
            />
        </div >
    );
};

export default Column;



// import React, { useState } from 'react';
// import { Task } from './Task';

// import '../style/Column.css';
// import { addTask } from '../api/task';
// import { getColumnIcon } from '../utils/utils';
// import CreateTask from './modal/CreateTask';

// const Column = ({ title, id, tasks }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [tasksList, setTasksList] = useState(tasks);

//     const handleAddTask = async (taskData) => {
//         try {
//             const response = await addTask(taskData);
//             if (response.status === 201) {
//                 setTasksList([...tasksList, { ...taskData, id: response.data.id }]);
//             }
//         } catch (error) {
//             console.error('Failed to add task', error);
//         }
//     };

//     return (
//         <div className="column">
//             <div className="column-header">
//                 <h3 className="column-title">
//                     {title} {getColumnIcon(id)}
//                 </h3>
//             </div>
//             <div className="column-body">
//                 {tasksList.map((task) => (
//                     <Task
//                         key={task.id}
//                         title={task.title}
//                         description={task.description}
//                         user={task.createdByUser?.username || 'Unknown'}
//                         priority={task.priority}
//                     />
//                 ))}
//             </div>
//             <div className="column-footer">
//                 <button onClick={() => setIsModalOpen(true)}>
//                     <i className="fa-solid fa-plus"></i>Add task
//                 </button>
//             </div>
//             <CreateTask
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 onSubmit={(taskData) =>
//                     handleAddTask({ ...taskData, projectId: id })
//                 }
//                 initialData={{
//                     title: '',
//                     description: '',
//                     status: 'todo',
//                     priority: 'medium',
//                     dueDate: '',
//                     projectId: id,
//                 }}
//             />
//         </div>
//     );
// };

// export default Column;
