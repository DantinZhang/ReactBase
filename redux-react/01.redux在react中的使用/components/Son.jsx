import React, { PureComponent } from 'react';
import store from '../store';
import { subtract } from '../store/actionCreators';

export class Son extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  changeNum(num) {
    store.dispatch(subtract(num))
  }

  render() {
    let { Soncounter } = this.props;
    return (
      <div>
        <h1>Son</h1>
        <h2>{Soncounter}</h2>
        <button onClick={() => this.changeNum(-1)}>点击-1</button>
      </div>
    )
  }
}