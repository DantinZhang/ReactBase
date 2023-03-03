import React, { PureComponent } from 'react'
import loginAuth from './loginAuth';


export class HOC extends PureComponent {
    render() {
        return (
            <div>
                <h2>子组件1：HOC</h2>
            </div>
        )
    }
}

const newHOC = loginAuth(HOC);
export default newHOC;