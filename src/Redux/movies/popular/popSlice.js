//importing redux
import { createSlice } from "@reduxjs/toolkit";


//importing the action
import fetchPopularMovies from "./popAsync";



const initialState = {
    popIsLoading : false,
    pop_movies : [],
    popError : ""
}


const popularMoviesSlice = createSlice({
    name : "popular_movies",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchPopularMovies.pending, state => {
            state.popIsLoading = true
            state.pop_movies = []
            state.popError = ""
        })
        builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.popIsLoading = false
            state.pop_movies = action.payload
            state.popError = ""
        })
        builder.addCase(fetchPopularMovies.rejected, (state, action) => {
            state.popIsLoading = false
            state.pop_movies = []
            state.popError = action.error.message
        })
    }
})


export default popularMoviesSlice.reducer;