import React from 'react';
import { render } from 'react-dom';
import {Router,Route,hashHistory,Link} from 'react-router';
import { App } from './containers';
import { Home,User,Profile,UserList,UserAdd,UserDetail } from './components';
import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
render(
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <Route path="home" component={Home}/>
            <Route path="user" component={User}>
                <Route path="list" component={UserList}/>
                <Route path="add" component={UserAdd}/>
                <Route path="detail/:id" component={UserDetail}/>
            </Route>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>
    ,root);
