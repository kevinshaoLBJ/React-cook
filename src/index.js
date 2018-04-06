import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login/login';
import Register from './register/register';
import Content from './content/content';
import {Router, Route} from 'react-router';
import createHashHistory from 'history/createHashHistory';
const customHistory = createHashHistory();
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router history={customHistory}>
        <div>
            <Route path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/content" component={Content}/>

            {/*<Redirect to="/App"/>*/}
        </div>
    </Router>), document.getElementById('root'));
// registerServiceWorker();
