import {configureStore} from '@reduxjs/toolkit';
//导入reducer
import loginReducer from './modules/login';
import homeReducer from './modules/home';

const store = configureStore({
    reducer: {
        login: loginReducer,
        home: homeReducer,
    },

    devTools: true, //默认就是true
})

export default store;