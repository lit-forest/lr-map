import React, { Component, PropTypes } from 'react';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import Avatar from 'material-ui/Avatar';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';

import MobileTearSheet from '../../mobileTearSheet/MobileTearSheet';

const styles = {
    panel: {
        position: 'absolute',
        top: '58px',
        right: '0px',
        width: '250px',
        background: 'rgb(255, 255, 255)',
        padding: '12px',
        borderRadius: '2px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px, rgba(0, 0, 0, 0.188235) 0px 2px 6px 0px'
    },
    listRoot:{
        fontFamily: "'Microsoft Yahei','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: '13px'
    },
    listItem: {
        marginTop:-7,
        marginBottom:-8,
        fontFamily: "'Microsoft Yahei','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: '10px',
    },
    avatar:{
        margin: 5
    }
}

class Bookmark extends Component {
    render() {
        return (
            <div style={styles.panel}>
                <MobileTearSheet height={300}>
                    <ListItem
                        primaryText="基础图层"
                        leftIcon={<ContentInbox />}
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        style={styles.listRoot}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="街道图"
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} size={30} style={styles.avatar}/>}
                                rightToggle={<Toggle />}
                                style={styles.listItem}
                                />,
                            <ListItem
                                key={2}
                                primaryText="影像图"
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} size={30} style={styles.avatar}/>}
                                rightToggle={<Toggle />}
                                style={styles.listItem}
                                />,
                            <ListItem
                                key={3}
                                primaryText="2015街道图"
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} size={30} style={styles.avatar}/>}
                                rightToggle={<Toggle />}
                                style={styles.listItem}
                                />,
                            <ListItem
                                key={4}
                                primaryText="2015影像图"
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} size={30} style={styles.avatar}/>}
                                rightToggle={<Toggle />}
                                style={styles.listItem}
                                />,

                        ]}
                        />
                    <ListItem
                        primaryText="设备图层"
                        leftIcon={<ContentInbox />}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        style={styles.listRoot}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="信号机"
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} size={30} style={styles.avatar}/>}
                                rightToggle={<Toggle />}
                                style={styles.listItem}
                                />,
                            <ListItem
                                key={2}
                                primaryText="电警卡口"
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} size={30} style={styles.avatar}/>}
                                rightToggle={<Toggle />}
                                style={styles.listItem}
                                />,
                            <ListItem
                                key={3}
                                primaryText="诱导屏"
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} size={30} style={styles.avatar}/>}
                                rightToggle={<Toggle />}
                                style={styles.listItem}
                                />,
                            <ListItem
                                key={4}
                                primaryText="视频"
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} size={30} style={styles.avatar}/>}
                                rightToggle={<Toggle />}
                                style={styles.listItem}
                                />,

                        ]}
                        />
                </MobileTearSheet>
            </div>
        );
    }
}

Bookmark.propTypes = {

};

export default Bookmark;