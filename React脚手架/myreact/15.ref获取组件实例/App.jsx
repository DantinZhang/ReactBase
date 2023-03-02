import {createRef, PureComponent ,forwardRef} from 'react';

// class Son extends PureComponent {
//     sayHi() {
//         console.log('Hi,I am son');
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Son组件</h1>
//             </div>
//         )
//     }
// }

const Son = forwardRef(function(props, ref) {
    return (
        <div>
            <h1 ref={ref}>我是函数儿子</h1>
        </div>
    )
})

export class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            name: 'zzy',
            age: 18,
        }

        this.myRef = createRef(); //第1步.创建ref对象
    }

    getDOM() {
        //第3步.通过this.myRef.current拿到当前东西
        console.log(this.myRef.current);//current以最后一个为主
        // this.myRef.current.sayHi(); //拿到子组件并调用其中的方法Hi,I am son
    }

    render() {
        return (
            <div>
                {/* 第2步：把创建的对象给ref属性 */}
                <Son ref={this.myRef}/>
                <button onClick={() => this.getDOM()}>点击获取组件</button>
            </div>
        )
    }
}

export default App