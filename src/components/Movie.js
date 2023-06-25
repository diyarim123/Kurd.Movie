/* eslint-disable */
import React from "react";
import {motion} from "framer-motion";


export default function Movie({name, img, date}) {


  return (
    <motion.div
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-2">
        <img 
          className='w-56 h-72 object-cover mx-auto rounded-md hover:border-2'
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt={name}
          onError={(e) => {e.target.onError=null; e.target.src= `/notFound.png`}}
          />
        <div className="flex flex-col gap-1 mx-auto">
          <p className="font-bold font-lg text-center">{name}</p>
          <p className="text-sm mx-auto">{date}</p>
        </div>
      </div>
    </motion.div>
  )
}
