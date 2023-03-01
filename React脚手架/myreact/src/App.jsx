import React from 'react';
import Son from './Components/Son';
import eventBus from './utils/event-bus';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
        }
    }
    //事件的回调
    getData(name,age) {
        console.log(name,age,this);
        this.setState({
            name: name, age: age
        })
    }
    //1.挂载完毕后绑定事件接收别的地方传过来的值
    componentDidMount() {
        eventBus.on('getData', this.getData.bind(this))
    }
    //3.销毁的时候解绑
    componentWillUnmount() {
        eventBus.off('getData', this.getData)
    }

    render() {
        let { name, age } = this.state;
        return (
            <div>
                <h1>{name}</h1>
                <h2>{age}</h2>
                <Son/>
            </div>
        )
    }
}

export default App