import React,{createRef} from 'react';

export class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            name: 'zzy',
            age: 18,
        }

        this.myRef = createRef(); //第二种
        this.getRef = null;//第三种
    }

    getDOM() {
        //1.第一种：标签绑定ref属性，通过this.refs.属性名拿到
        console.log(this.refs.title);
        //2.第二种：提前创建ref对象，createRef()，把创建好的对象绑定到元素上
        console.log(this.myRef.current);//current以最后一个为主
        //3.第三种：通过函数拿到
        console.log(this.getRef);
    }

    render() {
        console.log('App的render执行')
        return (
            <div>
                {/* 1.第一种 */}
                <h1 ref='title'>h1标题</h1>
                {/* 2.第二种 */}
                <h2 ref={this.myRef}>h2标题</h2>
                <h3 ref={this.myRef}>h3标题</h3>
                {/* 3.第三种 */}
                <h4 ref={(el) => {this.getRef = el}}>h4标题</h4>
                
                <button onClick={() => this.getDOM()}>点击获取DOM</button>
            </div>
        )
    }
}

export default App