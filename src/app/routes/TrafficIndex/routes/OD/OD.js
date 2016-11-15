import React, { Component, PropTypes } from 'react';
import Nav from '../../../../components/Nav/Nav';

class OD extends Component {

    componentWillMount() {
        console.log('I am OD!')
    }

    render() {
        return (
            <div>
                <Nav parentUrl={'/trafficIndex'} parentName={'流量指数'}></Nav>
                <h1>OD</h1>
            </div>
        );
    }
}

OD.propTypes = {

};

export default OD;