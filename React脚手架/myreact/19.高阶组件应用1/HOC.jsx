import React, { PureComponent } from 'react'

function enhanceUserInfo(OriginComponent) {
    class NewComponent extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                userInfo: {
                    name: 'zzy',
                    age: 18
                }
            }
        }

        render() {
            //把一些数据塞到你传进来的组件中
            return <OriginComponent {...this.props} {...this.state.userInfo}/>
        }
    }
    return NewComponent
}

function Component1(props) {
    return <h1>Component1: {props.name}-{props.age}-{props.flag}</h1>
}
const NewCom1 = enhanceUserInfo(Component1);

//也可以这样写
const NewCom2 = enhanceUserInfo(function(props) {
    return <h1>Component2: {props.name}-{props.age}-{props.sex}</h1>
})



export class HOC extends PureComponent {
    render() {
        return (
            <div>
                <h2>HOC</h2>
                {/* 如果在这里传值的话，传给的是NewComponent */}
                <NewCom1 flag='标识'/>
                <NewCom2 sex='男'/>
            </div>
        )
    }
}

export default HOC