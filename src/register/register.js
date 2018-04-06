import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
    render(){
        return(
            <div>
                <input type="text"/>
                <button>确认注册</button>
                <h1>
                    <Link to="/login">我有账号，我要登录</Link>
                </h1>
            </div>
        )
    }
}
export default Register