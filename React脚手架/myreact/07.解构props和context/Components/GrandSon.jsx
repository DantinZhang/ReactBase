import React, { Component } from 'react';
import GGrandSon from './GGrandSon';
import myContext from '../context';

export class GrandSon extends Component {
    render() {
        console.log('GrandSon',this.context);
        return (
            <div>
                <GGrandSon {...this.props}/>
            </div>
        )
    }
}

GrandSon.contextType = myContext;

export default GrandSon