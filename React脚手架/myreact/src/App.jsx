import { PureComponent } from 'react';

export class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: 0,
            isAgree: false,
        }
    }

    submitData() {
        console.log('提交', this.state.userName, this.state.password,this.state.isAgree)
    }

    changeInput(e) {
        //如果拿单选框的数据，那么拿到的是布尔值checked
        const value = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        })
    }

    render() {
        let { userName, password,isAgree } = this.state;
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

                    {/* 3.单选框 */}
                    <input
                        type="checkbox"
                        name="isAgree"
                        id="man"
                        value="同意"
                        checked={isAgree}
                        onChange={(e) => this.changeInput(e)}
                    />
                    <label htmlFor="man">同意上述协议</label>
                </form>
                <button onClick={() => this.submitData()}>提交表单数据</button>
            </div>
        )
    }
}

export default App