import { PureComponent } from 'react';

export class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            name: 'zzy',
            age: 18,
        }
    }

    changeInput(e) {
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        })
    }

    render() {
        let { name } = this.state;
        return (
            <div>
                {/* 1.受控组件 */}
                <input type="text" value={name} onChange={(e) => this.changeInput(e)}/>
                {/* 2.非受控组件 */}
                <input type="text" />

                <h1>{name}</h1>
            </div>
        )
    }
}

export default App