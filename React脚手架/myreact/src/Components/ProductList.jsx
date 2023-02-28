import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    console.log(this.props);
    const { title, productList } = this.props;
    return (
      <div>
        <div>ProductList</div>
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

export default ProductList