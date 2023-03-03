import React, { PureComponent } from 'react';
import appStyle from './App.module.css'
export class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            size: 20
        }
    }

    large() {
        this.setState({
            size: this.state.size + 5
        })
    }
    render() {
        let {size} = this.state;
        return (
            <div>
                {/* 1.style内联样式 */}
                <h1 style={{color:'red', fontSize: '30px'}}>奥里给</h1>
                <h2 style={{color:'skyblue', fontSize:`${size}px`}}>样式</h2>
                <button onClick={() => this.large()}>增大上面的字体</button>

                {/* 2.CSS模块化*/}
                <div className={appStyle.box}>
                    <h1>嗷嗷嗷</h1>
                </div>
            </div>
        )
    }
}

export default App