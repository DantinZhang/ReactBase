import React from 'react';
import Son1 from './Son1';
import Son2 from './Son2';

export class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            name: 'zzy',
            age: 18,
        }
    }

    changeName() {
        this.setState({
            // name: 'zzy',
            name: 'ht'
        })
    }

    render() {
        console.log('App的render执行')
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.changeName()}>点击修改名字</button>
                <Son1 />
                <Son2 name={this.state.name} age={this.state.age} />
            </div>
        )
    }
}

export default App