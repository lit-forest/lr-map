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
import { blue500, yellow600 } from 'material-ui/styles/colors';

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
    listRoot: {
        fontFamily: "'Microsoft Yahei','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: '13px'
    },
    listItem: {
        marginTop: -15,
        marginBottom: -15,
        fontFamily: "'Microsoft Yahei','Helvetica Neue',Helvetica,Arial,sans-serif",
        fontSize: '10px',
    },
    avatar: {
        margin: 5
    }
}

/**
 * @author sylvenas
 * @doc 图层控制
 * @class LayerCtrl
 * @extends {Component}
 */
class LayerCtrl extends Component {
    /**
     * Creates an instance of LayerCtrl.
     * @param {Object} props
     * @memberOf LayerCtrl
     */
    constructor(props) {
        super(props);
    }
    /**
     * @param {array} baseLayer
     * @returns {array}layerArr 
     * @doc 根据父节点创建子节点主数组
     * @memberOf LayerCtrl
     */
    createItemsArr(baseLayer) {
        let layerArr = [];
        layerArr = baseLayer.map((layer) => {
            return <ListItem
                key={layer.url}
                primaryText={layer.name}
                leftAvatar={<Avatar src={layer.img} size={30} style={styles.avatar} />}
                rightToggle={<Toggle defaultToggled={layer.show} onClick={() => this.handleToggle(layer.id)} />}
                style={styles.listItem}
                />
        })
        console.log(layerArr)
        return layerArr;
    }

    render() {
        return (
            <div style={styles.panel}>
                <MobileTearSheet height={360}>
                    <ListItem
                        primaryText="基础图层"
                        leftIcon={<ContentInbox />}
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        style={styles.listRoot}
                        nestedItems={this.createItemsArr(_layer_global.baseLayer)}
                        />
                    <ListItem
                        primaryText="设备图层"
                        leftIcon={<ContentInbox />}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        style={styles.listRoot}
                        nestedItems={this.createItemsArr(_layer_global.deviceLayer)}
                        />
                </MobileTearSheet>
            </div>
        );
    }
}

LayerCtrl.propTypes = {

};

export default LayerCtrl;