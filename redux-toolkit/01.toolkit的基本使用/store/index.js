import {configureStore} from '@reduxjs/toolkit';
//导入reducer
import loginReducer from './modules/login';

const store = configureStore({
    reducer: {
        login: loginReducer,
    },

    devTools: true, //默认就是true
})

export default store;