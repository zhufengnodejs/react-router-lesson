import React from 'react';
import { render } from 'react-dom';
import {Router,Route,hashHistory,Link} from 'react-router';
import { App } from './containers';
import { Home,User,Profile } from './components';
import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
render(
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <Route path="home" component={Home}/>
            <Route path="user" component={User}/>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>
    ,root);
