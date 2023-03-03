import React, { PureComponent } from 'react';
import NiuBi from './style';

export class App extends PureComponent {
    render() {
        return (
            <NiuBi>
                <h1 className='nav'>导航栏</h1>
                <div className='box'>
                    <h2 className='title'>标题</h2>
                    <p className='content'>内容内容</p>
                </div>
            </NiuBi>
        )
    }
}

export default App