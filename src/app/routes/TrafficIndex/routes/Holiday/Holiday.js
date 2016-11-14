import React, { Component, PropTypes } from 'react';
import Nav from '../../../../components/Nav/Nav';

class Holiday extends Component {

    componentWillMount() {
        console.log('Holiday')
    }

    render() {
        return (
            <div>
                <Nav parentUrl={'/trafficIndex'} parentName={'流量指数'}></Nav>
                <h1>Holiday</h1>
            </div>
        );
    }
}

Holiday.propTypes = {

};

export default Holiday;