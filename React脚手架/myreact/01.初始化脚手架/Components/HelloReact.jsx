import React from 'react';

class HelloReact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'react'
        }
    }

    render() {
        return (
            <div>
                <h2>Hello React!</h2>
            </div>
        )
    }
}

export default HelloReact