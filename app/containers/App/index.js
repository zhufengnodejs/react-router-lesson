import React from 'react';
import {Link} from 'react-router';
class App extends React.Component {
    componentDidMount(){
      console.log('App componentDidMount');
    }

    componentWillReceiveProps(){
        console.log('App componentWillReceiveProps');
    }

    componentDidUpdate(){
        console.log('App componentDidUpdate');
    }
  render() {
    return (
      <div>
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div>
                      <ul className="nav navbar-nav">
                          <li><Link activeStyle={{color:'red'}} to="/home" >首页</Link></li>
                          <li><Link activeStyle={{color:'red'}}  to="/user" >用户管理</Link></li>
                          <li><Link activeStyle={{color:'red'}}  to="/profile" >个人设置</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div className="container">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
