import { createSlice } from "@reduxjs/toolkit";

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
        startUser : (state) =>{
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
        }
    }
})
export const {updateName,updateEmail,startUser,successUser,errorUser} = userSlice.actions;
export default userSlice.reducer;