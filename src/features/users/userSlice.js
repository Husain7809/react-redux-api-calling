import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, getUsers } from "./userAsyncThunk";

const userSlice = createSlice({
    name: "User",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
            state.isError = false;
        })
        builder.addCase(getUsers.rejected, (state) => {
            state.isLoading = false;
            state.data = payload
            state.isError = true
        })

        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
            state.isError = false;
        })
        builder.addCase(createUser.rejected, (state) => {
            state.isLoading = false;
            state.data = payload
            state.isError = true
        })

        builder.addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
            state.isError = false;
        })
        builder.addCase(deleteUser.rejected, (state) => {
            state.isLoading = false;
            state.data = payload
            state.isError = true
        })
    }
})

export default userSlice.reducer