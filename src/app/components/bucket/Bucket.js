import React, { Component, PropTypes } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    root: {
        zIndex: 2000,
        position: 'absolute',
        right: '0px',
        bottom: '130px',
        height: '560px',
        width: '330px',
        opacity: 1,
        boxShadow: '-2px 2px 6px rgba(0,0,0,.3)',
        userSelect: 'none',
        backgroundColor: 'white',
    },
    pos:{
        position:'absolute',
        top:250,
        left:-20
    },
    show: {
        marginRight: 20,
    }
}

class Bucket extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {child} = this.props;
        return (
            <div style={style.root}>
                {child}
                <div style={style.pos}>
                    <FloatingActionButton backgroundColor={'#EBE3D8'} mini={true} style={style.show}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}

Bucket.propTypes = {
    child: PropTypes.element.isRequired,
};

export default Bucket;