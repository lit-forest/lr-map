import React, { Component, PropTypes } from 'react';
import Map from '../components/map/Map';
import Search from '../components/search/Search';

const CoreLayout = ({children}) => {
    return (
        <div>
            <Map></Map>
            <Search></Search>
            <div>
                {children}
            </div>
        </div>
    )
}

CoreLayout.propTypes = {
    children: PropTypes.element,
};

export default CoreLayout;