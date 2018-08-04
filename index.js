import React               from 'react';
import { Provider }        from 'react-redux';
import { render }          from 'react-dom';
import { Route }           from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
//import createBrowserHistory from 'history/createBrowserHistory';
import history             from './history'
import App                 from './app/components/App';
import TodoApp             from './todoApp/containers/TodoApp';
import Error               from './error/components/Error';
import PracticeStyle       from './practiceStyle/components/PracticeStyle';
import Style_1             from './style1/components/Style_1';
import Menu                from './menu/components/Menu';
import createStore         from './store';

//const history = createBrowserHistory(); // historyのインスタンスを生成
const store   = createStore(history);   // Storeの生成

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Route exact path="/"              component={App} />
        <Route exact path="/todoApp"       component={TodoApp} />
        <Route exact path="/error"         component={Error} />
        <Route exact path="/practiceStyle" component={PracticeStyle} />
        <Route exact path="/style1"        component={Style_1} />
        <Route exact path="/menu"          component={Menu} />
      </React.Fragment> 
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
