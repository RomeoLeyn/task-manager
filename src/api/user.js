import axios from "axios";
import api from "./config";

export const login = async (email, password) => {
    await axios.post('http://localhost:3000/api/users/login', { email, password })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        });
}

export const register = async (username, email, password) => {

    await axios.post('http://localhost:3000/api/users/register', { username, email, password })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        });
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const addImportant = async (projectId) => {
    const response = await api.post(`http://localhost:3000/api/users/important?projectId=${projectId}`);
    return response;
}

export const getImportant = async () => {
    const response = await api.get(`http://localhost:3000/api/users/important-projects`);
    return response;
}