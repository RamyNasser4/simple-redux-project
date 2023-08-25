import React from 'react'
import { useSelector } from 'react-redux'

export default function Sidebar() {
    const name = useSelector(state =>state.user.userData.name);
  return (
    <div className='w-1/4 bg-[#f6f6f6] h-[calc(100vh-72px)] p-3'>
        <ul className='list-none'>
            <li ><a href='#' className='text-[#333] block text-center mb-3 p-2'>Home</a></li>
            <li ><a href='#' className='text-[#333]  block text-center mb-3 p-2'>About</a></li>
            <li ><a href='#' className='text-[#333] block text-center mb-3 p-2'>Contact</a></li>
            <li ><a href='#' className='text-[#333] block text-center mb-3 p-2'>Blog</a></li>
            <li ><a href='#' className='text-[#333] block text-center mb-3 p-2'>Hello {name}</a></li>
        </ul>
    </div>
  )
}
