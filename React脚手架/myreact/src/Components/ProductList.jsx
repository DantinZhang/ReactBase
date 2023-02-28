import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    console.log(this.props);
    const { age,title, productList } = this.props;
    return (
      <div>
        <h3>ProductList</h3>
        <div>{age}</div>
        <div>{title}</div>
        <ul>
          {productList.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

//props接收数据类型的限定
ProductList.propTypes = {
  title: PropTypes.string, 
  age: PropTypes.number.isRequired, //必须是数字类型，必须有
  productList: PropTypes.array,
}

//props接收数据的默认值
ProductList.defaultProps = {
  title: '我的网页的干活',
  productList: [],
}

export default ProductList