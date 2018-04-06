import React, {Component} from 'react';
import Tittle from './tittle/tittle';
import {Link} from 'react-router-dom';
import './App.css';
import createHashHistory from 'history/createHashHistory';
const customHistory = createHashHistory();


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            second: 0,
            isLogin: false,
            value: '15339121539',
            content: {}
        }
    }

    tick() {
        this.setState(prevState => ({
            second: prevState.second + 1
        }));
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000)
    }

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    getResult = () => {
        // 极速数据手机号查询接口-----
        // fetchJsonp('http://api.jisuapi.com/shouji/query?shouji=' + this.state.value + '&appkey=abdf02e5b0a4dd78',
        //     {
        //         method: 'GET', mode: "no-cors", jsonpCallback: 'callback'
        //     }
        // ).then((response) => response.json())
        //     .then((res) => {
        //         console.log(res)
        //         var path = {
        //             pathname: '/content/' + JSON.stringify(res),
        //         }
        //         customHistory.push(path)
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        // ----------------------------
        // 阿里新闻接口------
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            isLogin: !this.state.isLogin
        });
    }
    homeClick = () => {
        this.setState({
            isLogin: !this.state.isLogin
        });
        alert("还没有内容呢!")
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <div className="row">
                            <Tittle/>
                            <div className="col-sm-2 col-sm-offset-2 login">
                                {
                                    this.state.isLogin ? <a onClick={this.homeClick}>随便看看</a>
                                        : <div>
                                        <Link to="/register" onClick={this.handleClick}>注册 /</Link>
                                        <Link to="/login" onClick={this.handleClick}> 登录</Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="searchIn">
                        <div className="searchInput">
                            <input type="text" defaultValue={this.state.value} className="form-control"
                                   onChange={this.handleChange} ref="myTextInput" placeholder="Search 手机号"/>
                            <button className="btn btn-primary" onClick={this.getResult}>Go!</button>
                        </div>
                    </div>
                </header>
                <div>
                    <h4 style={styles.nav}>
                        {this.state.value + '/&&&/'}<span>{this.state.second}</span>
                    </h4>
                    <div style={styles.head}>
                        <h1>
                            <Link style={styles.linkNews} to="/content" >新闻</Link>
                        </h1>
                        <h1>音乐</h1>
                        <h1>综艺</h1>
                        <h1>电影</h1>
                        <h1>体育</h1>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}
const styles = {
    nav: {
        margin: '0',
        padding: '20px',
        backgroundColor: '#6C7B8B'
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: '20px',
        backgroundColor: '#6C7B8B',
    },
    linkNews:{
        color:'#333333'
}
}

