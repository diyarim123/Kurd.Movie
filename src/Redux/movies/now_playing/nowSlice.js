//importing redux
import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchNowMovies from "./nowAsync";


const initialState = {
    nowIsLoading : false,
    now_movies : [],
    nowError : ""
}

const nowMoviesSlice = createSlice({
    name : "now_movies",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchNowMovies.pending, state => {
            state.nowIsLoading = true
            state.now_movies = []
            state.nowError = ""
        })
        builder.addCase(fetchNowMovies.fulfilled, (state, action) => {
            state.nowIisLoading = false
            state.now_movies = action.payload
            state.nowError = ""
        })
        builder.addCase(fetchNowMovies.rejected, (state, action) => {
            state.nowIsLoading = false
            state.now_movies = []
            state.nowError = action.error.message
        })
    }
})

export default nowMoviesSlice.reducer;