import {createSlice} from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        newsList: ['无数据'],
    },

    reducers: {
        getNewsList(state, {payload}) {
            console.log(payload);
        }
    }
})

export const {getNewsList} = homeSlice.actions;
export default homeSlice.reducer