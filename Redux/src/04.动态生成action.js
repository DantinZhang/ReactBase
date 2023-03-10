const store = require('./store');
const {changeAgeFun, changeNameFun} = require('./store/actionCreators');
const {CHANGENAME, CHANGEAGE} = require('./store/constants');
//订阅数据的改变
const unsubscribe = store.subscribe(() => {
    console.log('数据变化了，变成了：', store.getState());
})

//修改store中的数据：必须action
store.dispatch({ type: CHANGENAME, name: 'ht' });
store.dispatch({ type: CHANGEAGE, age: 30 });
store.dispatch(changeAgeFun(666));
store.dispatch(changeNameFun('james'));

//一般在销毁钩子中取消订阅
unsubscribe();