import React, { PureComponent } from 'react';
import {createPortal} from 'react-dom';
import Model from './Model';

export class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>App渲染在root容器中</h1>
                {createPortal(<h2>我是h2我要渲染在zzy容器中</h2>, document.querySelector('#zzy'))}
                <Model>
                    <h1>数据结构</h1>
                    <h2>算法</h2>
                    <h3>冒泡排序</h3>
                </Model>
            </div>
        )
    }
}

export default App