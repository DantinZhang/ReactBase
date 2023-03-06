import {CHANGECOUNTER, SUBTRACT,REQNEWSLIST} from './constants'
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
export {change,subtract,reqNewsList}