import {CHANGECOUNTER, SUBTRACT} from './constants'
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
export {change,subtract}