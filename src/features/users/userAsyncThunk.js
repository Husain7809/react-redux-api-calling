import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserApi, deleteUserApi, fetchUsersApi } from "../../api/userApi";

export const getUsers = createAsyncThunk('/users/', fetchUsersApi);

export const createUser = createAsyncThunk('/users/create', createUserApi)

export const deleteUser = createAsyncThunk('/users/delete', deleteUserApi)
