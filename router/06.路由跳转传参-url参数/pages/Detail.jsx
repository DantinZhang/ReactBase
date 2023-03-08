import React, { PureComponent } from 'react';
import enhanceUseNavigate from '../utils/enhanceUseNavigate';

export class Detail extends PureComponent {
  render() {
    let { params } = this.props.router;
    console.log(params);//{id: '123'}
    return (
      <div>
        <h1>Detail</h1>
        <h2>收到路由跳转传来的参数：{params.id}</h2>
      </div>
    )
  }
}

export default enhanceUseNavigate(Detail)