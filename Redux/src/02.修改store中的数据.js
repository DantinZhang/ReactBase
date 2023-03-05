const store = require('./store');

console.log(store.getState());

//修改store中的数据
store.dispatch({type: 'changeName', name: 'ht'});

console.log(store.getState());

store.dispatch({type: 'changeAge', age: 30});

console.log(store.getState());