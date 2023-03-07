import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//异步操作的处理
export const reqNewsList = createAsyncThunk('reqData', async () => {
    const result = await axios.get('https://ku.qingnian8.com/dataApi/news/newslist.php')
    return result.data;
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        newsList: ['无数据'],
    },

    reducers: {
        getNewsList(state, {payload}) {
            console.log(payload);
            state.newsList = payload;
        }
    },

    //监听异步的状态变化
    extraReducers: {
        [reqNewsList.pending](state, {payload}) {
            console.log('异步处于pending状态');
        },
        [reqNewsList.fulfilled](state, {payload}) {
            console.log(payload);
            state.newsList = payload;
        },
        [reqNewsList.rejected](state, {payload}) {
            console.log('异步处于rejected状态，有错误！');
        },
    }
})

export const {getNewsList} = homeSlice.actions;
export default homeSlice.reducer;

