import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reqNewsListFun } from '../store/Home/actionCreators'

export class Home extends PureComponent {
    componentDidMount() {
        this.props.getNewsList();
    }

    render() {
        let { homeNewsList } = this.props;
        console.log(homeNewsList)
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    {homeNewsList.map((item) => {
                        return <li key={item.id}>{item.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        homeNewsList: state.home.newsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNewsList() {
            dispatch(reqNewsListFun())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);