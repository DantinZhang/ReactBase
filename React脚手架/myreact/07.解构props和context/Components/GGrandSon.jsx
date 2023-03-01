import React, { Component } from 'react'
import myContext from '../context';

export class GGrandSon extends Component {
    render() {
        console.log('GGrandSon',this.context)
        let {name, age} = this.props;
        return (
            <div>
                <h2>我拿到了数据</h2>
                <div>{name}-{age}</div>
            </div>
        )
    }
}

GGrandSon.contextType = myContext;

export default GGrandSon