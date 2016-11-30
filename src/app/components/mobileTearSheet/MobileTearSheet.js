import React, { Component, PropTypes } from 'react';

/**
 * @author sylvenas
 * @doc 类移动端容器样式
 * @class MobileTearSheet
 * @extends {Component}
 */
class MobileTearSheet extends Component {

    static contextTypes = {
        muiTheme: PropTypes.object.isRequired,
    };
    
    /**
     * @children 调用方传入的子组件
     * @returns 整个tear Sheet
     * @memberOf MobileTearSheet
     */
    render() {
        const {prepareStyles} = this.context.muiTheme;
        const {children} = this.props;
        const styles = {
            root: {
                marginBottom: 4,
                marginRight: 24,
                maxWidth: 360,
                width: '100%',
            },
            container: {
                height: this.props.height,
            }
        };

        return (
            <div style={prepareStyles(styles.root)}>
                <div style={prepareStyles(styles.container)}>
                    {children}
                </div>
            </div>
        );
    }
}

MobileTearSheet.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number
}
MobileTearSheet.defaultProps = {
    
}

export default MobileTearSheet;