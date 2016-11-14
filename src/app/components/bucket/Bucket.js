import React, { Component, PropTypes } from 'react';
import style from './bucket.css';
import { IndexLink, Link } from 'react-router';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 300,
        height: 500,
        overflowY: 'auto',
        cursor: 'pointer'
    }
};

const tilesData = [
    {
        img: 'img/01.jpg',
        title: '信号监控',
        route: '/signal',
    },
    {
        img: 'img/07.jpg',
        title: '指数流量',
        route: '/trafficIndex',
    },
    {
        img: 'img/03.jpg',
        title: '电警卡口',
        route: '/counter',
    },
    {
        img: 'img/04.jpg',
        title: '诱导发布',
        route: 'fancycrave1',
    },
    {
        img: 'img/05.jpg',
        title: '基本配置',
        route: 'Hans',
    },
    {
        img: 'img/06.jpg',
        title: '视频监控',
        route: 'fancycrave',
    },
    {
        img: 'img/07.jpg',
        title: '大数据',
        route: 'jill111',
    },
    {
        img: 'img/08.jpg',
        title: '设备运维',
        route: 'BkrmadtyaKarki',
    },
];

class Bucket extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log(this.props.child);
    }
    render() {
        if (this.props.child === null)
            return (
                <div id='modularCol' className={style.modular}>
                    <div style={styles.root}>
                        <GridList
                            cellHeight={100}
                            style={styles.gridList}
                            >
                            <Subheader>
                                <Link to={'/'}><div>首页</div></Link>
                            </Subheader>
                            {tilesData.map((tile) => (
                                <Link to={tile.route} key={tile.title} className={styles.link}>
                                    <GridTile
                                        title={<div className={style.title}>{tile.title}</div>}
                                        titlePosition="bottom"
                                        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
                                        <img src={tile.img} className={style.imgs} />
                                    </GridTile>
                                </Link>
                            ))}
                        </GridList>
                    </div>

                </div>
            );
        else
            return (
                <div id='modularCol' className={style.modular}>
                    {this.props.child}
                </div>
            );
    }
}

Bucket.propTypes = {
    child: PropTypes.element
}

export default Bucket;