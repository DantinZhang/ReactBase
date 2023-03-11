import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name:'home',
    initialState: {
        counter: 0,
        message: 'hello'
    },
    reducers: {
        addNumber(state, action) {
            state.counter += action.payload;
        },
        changeMsg(state, {payload}) {
            state.message = payload;
        }
    }
})

export const {addNumber,changeMsg} = homeSlice.actions;

export default homeSlice.reducer; 