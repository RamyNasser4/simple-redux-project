import { errorUser, startUser, successUser } from "./userSlice"
import axios from "axios";
export const addUser = async (user,dispatch) =>{
    dispatch(startUser());
    try{
        const res = await axios.post('http://127.0.0.1:8000/api/user',user);
        dispatch(successUser(res.data));
        console.log(res.data);
    }catch(err){
        dispatch(errorUser(err));
    }
}