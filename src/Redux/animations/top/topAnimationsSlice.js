//importing redux
import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchTopAnimations from "./topAnimationsAsync";


const initialState = {
    topIsLoading : false,
    top_animations : [],
    topError : ""
}

const topAnimationsSlice = createSlice({
    name : "top_animations",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchTopAnimations.pending, state => {
            state.topIsLoading = true
            state.top_animations = []
            state.topError = ""
        })
        builder.addCase(fetchTopAnimations.fulfilled, (state, action) => {
            state.topIsLoading = false
            state.top_animations = action.payload
            state.topError = ""
        })
        builder.addCase(fetchTopAnimations.rejected, (state, action) => {
            state.topIsLoading = false
            state.top_animations = []
            state.topError = action.error.message
        })
    }
})

export default topAnimationsSlice.reducer;