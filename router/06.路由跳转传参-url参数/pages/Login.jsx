import React, { PureComponent } from 'react'
import enhanceUseNavigate from '../utils/enhanceUseNavigate';;

export class Login extends PureComponent {
  render() {
    let { query } = this.props.router;
    return (
      <div>
        <h1>Login</h1>
        <h2>拿到query参数！{query.name}-{query.age}</h2>
      </div>
    )
  }
}

export default enhanceUseNavigate(Login)