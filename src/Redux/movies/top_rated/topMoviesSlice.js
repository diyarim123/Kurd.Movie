//importing redux
import { createSlice } from "@reduxjs/toolkit";


//importing the fetch function
import fetchTopMovies from "./topMoviesAsync"


const initialState = {
    topIsLoading : false,
    top_movies : [],
    topError : ""
}

const topMoviesSlice = createSlice({
    name : "upComing_movies",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchTopMovies.pending, state => {
            state.topIsLoading = true
            state.top_movies = []
            state.topError = ""
        })
        builder.addCase(fetchTopMovies.fulfilled, (state, action) => {
            state.topIsLoading = false
            state.top_movies = action.payload
            state.topError = ""
        })
        builder.addCase(fetchTopMovies.rejected, (state, action) => {
            state.topIsLoading = false
            state.top_movies = []
            state.topError = action.error.message
        })
    }
})

export default topMoviesSlice.reducer;