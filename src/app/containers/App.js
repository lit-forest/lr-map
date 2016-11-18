import React, { Component, PropTypes } from 'react';
import { browserHistory, hashHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

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

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const {routes, store} = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Router history={hashHistory} children={routes}></Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default App;