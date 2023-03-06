import {CHANGECOUNTER, SUBTRACT,REQNEWSLIST} from './constants'
import axios from 'axios';
const change = (num) => {
    return {
        type: CHANGECOUNTER,
        num: num
    }
}

const subtract = (dj) => {
    return {
        type: SUBTRACT,
        dj
    }
}

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
export {change,subtract,reqNewsListFun}