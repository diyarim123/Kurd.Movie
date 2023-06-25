import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchGenreDetail from "./GenreDetailAsync";

const initialState = {
    genre_isLoading : false,
    genre_data : [],
    genre_error : ""
}

const GenreDetailSlice = createSlice({
    name : "genre",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchGenreDetail.pending, state => {
            state.genre_isLoading = true
            state.genre_data = []
            state.genre_error = ""
        })
        builder.addCase(fetchGenreDetail.fulfilled, (state, action) => {
            state.genre_isLoading = false
            state.genre_data = action.payload
            state.genre_error = ""
        })
        builder.addCase(fetchGenreDetail.rejected, (state, action) => {
            state.genre_isLoading = false
            state.genre_data = []
            state.genre_error = action.error.message
        })
    }

})


export default GenreDetailSlice.reducer;