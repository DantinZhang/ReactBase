import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reqNewsList } from '../store/modules/home';

export class Home extends PureComponent {
  componentDidMount() {
    this.props.getNewsList();
  }

  render() {
    const {newsList} = this.props;
    return (
      <div>
        <h2>Home</h2>
        <ul>
          {newsList.map((item,index) => {
            return <li key={index}>{item.title}</li>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getNewsList() {
      dispatch(reqNewsList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)