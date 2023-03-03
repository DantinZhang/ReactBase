import React, { PureComponent } from 'react'
import computeInterval from './computeInterval';


export class HOC extends PureComponent {
    render() {
        return (
            <div>
                <h2>子组件1：HOC</h2>
            </div>
        )
    }
}

const newHOC = computeInterval(HOC);
export default newHOC;