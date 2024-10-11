import api from "./config"

export const assignedTask = async () => {
    try {
        const response = await api.post(`api/tasks/assigned`);
    } catch (error) {
        return error;
    }
}

export const addTask = async (data) => {
    try {
        const response = await api.post(`api/tasks/create`, data);
        return response;
    } catch (error) {
        return error;
    }
}