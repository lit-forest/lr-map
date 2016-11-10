import React, { Component, PropTypes } from 'react';
import Map from '../components/map/Map';
import Search from '../components/search/Search';
import Rbox from '../components/rbox/Rbox';
import ToolBar from '../components/toolBar/ToolBar';
import Bucket from '../components/bucket/Bucket';

const CoreLayout = ({children}) => {
    return (
        <div>
            <Map></Map>
            <Search></Search>
            <Rbox></Rbox>
            <ToolBar></ToolBar>
            <Bucket child={children}></Bucket>
        </div>
    )
}

CoreLayout.propTypes = {
    children: PropTypes.element
}

export default CoreLayout;