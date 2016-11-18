import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import MobileTearSheet from '../../../../components/mobileTearSheet/MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import Nav from '../../../../components/Nav/Nav';

class Home extends Component {
    render() {
        return (
            <div>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'交通指数'}></Nav>
                <MobileTearSheet>
                    <List>
                        <Subheader>交通规律专题</Subheader>
                        <Link to={'/trafficIndex/holiday'}>
                            <ListItem
                                primaryText="节假日专题"
                                leftAvatar={<Avatar src="img/ok-128.jpg" />}
                                rightIcon={<ArrowRight />}
                                />
                        </Link>
                        <Link to={'/trafficIndex/od'}>
                            <ListItem
                                primaryText="OD分析"
                                leftAvatar={<Avatar src="img/kolage-128.jpg" />}
                                rightIcon={<ArrowRight />}
                                />
                        </Link>
                        <ListItem
                            primaryText="预测回放"
                            leftAvatar={<Avatar src="img/uxceo-128.jpg" />}
                            rightIcon={<ArrowRight />}
                            />
                        <ListItem
                            primaryText="指数更新"
                            leftAvatar={<Avatar src="img/kerem-128.jpg" />}
                            rightIcon={<ArrowRight />}
                            />
                        <ListItem
                            primaryText="交通事故"
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
        );
    }
}

Home.propTypes = {
};

export default Home;