import * as actionTypes from './constants'

let initialState = {
    newsList: [],
}
function reducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.REQNEWSLIST:
            return {...state, newsList:action.newsList};
        default:
            return state;
    }
}

export default reducer;