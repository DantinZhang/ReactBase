import React, { Component } from 'react';
import myContext from '../context';

function GrandSon() {
    return (
        <div>
            <h2>GrandSon</h2>
            <myContext.Consumer>
                {value => <h3>函数组件拿到{value.name}</h3>}
            </myContext.Consumer>
        </div>
    )
}

export default GrandSon