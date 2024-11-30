import axios from "axios";
import api from "./config";

export const getAllProjects = async () => {
    const response = await api.get('/api/projects');
    // const response = await axios.get('http://localhost:3000/api/projects/all');
    return response;
}

export const createProject = async (title, description, category, color) => {
    const response = await api.post('/api/projects', {title, description, category, color});
    return response;
}