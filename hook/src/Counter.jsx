import React, { memo, useState } from 'react';


const Counter = memo(() => {
    let [counter, setCounter] = useState(99);
    let [newsList, setNewsList] = useState(['体育','娱乐']);
    let [userInfo, setUserInfo] = useState({name:'zzy',age:18});

    function changeNum() {
        setCounter(counter - 1);
    }
    return (
        <div>
            <h2>Counter：{counter}</h2>
            <button onClick={() => setCounter(counter+1)}>点击让Counter+1</button>
            <button onClick={changeNum}>点击让Counter-1</button>
            <h3>{newsList}</h3>

            <h3>{userInfo.name}-{userInfo.age}</h3>
        </div>
    )
})

export default Counter