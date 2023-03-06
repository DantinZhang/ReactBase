import * as actionTypes from './constants'

let initialState = {
    counter: 1,
    newsList: [],
}
function reducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.CHANGECOUNTER:
            return {...state, counter:state.counter + action.num};
        case actionTypes.SUBTRACT:
            return {...state, counter:state.counter + action.dj};
        case actionTypes.REQNEWSLIST:
            return {...state, newsList:action.newsList};
        default:
            return state;
    }
}

export default reducer;