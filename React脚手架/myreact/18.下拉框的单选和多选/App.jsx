import { PureComponent } from 'react';

export class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            fruit: ['apple']
        }
    }

    submitData() {
        console.log('提交', this.state.fruit)
    }

    handleFruitChange(e) {
        const options = Array.from(e.target.selectedOptions);
        const values = options.map(item => item.value);
        this.setState({
            fruit: values
        })
    }   

    render() {
        let { fruit } = this.state;
        return (
            <div>
                <form action="">
                    <select value={fruit} onChange={(e) => this.handleFruitChange(e)} multiple>
                        <option value="apple">苹果</option>
                        <option value="pear">莉</option>
                        <option value="peach">桃子</option>
                    </select>
                </form>
                <button onClick={() => this.submitData()}>提交表单数据</button>
            </div>
        )
    }
}

export default App