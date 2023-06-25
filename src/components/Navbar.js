/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Genres from './Genre/Genres';
import Search from './Search';

const Nav = () => {

    const [open,setOpen]=useState(false);
    const [genre, setGenre] = useState(false);

    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState();

    const handleInput = (e) => {
      const value = e.target.value

      if(value.length !== 0) {
        setValue(value)
      } else {
        setValue("")
      }
      setInputValue()
    }

    function handleOpen() {
      setOpen(!open)
    }
    function handleClose() {
      setOpen(false)
    }
    function handleGenre() {
      setGenre(!genre)
    }
  
  
    useEffect(() => {
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGViOGZhOTA2NGU0MzdkM2MzMWYzMmQwYzk1OTgyZSIsInN1YiI6IjY0N2QxMzFkMjYzNDYyMDBkYzQyYWE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xf47sgagxX8a8BU3LZ0s737y5wqL7OR352ZgKBX8YjA'
        }
      };
  
      const URL = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`
      
      if(value) {
        fetch(URL, options)
        .then(response => response.json())
        .then(data => setData(data.results))
        .catch(err => {throw Error(err)})
      } else {
        setData([])
      }
    }, [value])

    
    
  return (
    <nav className={`${open ? "nav relative" : "nav"}`}>
      
      {/* the logo and left side*/}

        <h1 className='text-3xl'>Kurd<span className='text-red-600'>.Movie</span></h1>

        {/* hidden burger button */}
        <div className='text-xl p-2 cursor-pointer lg:hidden' onClick={handleOpen}>
          <i className={`fa-solid fa-bars ${open ? 'hidden' : 'block' }`} style={{color : "white"}}></i>
          <i className={`fa-solid fa-x ${open ? 'block' : 'hidden' }`} style={{color : "white"}}></i>
        </div>

        <div className={`${open ? "absolute top-16 w-full left-0" : "hidden lg:block"}`}>

          {/* the right side */}
          <div className={`lg:flex lg:flex-row lg:static ${open && "responsive"} `}>
            
            {/* links */}
            <div className={`links ${open && "flex flex-col gap-2"}`}>

              <NavLink to="/" onClick={handleClose} className="nav-link">Movies</NavLink>
              <NavLink to="/series" onClick={handleClose} className="nav-link">Series</NavLink>
              <NavLink to="/animations" onClick={handleClose} className="nav-link">Animation</NavLink>

            </div>
            
            {/* Search section */}
            <div className={`flex flex-row lg:relative sm:mx-auto lg:mx-0`}>

              <div className='p-2 bg-slate-800 rounded-l-lg cursor-pointer'>
                <i className="fa-solid fa-magnifying-glass ml-1 mt-2" style={{color : "white"}}></i>
              </div>

              <input className='inputSearch' type='text' placeholder='Search...' onChange={handleInput} value={inputValue} />

              <div className={`text-lg p-2 bg-slate-800 rounded-r-lg ${open && "right-10"}`}>
                <i onClick={handleGenre} className="fa-solid fa-list fa-rotate-180 cursor-pointer" style={{color : "white"}}></i>
              </div>

              {genre && <Genres setOpen={setOpen} setGenre={setGenre} />}
              {data.length > 0 && <Search data={data} setOpen={setOpen} setValue={setInputValue} setData={setData} />}

            </div>

        </div>

      </div>

    </nav>
  )
}

export default Nav