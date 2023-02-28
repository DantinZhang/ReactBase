import React from 'react';
import Son from './Components/Son'

class App extends React.Component {
    getData(data) {
        console.log(data);
    }

    render() {
        return (
            <div>
                <Son getSonData={(data) => this.getData(data)}/>
            </div>
        )
    }
}

export default App;