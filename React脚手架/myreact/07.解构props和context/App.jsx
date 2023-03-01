import React, { Component } from 'react'
import Son from './Components/Son';
import myContext from './context'

export class App extends Component {
    constructor() {
        super();
        this.state = {
            person: { name: 'zzy', age: 18 }
        }
    }
    render() {
        let { person } = this.state;
        return (
            <div>
                {/* 1.第一种传递方式，繁琐 */}
                {/* <Son name={person.name} age={person.age}/> */}
                {/* 2.第二种传递方式：直接解构 */}
                {/* <Son {...person}/> */}

                {/* 3.第三种传递方式：context */}
                <myContext.Provider value={{name:'ht', age:'10'}}>
                    <Son/>
                </myContext.Provider>
            </div>
        )
    }
}

export default App