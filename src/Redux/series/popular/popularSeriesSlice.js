//importing redux
import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchPopularSeries from "./popularSeriesAsync";


const initialState = {
    popIsLoading : false,
    pop_series : [],
    popError : ""
}

const popularSeriesSlice = createSlice({
    name : "popular_series",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchPopularSeries.pending, state => {
            state.popIsLoading = true
            state.pop_series = []
            state.popError = ""
        })
        builder.addCase(fetchPopularSeries.fulfilled, (state, action) => {
            state.popIsLoading = false
            state.pop_series = action.payload
            state.popError = ""
        })
        builder.addCase(fetchPopularSeries.rejected, (state, action) => {
            state.popIsLoading = false
            state.pop_series = []
            state.popError = action.error.message
        })
    }
})

export default popularSeriesSlice.reducer;