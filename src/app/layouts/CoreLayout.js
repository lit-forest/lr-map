import React, { Component, PropTypes } from 'react';
import Map from '../components/map/Map';
import Search from '../components/search/Search';
import Rbox from '../components/rbox/Rbox';
import ToolBar from '../components/toolBar/ToolBar';
import Bucket from '../components/bucket/Bucket';


import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

/**
 * @author sylvenas
 * @doc 首页整体布局
 * @param {React Component} {children}
 * @returns
 */
const CoreLayout = ({children}) => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <Map></Map>
                <Search></Search>
                <Rbox></Rbox>
                <ToolBar></ToolBar>
                <Bucket child={children}></Bucket>
            </div>
        </MuiThemeProvider>
    )
}

CoreLayout.propTypes = {
    children: PropTypes.element
}


export default CoreLayout;