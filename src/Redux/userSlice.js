import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState : {
        name : "",
        email: ""
    },
    reducers : {
        updateName : (state,action) =>{
            state.name = action.payload;
        },
        updateEmail : (state,action) =>{
            state.email = action.payload;
        }
    }
})
export const {updateName,updateEmail} = userSlice.actions;
export default userSlice.reducer;