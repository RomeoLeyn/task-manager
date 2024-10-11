import axios from "axios";
import api from "./config";

export const getAllProjects = async () => {
    const response = await api.get('/api/projects/all');
    // const response = await axios.get('http://localhost:3000/api/projects/all');
    return response;
}