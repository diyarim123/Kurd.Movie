//importing createAsyncThunk
import { createAsyncThunk } from "@reduxjs/toolkit";


//import the URL
const URL = "https://api.themoviedb.org/3/discover/movie?api_key=20eb8fa9064e437d3c31f32d0c95982e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=undefined&with_genres=16&with_watch_monetization_types=flatrate&page=2"


const fetchPopAnimations = createAsyncThunk("/popAnimationsSlice", () => {
    return (
        fetch(URL).then(response => response.json()).then(data => data.results)
    )
})

export default fetchPopAnimations;