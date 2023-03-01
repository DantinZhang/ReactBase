import React from 'react';
import eventBus from '../utils/event-bus';

export class GrandSon extends React.Component {
    sendData() {
        //2.某个组件中触发事件并传值
        eventBus.emit('getData', 'zzy', 18)
    }
    render() {
        return (
            <div>
                <h1>GrandSon组件</h1>
                <button onClick={() => this.sendData()}>点击传值给App</button>
            </div>
        )
    }
}

export default GrandSon