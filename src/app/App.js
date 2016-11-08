import React from 'react';
import Map from './components/map/Map';
import Search from './components/search/Search';

class App extends React.Component {
  render() {
    return (
      <div>
        <Map></Map>
        <Search></Search>
      </div>
    )
  }
}

export default App