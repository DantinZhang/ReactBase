import React from 'react';
import Navigation from './Components/Navigation'
import './Components/Navigation/Navigation.scss'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0,
        }
    }

    render() {
        const left = <div className="left">左边</div>;
        const middle = <div className="middle">中间</div>;
        const right = <div className="right">右边</div>;
        return (
            <div>
                {/* 1.第一种方式：通过props.children传react元素 */}
                {/* <Navigation>
                    <div className="left">左边</div>
                    <div className="middle">中间</div>
                    <div className="right">右边</div>
                </Navigation> */}

                {/* 2.第二种方式：直接通过props传react元素 */}
                <Navigation left={left} middle={middle} right={right}/>
            </div>
        )
    }
}

export default App;