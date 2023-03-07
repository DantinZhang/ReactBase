import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import loginReducer from './Login';
import homeReducer from './Home';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    login: loginReducer,
    home: homeReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;