import { PureComponent } from 'react';

export class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: 0,
        }
    }

    submitData() {
        console.log('提交', this.state.userName, this.state.password)
    }

    changeInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let { userName, password } = this.state;
        return (
            <div>
                <form action="">
                    {/* 1.用户名 */}
                    <label htmlFor="userName">用户名</label>
                    <input
                        type="text"
                        id='userName'
                        name='userName'
                        value={userName}
                        onChange={(e) => this.changeInput(e)}
                    />
                    {/* 2.密码 */}
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => this.changeInput(e)}
                    />
                </form>
                <button onClick={() => this.submitData()}>提交表单数据</button>
            </div>
        )
    }
}

export default App