/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='flex flex-col justify-center items-center text-white h-[68vh]'>
      <h1 className='text-3xl text-center'><span className="text-red-600">Oops!</span> we can't find what you're looking for.</h1>
      <Link to="/" className='mt-5 text-xl py-2 px-3 bg-red-600 rounded-md'>Home</Link>
    </div>
  )
}
