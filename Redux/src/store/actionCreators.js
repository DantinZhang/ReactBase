const {CHANGENAME, CHANGEAGE} = require('./store/constants');
// 把这些构造action的函数抽离出来，方便其他的地方使用

//通过回调函数给某个action自动生成对象，抽离出来
const changeAgeFun = (age) => {
    return {
        type: CHANGEAGE,
        age: age,
    }
}

//通过回调函数给某个action自动生成对象，抽离出来
const changeNameFun = (name) => {
    return {
        type: CHANGENAME,
        name
    }
}

module.exports = {
    changeAgeFun,
    changeNameFun
}