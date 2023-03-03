import React, { PureComponent } from 'react';
import HOC from './HOC';
import HOC2 from './HOC2';

export class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>父组件App</h1>
                {/* 没登陆的话不展示，只有登录了才展示 */}
                <HOC />
                <HOC2 />
            </div>
        )
    }
}

export default App