//importing redux
import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchPopAnimations from "./popAnimationsAsync";


const initialState = {
    popIsLoading : false,
    pop_animations : [],
    popError : ""
}

const popAnimationsSlice = createSlice({
    name : "popular_animations",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchPopAnimations.pending, state => {
            state.popIsLoading = true
            state.pop_animations = []
            state.popError = ""
        })
        builder.addCase(fetchPopAnimations.fulfilled, (state, action) => {
            state.popIsLoading = false
            state.pop_animations = action.payload
            state.popError = ""
        })
        builder.addCase(fetchPopAnimations.rejected, (state, action) => {
            state.popIsLoading = false
            state.pop_animations = []
            state.popError = action.error.message
        })
    }
})

export default popAnimationsSlice.reducer;