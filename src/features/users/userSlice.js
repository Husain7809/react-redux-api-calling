import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, getById, getUsers, updateUser } from "./userAsyncThunk";

const userSlice = createSlice({
    name: "User",
    initialState: {
        isLoading: false,
        data: [],
        singleUser: null,
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
            state.isError = true
        })

        builder.addCase(getById.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(getById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.singleUser = action.payload
            state.isError = false;
        })
        builder.addCase(getById.rejected, (state) => {
            state.isLoading = false;
            state.isError = true
        })

        builder.addCase(updateUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
            state.isError = false;
        })
        builder.addCase(updateUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true
        })
    }
})

export const selectUsers = createSelector(
    (state) => state.user.data,
    (data) => data
);

export default userSlice.reducer