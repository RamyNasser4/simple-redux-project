import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
    const name = useSelector(state => state.user.name);
  return (
    <div className="flex justify-between items-center py-5 px-7  bg-red-800 text-white">
        <h1 className='font-bold text-2xl'>Developer</h1>
        <p>Hello {name}</p>
    </div>
  )
}
