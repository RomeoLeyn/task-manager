import axios from "axios";

const baseURL = 'http://localhost:3000';
axios.defaults.baseURL = baseURL;

const api = axios.create({
    withCredentials: true,
    baseURL
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default api;
