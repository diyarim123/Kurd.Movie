//importing createAsyncThunk
import { createAsyncThunk } from "@reduxjs/toolkit";


//URL
const URL = "https://api.themoviedb.org/3/genre/movie/list?language=en";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGViOGZhOTA2NGU0MzdkM2MzMWYzMmQwYzk1OTgyZSIsInN1YiI6IjY0N2QxMzFkMjYzNDYyMDBkYzQyYWE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xf47sgagxX8a8BU3LZ0s737y5wqL7OR352ZgKBX8YjA'
    }
  };


const fetchGenres = createAsyncThunk("/GenreSlice", () => {
    return (
        fetch(URL, options).then(response => response.json())
    )
})

export default fetchGenres;