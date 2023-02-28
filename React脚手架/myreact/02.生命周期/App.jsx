import React from 'react';
import HelloReact from './Components/HelloReact';

class App extends React.Component {
    constructor() {
        console.log('APP-constructor')
        super();
        this.state = {
            name: 'zzy'
        }
    }

    changeData() {
        this.setState({
            name: 'ht'
        })
    }

    render() {
        console.log('App-render');
        const { name } = this.state;
        return (
            <div>
                <h2>{name}</h2>
                <button onClick={() => this.changeData()}>点击修改数据</button>
                {name == 'zzy' && <HelloReact />}
            </div>
        )
    }

    componentDidMount() {
        console.log('App-componentDidMount')
    }

    componentDidUpdate() {
        console.log('App-componentDidUpdate')
    }
}

export default App;