import React, { PureComponent } from 'react';
import NiuBi from './style';
import classNames from 'classnames';

export class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            color: 'pink',
            size: '60px',
        }
    }
    render() {
        let { color, size } = this.state;
        return (
            <NiuBi color={color} size={size}>
                <h1 className='nav'>导航栏</h1>
                <div className='box'>
                    <h2 className={classNames('title',{active:true})}>标题</h2>
                    <p className='content'>内容内容</p>
                </div>
            </NiuBi>
        )
    }
}

export default App