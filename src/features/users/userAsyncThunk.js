import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserApi, deleteUserApi, fetchUsersApi, getByIdApi, updateUserApi } from "../../api/userApi";

export const getUsers = createAsyncThunk('/users/', fetchUsersApi);

export const createUser = createAsyncThunk('/users/create', createUserApi)

export const deleteUser = createAsyncThunk('/users/delete', deleteUserApi)

export const getById = createAsyncThunk('/users/getById', getByIdApi)

export const updateUser = createAsyncThunk('/users/update', (payload) => {
    try {
        const { id, ...user } = payload;
        updateUserApi(id, user)
    } catch (error) {
        console.log("🚀 ~ updateUser ~ error:", error)
    }
})