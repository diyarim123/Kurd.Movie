/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Genres({setOpen, setGenre}) {
  const { genres_loading, genres_data, genres_err } = useSelector(state => state.genres);

  const [id, setId] = useState([]);


  if (genres_err) {
    return <div>Error...</div>;
  }


  function handleId(e) {
    const selectedId = e.target.id;
    e.target.className = "true genreBtn";
    if (id.includes(selectedId)) {
      setId(prevState => prevState.filter(item => item !== selectedId));
      e.target.className = "genreBtn"
    } else {
      setId(prevState => [...prevState, selectedId]);
    }
  }


  return (
    <div className='absolute h-80 lg:w-full lg:top-[2.8rem] top-[11.4rem] w-[94vw] bg-slate-800 text-white mx-auto rounded-t-md'>
      <div className='overflow-y-auto h-full'>
        {genres_data.genres && (
          <div className='flex flex-col items-center gap-5 p-3'>
            {genres_data.genres.filter(item => item.name !== "Romance").map(genre => (
              <button
                key={genre.id}
                onClick={handleId}
                id={genre.id}
                className='genreBtn'
              >
                {genre.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <Link to={`genres/${id}`}>
        <button onClick={() => {setGenre(false); setOpen(false)}} className='bg-red-600 hover:bg-red-500 text-white py-2 px-3 rounded-b-md w-full'>Search</button>
      </Link>
    </div>
  );
}
