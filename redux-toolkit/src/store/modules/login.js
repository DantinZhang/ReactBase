import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name:'login',
    initialState: {
        counter: 99
    },
    //相当于reducer函数
    reducers: {
        //相当于每个case
        addNumber(state, action) {
            console.log(action);//{type: 'login/addNumber', payload: 1}
            //这里可以直接改不用浅拷贝，默认给你拷贝好了
            state.counter = action.payload;
        }
    }
})
//reducers里的方法会自动放在counterSlice的actions属性中，用于派发action
export const { addNumber } = loginSlice.actions;
//注意导出的是reducer，用于在index.js中对reducer进行组合
export default loginSlice.reducer