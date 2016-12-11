import React, {Component, PropTypes} from 'react';

const styles = {
    panel: {
        position: 'absolute',
        top: '58px',
        right: '0px',
        width: '310px',
        background: 'rgb(255, 255, 255)',
        padding: '12px',
        borderRadius: '2px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px, rgba(0, 0, 0, 0.188235) 0px 2px 6px 0px'
    }
}

class More extends Component {
    render() {
        return (
            <div style={styles.panel}>
                <h1>More</h1>
            </div>
        );
    }
}

More.propTypes = {

};

export default More;