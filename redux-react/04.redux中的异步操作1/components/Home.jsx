import React, { PureComponent } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { reqNewsList } from '../store/actionCreators'

export class Home extends PureComponent {
    componentDidMount() {
        axios.get('https://ku.qingnian8.com/dataApi/news/newslist.php').then(res => {
            console.log(res.data);
            this.props.getNewsList(res.data);
        })
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
        homeNewsList: state.newsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNewsList(newsList) {
            dispatch(reqNewsList(newsList))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);