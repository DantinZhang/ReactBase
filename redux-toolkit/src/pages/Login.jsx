import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { addNumber } from '../store/modules/login';

export class Login extends PureComponent {
    
    changeNum(num) {
        this.props.change(num);
    }
 
    render() {
    let {counter} = this.props;
    return (
      <div>
        <h2>Login</h2>
        <h2>{counter}</h2>
        <button onClick={() => this.changeNum(1)}>修改Login仓库中counter的值</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.login.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change(num) {
            dispatch(addNumber(num))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)