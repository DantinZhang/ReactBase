import React, { PureComponent } from 'react'
import Home from './components/Home';
import Son from './components/Son';
import store from './store';
import {change} from './store/actionCreators'
export class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        //订阅store
        store.subscribe(() => {
            // console.log(store.getState());
            this.setState({
                counter: store.getState().counter
            })
        })
    }

    change(num) {
        store.dispatch(change(num));
    }

    render() {
        let { counter } = this.state;
        return (
            <div>
                <Home/>
                <h1>App</h1>
                <h2>{counter}</h2>
                <button onClick={() => this.change(1)}>点击+1</button>
                <Son />
            </div>

        )
    }
}

export default App;