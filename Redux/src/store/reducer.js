const {CHANGENAME, CHANGEAGE} = require('./constants');

//初始化数据
const initialState = {
    name: 'zzy',
    age: 18
}

//定义reducer函数：纯函数
//参数1：store目前保存state
//参数2：本次需要更新的action（dispatch传过来的）
//返回值：作为store之后存储的state
function reducer(state = initialState, action) {
    // console.log('reducer', state, action)
    // reducer { name: 'zzy', age: 18 } { type: 'changeName', name: 'ht' }
   
    //1.第一种，if-else
    // if (action.type === 'changeName') {
    //     return { ...state, name: action.name };
    // }
    // if(action.type === 'changeAge') {
    //     let newState = {...state};
    //     newState.age = action.age;
    //     return newState;
    // }
    // return state;

    //2.第二种，switch-case
    switch(action.type) {
        case CHANGENAME:
            return { ...state, name: action.name };
        case CHANGEAGE:
            let newState = {...state};
            newState.age = action.age;
            return newState;
        default: 
            return state
    }
}

module.exports = {reducer};