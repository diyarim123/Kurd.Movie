//importing redux
import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchOnTheAirSeries from "./onTheAirSeriesAsync";


const initialState = {
    upIsLoading : false,
    up_series : [],
    upError : ""
}

const upComingSeriesSlice = createSlice({
    name : "on_the_air_series",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchOnTheAirSeries.pending, state => {
            state.upIsLoading = true
            state.up_series = []
            state.upError = ""
        })
        builder.addCase(fetchOnTheAirSeries.fulfilled, (state, action) => {
            state.upIsLoading = false
            state.up_series = action.payload
            state.upError = ""
        })
        builder.addCase(fetchOnTheAirSeries.rejected, (state, action) => {
            state.upIsLoading = false
            state.up_series = []
            state.upError = action.error.message
        })
    }
})

export default upComingSeriesSlice.reducer;