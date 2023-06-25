//importing redux
import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchTodaySeries from "./todaySeriesAsync"


const initialState = {
    newIsLoading : false,
    new_series : [],
    newError : ""
}

const todaySeriesSlice = createSlice({
    name : "today_series",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchTodaySeries.pending, state => {
            state.newIsLoading = true
            state.new_series = []
            state.newError = ""
        })
        builder.addCase(fetchTodaySeries.fulfilled, (state, action) => {
            state.newIsLoading = false
            state.new_series = action.payload
            state.newError = ""
        })
        builder.addCase(fetchTodaySeries.rejected, (state, action) => {
            state.newIsLoading = false
            state.new_series = []
            state.newError = action.error.message
        })
    }
})

export default todaySeriesSlice.reducer;