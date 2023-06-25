//importing redux
import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchGenres from "./GenreAsync";


const initialState = {
    genres_loading : false,
    genres_data : [],
    genres_err : ""
}

const GenreSlice = createSlice({
    name : "genres",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchGenres.pending, state => {
            state.genres_loading = true
            state.genres_data = []
            state.genres_err = ""
        })
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.genres_loading = false
            state.genres_data = action.payload
            state.genres_err = ""
        })
        builder.addCase(fetchGenres.rejected, (state, action) => {
            state.genres_loading = false
            state.genres_data = []
            state.genres_loading = action.error.message
        })
    }
})

export default GenreSlice.reducer;