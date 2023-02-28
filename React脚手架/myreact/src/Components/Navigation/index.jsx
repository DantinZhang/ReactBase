import React, { Component } from 'react'
import './Navigation.scss';
export class Navigate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    }
  }

  changeIndex(index) {
    this.setState({
      currentIndex: index
    })
    this.props.getContent(index);
  }

  render() {
    let { currentIndex } = this.state;
    let { navList } = this.props
    return (
      <div className='nav'>
        {navList.map((nav, index) => {
          return (
            <div
              key={nav}
              className={`title ${currentIndex === index ? 'active' : ''}`}
              onClick={() => this.changeIndex(index)}
            >
              {nav}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Navigate