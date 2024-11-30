import axios from "axios";

export const login = async (email, password) => {
    const { data } = await axios.post('http://localhost:3000/api/users/login', { email, password })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        });
}

export const register = async (username, firstname, lastname, email, password) => {

    const { data } = await axios.post('http://localhost:3000/api/users/register', { username, firstname, lastname, email, password })
    
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