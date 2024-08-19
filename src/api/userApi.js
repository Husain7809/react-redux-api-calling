import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Fetch user data from the backend
export const fetchUsersApi = async () => {
    try {
        const { data } = await axios.get(`${BACKEND_URL}/users`);
        return data;
    } catch (error) {

    }
}

export const createUserApi = async (user) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/users`, user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteUserApi = async (id) => {
    try {
        const response = await axios.delete(`${BACKEND_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getByIdApi = async (id) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateUserApi = async (id, user) => {
    try {
        const response = await axios.patch(`${BACKEND_URL}/users/${id}`, user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}