import React, { PureComponent } from 'react';
import HOC from './HOC';
import HOC2 from './HOC2';
import myContext from './context'

export class App extends PureComponent {
    render() {
        return (
            <div>
                <h1>父组件App</h1>
                <myContext.Provider value={{ name: 'zzy', age: 18 }}>
                    <HOC/>
                    <HOC2/>
                </myContext.Provider>
            </div>
        )
    }
}

export default App