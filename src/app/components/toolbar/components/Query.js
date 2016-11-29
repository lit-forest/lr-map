import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const styles = {
    root: {
        position: 'absolute',
        top: '58px',
        right: '0px',
        width: '310px',
        background: 'rgb(255, 255, 255)',
        padding: '12px',
        borderRadius: '2px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px, rgba(0, 0, 0, 0.188235) 0px 2px 6px 0px'
    },
    item: {
        width: '60px',
        float: 'left',
        margin: '2px 7px',
        textAlign: 'center',
        cursor: 'pointer'
    },
    img: {
        position:'absolute',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginTop: -5,
        marginLeft: -17
    },
    checkbox: {
        marginTop: 10,
        marginLeft: 20
    }
}

class Query extends Component {
    render() {
        return (
            <div style={styles.root}>
                <div style={styles.item}>
                    <Checkbox
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/meishi.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/meishi_bw.png" />} />
                        <p>美食</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/hotel.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/hotel_bw.png" />} />
                        <p>酒店</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/scene.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/scene_bw.png" />} />
                        <p>景点</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/residence.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/residence_bw.png" />} />
                        <p>小区</p>
                </div>
                <h1>qq</h1>
            </div>
        );
    }
}

Query.propTypes = {

};

export default Query;