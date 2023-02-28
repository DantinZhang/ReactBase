import React, { Component } from 'react'
import ProductList from './ProductList';
import Banner from './Banner';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      banner: ['动作射击', '角色扮演', '策略运营'],
      productList: ['古墓丽影','镜之边缘','神秘海域','奥里给']
    }
  }

  render() {
    const { banner, productList } = this.state;
    return (
      <div>
        <h2>Main</h2>
        <Banner banner={banner} />
        <ProductList age={18} title="商品列表" productList={productList}/>
        <ProductList age={10}/>
      </div>
    )
  }
}

export default Main;
