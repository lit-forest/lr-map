import React, { Component } from 'react';

class Signal extends Component {
    
    componentWillMount() {
        console.log('I am Signal');
    }
    
    render() {
        return (
            <div>
                <h1>Signal</h1>
            </div>
        );
    }
}

export default Signal;