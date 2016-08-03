import React from 'react';
import {Link} from 'react-router';
export default class User extends React.Component {
    componentDidMount(){
        console.log('User componentDidMount');
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-4">
                    <ul className="nav nav-tabs nav-stacked">
                        <li><Link to="/user/list" query={{orderBy:'id'}} >用户列表</Link></li>
                        <li><Link to="/user/add" >新增用户</Link></li>
                    </ul>
                </div>
                <div className="col-xs-8">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

