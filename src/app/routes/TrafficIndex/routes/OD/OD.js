import React, { Component, PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Nav from '../../../../components/Nav/Nav';

class OD extends Component {

    componentWillMount() {
        console.log('I am OD!')
    }

    render() {
        return (
            <div>
                <Nav parentUrl={'/trafficIndex'} parentName={'流量指数'} nowName={'OD分析'}></Nav>
                <h1>OD</h1>
            </div>
        );
    }
}

OD.propTypes = {

};

export default OD;