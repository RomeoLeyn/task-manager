import axios from "axios";

export const login = async (email, password) => {
    const { data } = await axios.post('http://localhost:3000/api/user/login', { email, password })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        });
}

export const register = async (email, password) => {
    const { data } = await axios.post('http://localhost:3000/api/user/registration', { email, password })
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