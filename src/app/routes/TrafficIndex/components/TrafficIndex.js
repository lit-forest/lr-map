import React, {Component, PropTypes} from 'react';

class TrafficIndex extends Component {
    
    componentWillMount() {
        console.log('I am TrafficIndex');
    }
    
    render() {
        return (
            <div>
                <h1>traffic index</h1>
            </div>
        )
    }
}

export default TrafficIndex;