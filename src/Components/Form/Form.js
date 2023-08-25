import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updateName } from '../../Redux/userSlice';
import { addUser } from '../../Redux/userSlice';

export default function Form() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();
    const {loading,error,errorMessage} = useSelector(state => state.user);
    console.log(errorMessage);
    const handleSubmit = (name,email) =>{
        dispatch(addUser({name,email}));
    }
  return (
    <form onSubmit={(e) =>{
        e.preventDefault();
        handleSubmit(name,email);
    }} className='flex w-full flex-col items-center p-3'>
        <div className='mb-3 w-full'>
            <input onChange={(e) => {setName(e.target.value)}} className='block p-2 w-full border-[1px] border-solid border-gray-400 rounded-sm h-10' type='text' placeholder='Enter your name'></input>
        </div>
        <div className='mb-3 w-full'>
            <input onChange={(e) => {setEmail(e.target.value)}} className='block p-2 w-full border-[1px] border-solid border-gray-400 rounded-sm h-10' type='email' placeholder='Enter your email'></input>
        </div>
        {loading ? "Loading" : <div className='mb-3 w-full'>
            <input className='block bg-red-800 cursor-pointer text-white p-2 w-full rounded-sm h-10' type='submit' placeholder='Add User'></input>
        </div>}
        {error ? <div className='text-red-500'>{errorMessage}</div> : null }
    </form>
  )
}
