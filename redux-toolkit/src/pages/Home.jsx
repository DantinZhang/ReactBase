import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export class Home extends PureComponent {
  render() {
    const {newsList} = this.props;
    return (
      <div>
        <h2>Home</h2>
        <ul>
          {newsList.map(item => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    newsList: state.home.newsList
  }
}
export default connect(mapStateToProps)(Home)