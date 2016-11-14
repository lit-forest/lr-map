import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import MobileTearSheet from '../../../components/mobileTearSheet/MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import styles from './trafficIndex.css';

class TrafficIndex extends Component {

    componentWillMount() {
        console.log('I am TrafficIndex');
    }

    render() {
        return (
            <div>
                <Subheader>
                    <Link to={'/'} >
                        <IconButton className={styles.arrow_left}><ArrowLeft color={'#551A8B'} /></IconButton>
                        <div className={styles.back}>首页</div>
                    </Link>
                </Subheader>

                <MobileTearSheet>
                    <List>
                        <Subheader>交通规律专题</Subheader>
                        <ListItem
                            primaryText="道路施工"
                            leftAvatar={<Avatar src="img/ok-128.jpg" />}
                            rightIcon={<ArrowRight />}
                            />
                        <ListItem
                            primaryText="交通管制"
                            leftAvatar={<Avatar src="img/kolage-128.jpg" />}
                            rightIcon={<ArrowRight />}
                            />
                        <ListItem
                            primaryText="交通事故"
                            leftAvatar={<Avatar src="img/uxceo-128.jpg" />}
                            rightIcon={<ArrowRight />}
                            />
                        <ListItem
                            primaryText="节假日交通"
                            leftAvatar={<Avatar src="img/kerem-128.jpg" />}
                            rightIcon={<ArrowRight />}
                            />
                        <ListItem
                            primaryText="OD分析"
                            leftAvatar={<Avatar src="img/raquelromanp-128.jpg" />}
                            rightIcon={<ArrowRight />}
                            />
                    </List>
                    <Divider />
                    <List>
                        <Subheader>系统配置</Subheader>
                        <ListItem
                            primaryText="区域配置"
                            leftAvatar={<Avatar src="img/chexee-128.jpg" />}
                            rightIcon={<ArrowRight />}
                            />
                        <ListItem
                            primaryText="OD配置"
                            leftAvatar={<Avatar src="img/jsa-128.jpg" />}
                            rightIcon={<ArrowRight />}
                            />
                    </List>
                </MobileTearSheet>
            </div>
        )
    }
    componentWillUnmount() {
        console.log('leave TrafficIndex');
    }

}

TrafficIndex.propTypes = {

}

export default TrafficIndex;