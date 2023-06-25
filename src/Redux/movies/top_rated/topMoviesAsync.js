//import createAsyncThunk redux
import { createAsyncThunk } from "@reduxjs/toolkit";


// URL
const URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&with_watch_monetization_types=flatrate&sort_by=popularity.desc&include_adult=false&include_video=false';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGViOGZhOTA2NGU0MzdkM2MzMWYzMmQwYzk1OTgyZSIsInN1YiI6IjY0N2QxMzFkMjYzNDYyMDBkYzQyYWE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xf47sgagxX8a8BU3LZ0s737y5wqL7OR352ZgKBX8YjA'
    }
  };

const fetchTopMovies = createAsyncThunk("/upComing_movies", () => {
    return (
        fetch(URL, options).then( response => response.json()).then( data => data.results)
    )
})

export default fetchTopMovies;