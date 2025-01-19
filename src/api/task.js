import api from "./config"

export const assignedTask = async (taskId, status) => {
    try {
        const response = await api.post(`/api/tasks/assign`, {
            taskId: taskId,
            status: status
        });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const addTask = async (data) => {
    try {
        const response = await api.post(`api/tasks/`, data);
        return response;
    } catch (error) {
        return error;
    }
}

export const getDetailsTask = async (taskId) => {
    const taskDetails = await api.get(`/api/tasks/details/${taskId}`);
    return taskDetails;
}