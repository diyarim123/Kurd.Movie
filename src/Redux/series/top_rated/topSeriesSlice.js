//importing redux
import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchTopSeries from "./topSeriesAsync";


const initialState = {
    topIsLoading : false,
    top_series : [],
    topError : ""
}

const topSeriesSlice = createSlice({
    name : "top_series",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchTopSeries.pending, state => {
            state.topIsLoading = true
            state.top_series = []
            state.topError = ""
        })
        builder.addCase(fetchTopSeries.fulfilled, (state, action) => {
            state.topIsLoading = false
            state.top_series = action.payload
            state.topError = ""
        })
        builder.addCase(fetchTopSeries.rejected, (state, action) => {
            state.topIsLoading = false
            state.top_series = []
            state.topError = action.error.message
        })
    }
})

export default topSeriesSlice.reducer;