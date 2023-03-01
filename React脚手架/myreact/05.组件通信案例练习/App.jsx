import React from 'react';
import Navigation from './Components/Navigation'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            navList: ['新款', '精选', '流行'],
            index: 0,
        }
    }
    getContent(index) {
        this.setState({
            index
        })
    }
    render() {
        let { navList, index } = this.state;
        return (
            <div>
                <Navigation navList={navList} getContent={(index) => this.getContent(index)} />
                <h2>{navList[index]}</h2>
            </div>
        )
    }
}

export default App;