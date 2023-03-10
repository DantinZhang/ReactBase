import React, { memo, useRef } from 'react';

const App = memo(() => {
  //1.创建ref
  let titleRef = useRef();
  let inputRef = useRef();

  function showTitle() {
    // 3.拿到ref
    console.log(titleRef.current);
  }

  function focusInput() {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  return (
    <div>
      {/* 2.绑定ref */}
      <h1 ref={titleRef}>App</h1>
      <button onClick={showTitle}>查看App标题的dom</button>

      <input type="text" ref={inputRef}/>
      <button onClick={focusInput}>点击获取焦点</button>
    </div>
  )
})

export default App