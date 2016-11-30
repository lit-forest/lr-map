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
        position: 'absolute',
        marginTop: -5,
        marginLeft: -17,
        backgroundColor: 'white'
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
                        defaultChecked={true}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/food.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/food_bw.png" />} />
                    <p>美食</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        defaultChecked={true}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/entertainment.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/entertainment_bw.png" />} />
                    <p>娱乐</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        defaultChecked={true}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/subway.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/subway_bw.png" />} />
                    <p>地铁</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        defaultChecked={true}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/scene.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/scene_bw.png" />} />
                    <p>景点</p>
                </div>
                <h1>qq</h1>
            </div>
        );
    }
}

Query.propTypes = {

};

export default Query;