import React, { memo } from 'react';
import { useState, useEffect } from 'react';


const Counter = memo(() => {
    let [counter, setCounter] = useState(99);
    let [message, setMessage] = useState('DJ drop');
    useEffect(() => {
        //当前回调会在页面渲染完成后重新执行，每次都重新执行
        document.title = counter;
        console.log('counter的值变了，我瞅见了！')
    },[counter])

    useEffect(() => {
        console.log('message的值改变了！我瞅见了！')
    },[message])

    useEffect(() => {
        console.log('counter和message的值都变了！我瞅见了！')
    },[counter,message])

    useEffect(() => {
        console.log('订阅了redux,绑定了某个事件A')
        return () => {
            console.log('取消订阅redux,解绑某个事件A')
        }
    },[])

    useEffect(() => {
        console.log('发送网络请求的逻辑')
    },[])

    function changeNum() {
        setCounter(counter - 1);
    }
    return (
        <div>
            <h2>Counter：{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>点击让Counter+1</button>
            <button onClick={changeNum}>点击让Counter-1</button>
            <button onClick={() => setMessage('the beat')}>改变message</button>
        </div>
    )
})
export default Counter