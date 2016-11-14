import React, {Component, PropTypes} from 'react';

class OD extends Component {
    
    componentWillMount() {
        console.log('I am OD!')
    }
    
    render() {
        return (
            <div>
                <h1>OD</h1>
            </div>
        );
    }
}

OD.propTypes = {

};

export default OD;