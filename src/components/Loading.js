/* eslint-disable */
import React from 'react'
import { SyncLoader } from 'react-spinners'

export default function Loading({loading}) {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <SyncLoader size={30} color='#DC2626' loading={loading} /> 
    </div>
  )
}
