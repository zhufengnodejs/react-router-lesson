import React from 'react';

export default class Home extends React.Component {
    componentDidMount(){
        console.log('Home componentDidMount');
    }

    componentWillUnmount(){
        console.log('Home componentWillUnmount');
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

