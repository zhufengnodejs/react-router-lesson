import React from 'react';
import { render } from 'react-dom';
import {Router,Route,hashHistory,Link,IndexRoute,Redirect} from 'react-router';
import { App } from './containers';
import { Home,User,Profile,UserList,UserAdd,UserDetail } from './components';
import 'bootstrap/dist/css/bootstrap.css';
function handleEnter(nextLocation){
    if(nextLocation){
        console.log(`页面即将切换到${nextLocation.location.pathname}`);
    }
}
function handleLeave(nextLocation){
        console.log(`handleLeave`);
}
let root = document.getElementById('app');
render(
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="user" component={User}>
                <IndexRoute component={UserList}/>
                <Route path="list" component={UserList}/>
                <Route path="add" component={UserAdd} onEnter={handleEnter} onLeave={handleLeave}/>
                <Route path="/detail/:id" component={UserDetail}/>
                <Redirect from="detail/:id" to="/detail/:id"/>
            </Route>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>
    ,root);
