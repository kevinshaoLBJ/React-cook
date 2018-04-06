import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './login.css';

class Login extends Component {
    componentWillMount(){
        alert('欢迎进入登录页面')
    }
    componentWillUnmount(){
        alert('离开登录页面')
    }
    render() {
        return (
            <div>
                <div className="loginForm container">
                    <div>
                        账号：<input type="text" placeholder="电话/邮箱/账号"/>
                    </div>
                    <div>
                        密码：<input type="password" ref="myPassword"/>
                    </div>
                    <div>
                        <button onClick={this.getPassword}>登录</button>
                    </div>
                    <h1>
                        <Link to="/register">我没有账号，我要注册</Link>
                    </h1>
                </div>
            </div>
        )
    }
   getPassword = () => {
       let passText=this.refs.myPassword.value
        console.log(passText)
   }
}
export default Login