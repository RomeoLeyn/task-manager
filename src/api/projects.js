import api from "./config";

export const getAllProjects = async () => {
    const response = await api.get('/api/projects');
    return response;
}

export const createProject = async (title, description, category, color) => {
    const response = await api.post('/api/projects', { title, description, category, color });
    return response;
}