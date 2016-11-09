import React, { Component, PropTypes } from 'react';
import { hashHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const {routes, store} = this.props;

    return (
      <Provider store={store}>
        <Router history={hashHistory} children={routes}></Router>
      </Provider>
    )
  }
}

App.propTypes = {
  routes:PropTypes.object.isRequired,
  store:PropTypes.object.isRequired
};

export default App;