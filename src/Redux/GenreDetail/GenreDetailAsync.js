import { createAsyncThunk } from "@reduxjs/toolkit";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGViOGZhOTA2NGU0MzdkM2MzMWYzMmQwYzk1OTgyZSIsInN1YiI6IjY0N2QxMzFkMjYzNDYyMDBkYzQyYWE2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xf47sgagxX8a8BU3LZ0s737y5wqL7OR352ZgKBX8YjA'
  }
};

const fetchGenreDetail = createAsyncThunk(
  "genreDetail/fetchGenreDetail",
  async ({ id, page }, thunkAPI) => {
    const URL = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`;
    
    const response = await fetch(URL,options, {signal : thunkAPI.signal});
    if (!response.ok) {
      throw new Error("Failed to fetch genre detail");
    }

    return response.json();
  }
);


export default fetchGenreDetail;
