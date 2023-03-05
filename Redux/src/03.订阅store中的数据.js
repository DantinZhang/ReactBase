const store = require('./store');

//订阅数据的改变
const unsubscribe = store.subscribe(() => {
    console.log('数据变化了，变成了：', store.getState());
})
// console.log(store.getState());

//修改store中的数据：必须action
store.dispatch({ type: 'changeName', name: 'ht' });

// console.log(store.getState());
//一般在销毁钩子中取消订阅
unsubscribe();

store.dispatch({ type: 'changeAge', age: 30 });

console.log(store.getState());