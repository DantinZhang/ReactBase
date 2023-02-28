import React from 'react';

class HelloReact extends React.Component {
    constructor() {
        console.log('HR-constructor')
        super();
        this.state = {
            name: 'react'
        }
    }

    render() {
        console.log('HR-render')
        return (
            <div>
                <h2>Hello React!</h2>
            </div>
        )
    }

    componentDidMount() {
        console.log('HR-componentDidMount')
    }

    componentDidUpdate() {
        console.log('HR-componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('HR-componentWillUnmount')
    }
}

export default HelloReact