import React, { PureComponent } from 'react'
import enhanceContext from './enhanceContext';


export class HOC extends PureComponent {
    render() {
        return (
            <div>
                <h2>子组件1：HOC</h2>
                <h3>HOC拿到传过来的value：{this.props.name + this.props.age}</h3>
            </div>
        )
    }
}

const newHOC = enhanceContext(HOC);
export default newHOC;