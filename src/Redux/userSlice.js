import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("users/add" ,async (user) =>{
    const res = await axios.post('http://127.0.0.1:8000/api/user',user);
    return res.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState : {
        userData : {
            name : "",
            email : "",
        },
        loading : null,
        error : false,
        errorMessage : null
    },
    reducers : {
        updateName : (state,action) =>{
            state.name = action.payload;
        },
        updateEmail : (state,action) =>{
            state.email = action.payload;
        },
        /* startUser : (state) =>{
            state.loading = true;
        },
        successUser : (state,action) =>{
            state.userData = action.payload.user;
            state.loading = false;
            state.error = false;
        },
        errorUser : (state,action) =>{
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload.response.data.message;
        } */
    },
    extraReducers : {
        [addUser.pending] : (state) =>{
            state.loading = true;
        },
        [addUser.fulfilled] : (state,action) =>{
            console.log(action.payload);
            state.userData = action.payload.user;
            state.loading = false;
            state.error = false;
        },
        [addUser.rejected] : (state,action) =>{
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload.response.data.message;
        }
    }
})
export const {updateName,updateEmail} = userSlice.actions;
export default userSlice.reducer;