import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import * as draw from '../libs/draw';

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

let onDrawEnd = null;

class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: true,
            entertainment: true,
            subway: true,
            publicCar: true,
            school: false,
            hospital: false,
            hotel: false,
            scene: false
        }
        onDrawEnd = this.props.onDrawEnd;
    }
    drawEnable() {
        draw.drawEnable(onDrawEnd);
    }
    drawDisable() {
        draw.drawDisable();
    }
    checkHandle(key) {
        switch (key) {
            case 'food':
                this.setState({
                    food: !this.state.food
                });
                break;
            case 'entertainment':
                this.setState({
                    entertainment: !this.state.entertainment
                });
                break;
            case 'subway':
                this.setState({
                    subway: !this.state.subway
                });
                break;
            case 'publicCar':
                this.setState({
                    publicCar: !this.state.publicCar
                });
                break;
            case 'school':
                this.setState({
                    school: !this.state.school
                });
                break;
            case 'hospital':
                this.setState({
                    hospital: !this.state.hospital
                });
                break;
            case 'hotel':
                this.setState({
                    hotel: !this.state.hotel
                });
                break;
            case 'scene':
                this.setState({
                    scene: !this.state.scene
                });
                break;
            default:
                break;
        }
    }

    render() {
        let keys = '';
        // const {onDrawEnd} = this.props;
        // onDrawEnd('南京大学');
        if (this.state.food === true) {
            keys += '美食|'
        }
        if (this.state.entertainment === true) {
            keys += '娱乐|'
        }
        if (this.state.subway === true) {
            keys += '地铁|'
        }
        if (this.state.publicCar === true) {
            keys += '公交|'
        }
        if (this.state.school === true) {
            keys += '学校|'
        }
        if (this.state.hospital === true) {
            keys += '医院|'
        }
        if (this.state.hotel === true) {
            keys += '酒店|'
        }
        if (this.state.scene === true) {
            keys += '景点|'
        }
        draw.setKeys(keys);
        return (
            <div style={styles.root}>
                <div style={styles.item}>
                    <Checkbox
                        onCheck={() => this.checkHandle('food')}
                        defaultChecked={true}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/food.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/food_bw.png" />} />
                    <p>美食</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        onCheck={() => this.checkHandle('entertainment')}
                        defaultChecked={true}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/entertainment.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/entertainment_bw.png" />} />
                    <p>娱乐</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        onCheck={() => this.checkHandle('subway')}
                        defaultChecked={true}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/subway.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/subway_bw.png" />} />
                    <p>地铁</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        onCheck={() => this.checkHandle('publicCar')}
                        defaultChecked={true}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/scene.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/scene_bw.png" />} />
                    <p>公交</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        onCheck={() => this.checkHandle('school')}
                        defaultChecked={false}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/food.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/food_bw.png" />} />
                    <p>学校</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        onCheck={() => this.checkHandle('hospital')}
                        defaultChecked={false}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/entertainment.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/entertainment_bw.png" />} />
                    <p>医院</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        onCheck={() => this.checkHandle('hotel')}
                        defaultChecked={false}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/subway.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/subway_bw.png" />} />
                    <p>酒店</p>
                </div>
                <div style={styles.item}>
                    <Checkbox
                        onCheck={() => this.checkHandle('scene')}
                        defaultChecked={false}
                        style={styles.checkbox}
                        checkedIcon={<img style={styles.img} src="img/scene.png" />}
                        uncheckedIcon={<img style={styles.img} src="img/scene_bw.png" />} />
                    <p>景点</p>
                </div>
            </div>
        );
    }

    componentWillMount() {
        setTimeout(this.drawEnable, 200);
    }
    componentDidMount() {

    }
    componentWillUnmount() {
        this.drawDisable();
    }

}

Query.propTypes = {

};

export default Query;