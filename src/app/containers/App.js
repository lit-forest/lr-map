import React, { Component, PropTypes } from 'react';
import { browserHistory, hashHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepOrange500 } from 'material-ui/styles/colors';
/**
 * @doc 添加materal-ui移动端的onTouchTap事件
 */
injectTapEventPlugin();
/**
 * @doc 获取materal-ui 默认样式
 */
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

/**
 * @author sylvenas
 * @doc 整个程序容器组件
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @doc 只在初始化的时候渲染
   * @param {Object} nextProps
   * @param {Object} nextState
   * @returns false 禁止二次渲染
   * @memberOf App
   */
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  /**
   * @doc 添加materal-ui样式和路由设置
   * @routes 路由配置
   * @store 全局store
   * @returns 整个页面容器
   * @memberOf App
   */
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