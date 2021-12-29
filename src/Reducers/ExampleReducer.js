import {createSlice} from '@reduxjs/toolkit';

// These slices are like actions and reducers in one
// Think of it like a componenet that every compentent has a state and functions to change the state, just any componant can access this componenet w/o having to chain pass it down
export const exampleSlice = createSlice({
    name: 'example', //the name of the state
    initialState: {exampleVal: 2}, // the inital state being passed in, when this state gets changed by the reducers the initalState gets changed as well
    reducers: { // the actions you want performed on the state
        // state = the state above / action = actions you passed into the function's argument 
        changeVal: (state, action) => {state.exampleVal = action.payload},
    } 
})

export default exampleSlice.reducer

export const {changeVal} = exampleSlice.actions

// we have alot to send but we send the action individually in a object if we want to use them