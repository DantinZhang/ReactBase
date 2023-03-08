import React, { PureComponent } from 'react';
import withRouter from '../withRouter';

export class Detail extends PureComponent {
  render() {
    let {params} = this.props;
    return (
      <div>
        <h1>Detail</h1>
        <h2>{params.id}</h2>
      </div>
    )
  }
}

export default withRouter(Detail)