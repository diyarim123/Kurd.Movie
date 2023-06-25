/* eslint-disable */
import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


//imported components
import ScrollTop from "../ScrollTop"
import Movie from '../Movie';

//import the fetch function
import fetchGenreDetail from "../../Redux/GenreDetail/GenreDetailAsync";

//import MUI React
import { Pagination } from '@mui/material';
import Loading from '../Loading';



export default function GenreList() {

    const { id } = useParams()

    const {genre_isLoading, genre_data, genre_error} = useSelector(state => state.genre_detail)

    // handling the pagination
    const [page, setPage] = useState(1)
    
    const dispatch = useDispatch();
    
    useEffect(() => {
      const requestPromise = dispatch(fetchGenreDetail({id, page}))

      return () => {
        requestPromise.abort()
      }
    
    }, [dispatch, id, page])


    function handlePageChange(e, value) {
      setPage(value)
    }


  return (
    <div className='text-white p-5'>
    {genre_isLoading ? <Loading /> : 
      <>
        {genre_data.results && 
        <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 p-5'>
        {genre_data.results.map(genre => (
          <Link key={genre.id} to={`/${genre.id}`}><Movie name={genre.title} img={genre.poster_path} date={genre.release_date} /></Link>
          ))}
        </div>
        }
      </>
    }

      <div className='flex justify-center mx-auto my-6'>
            <Pagination
              count={genre_data.total_pages}
              page={page}
              onChange={handlePageChange}
              variant='outlined'
            />
          </div>
          
          <ScrollTop />
    </div>
  )
}


