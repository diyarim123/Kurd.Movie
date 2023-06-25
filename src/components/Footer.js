/* eslint-disable */
import React from 'react'

export default function Footer() {
  return (
    <div className='p-3 bg-slate-900 text-white bottom-0 right-0 left-0'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-3xl'>Kurd<span className='text-red-600'>.Movie</span></h1>
        <p className='text-center'>
            Discover a vast collection of movies, series, and animations. Enjoy trailers, detailed information, reviews, and ratings to help you choose your next cinematic adventure.
        </p>
        <div className='flex flex-row gap-5'>
            <a href="https://github.com/diyarim123" className='scale-125 hover:scale-150' target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" style={{color : "white"}}></i>
            </a>
            <a href="https://www.linkedin.com/in/diyari-mohammed-3a2122228/" className='scale-125 hover:scale-150' target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin" style={{color : "white"}}></i>
            </a>
        </div>
      </div>
    </div>
  )
}
