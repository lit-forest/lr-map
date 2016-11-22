import React, { Component, PropTypes } from 'react';
import styles from './rbox.css';

class Rbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div id="rbox" className={this.state.show ? styles.rboxShow : styles.rboxNone}>
                <div className={styles.panCtrl} onClick={() => this.toggle()}>
                    <i className={styles.fa + ' ' + (this.state.show ? styles.faChevronUp : styles.faChevronDown)} id="contractionInsideBtnUp"></i>
                </div>
            </div>
        );
    }
}

Rbox.propTypes = {

};

export default Rbox;