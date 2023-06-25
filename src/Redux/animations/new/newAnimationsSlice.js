//importing redux
import { createSlice } from "@reduxjs/toolkit";


//import the fetch function
import fetchNewAnimations from "./newAnimationsAsync";


const initialState = {
    newIsLoading : false,
    new_animations : [],
    newError : ""
}

const newAnimationsSlice = createSlice({
    name : "new_animations",
    initialState : initialState,
    reducer : {

    },
    extraReducers : builder => {
        builder.addCase(fetchNewAnimations.pending, state => {
            state.newIsLoading = true
            state.new_animations = []
            state.newError = ""
        })
        builder.addCase(fetchNewAnimations.fulfilled, (state, action) => {
            state.newIsLoading = false
            state.new_animations = action.payload
            state.newError = ""
        })
        builder.addCase(fetchNewAnimations.rejected, (state, action) => {
            state.newIsLoading = false
            state.new_animations = []
            state.newError = action.error.message
        })
    }
})

export default newAnimationsSlice.reducer;