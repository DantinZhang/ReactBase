import React from 'react'
import HOC from './HOC';

//接收一个组件作为参数，返回另一个组件
function high(Component) {
    class Handle extends React.PureComponent {
        render() {
            return (
                //可以做一些处理，比如统一在这里添加name属性
                <Component name='zzy'/>
            )
        }
    }
    return Handle;
}


class HelloWorld extends React.PureComponent {
    render() {
        console.log(this.props.name)
        return (
            <div>HelloWorld</div>
        )
    }
}

//1.返回一个类
const Dj = high(HelloWorld)

export class App extends React.PureComponent {
    render() {
        return (
            <div>
                {/* 2.对类进行实例化 */}
                <Dj/>
                <HOC/>
            </div>
        )
    }
}

export default App