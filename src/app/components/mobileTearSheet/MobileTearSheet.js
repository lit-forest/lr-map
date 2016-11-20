import React, { Component, PropTypes } from 'react';

class MobileTearSheet extends Component {

    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };
    render() {
        const {prepareStyles} = this.context.muiTheme;

        const styles = {
            root: {
                marginBottom: 24,
                marginRight: 24,
                maxWidth: 360,
                width: '100%',
            },
            container: {
                height: this.props.height,
                overflow: 'hidden',
            },
            bottomTear: {
                display: 'block',
                position: 'relative',
                marginTop: -10,
                maxWidth: 360,
            },
        };

        return (
            <div style={prepareStyles(styles.root)}>
                <div style={prepareStyles(styles.container)}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

MobileTearSheet.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number.isRequired,
}
MobileTearSheet.defaultProps = {
    height: 500,
}

export default MobileTearSheet;