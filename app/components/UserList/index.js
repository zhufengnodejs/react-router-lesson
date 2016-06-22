import React from 'react';
import {Link} from 'react-router';
export default class UserList extends React.Component {

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/user/detail/1">用户1</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/user/detail/2">用户2</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

