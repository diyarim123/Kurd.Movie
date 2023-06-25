/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Search({data, setOpen ,setValue, setData}) {

  const handleErase = () => {
    setValue("")
    setData([])
    setOpen(false)
  }

  return (
      <div className='absolute h-80 lg:w-full lg:top-[2.8rem] top-[11.4rem] w-[94vw] bg-slate-800 text-white mx-auto rounded-t-md'>
        <div className='overflow-y-auto h-full'>
          {data.length > 0 && (
            <div className='flex flex-col gap-3 p-3'>
              {data.map(data => (
                <Link key={data.id} to={`/${data.id}`} onClick={handleErase}>                
                  <div className='flex gap-3'>
                    <img className='w-[4rem] h-[6rem] object-cover' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} /> 
                    <div className='flex flex-col gap-3'>
                      <p className='text-lg'>{data.title}</p>
                      <p className='text-slate-300'>{data.release_date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
  )
}
