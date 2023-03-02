//函数组件没有PureComponent，我们使用memo包裹实现相同效果
import React,{memo} from 'react';

const Son1 = memo(function() {
  console.log('Son1的render执行')
  return (
    <div>Son1</div>
  )
})

export default Son1