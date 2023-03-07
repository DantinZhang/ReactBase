import {REQNEWSLIST} from './constants'
import axios from 'axios';

const reqNewsList = (newsList) => {
    return {
        type: REQNEWSLIST,
        newsList,
    }
}

const reqNewsListFun = () => {
    return (dispatch, getState) => {
        axios.get('https://ku.qingnian8.com/dataApi/news/newslist.php').then(res => {
            console.log(res.data, getState().counter);
            dispatch(reqNewsList(res.data));
        })
    }
}
export {reqNewsListFun}