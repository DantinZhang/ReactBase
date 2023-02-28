import React from 'react';
import HelloReact from './Components/HelloReact';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'zzy'
        }
    }

    render() {
        return (
            <div>
                <h2>奥里给</h2>
                <button>按钮</button>
                <HelloReact/>
            </div>
        )
    }
}

export default App;