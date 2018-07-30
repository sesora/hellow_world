import React                from 'react';
import { Provider }         from 'react-redux';
import { render }           from 'react-dom';
import { Route }            from 'react-router-dom';
import { ConnectedRouter }   from 'react-router-redux';
//import createBrowserHistory from 'history/createBrowserHistory';
import history from './history'
import TodoApp              from './containers/TodoApp';
import Error                from './components/Error';
import PracticeStyle                from './components/PracticeStyle';
import Style_1                from './components/Style_1';
import createStore          from './store';

//const history = createBrowserHistory(); // historyのインスタンスを生成
const store   = createStore(history);   // Storeの生成

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/"      component={TodoApp} />
        <Route exact path="/error" component={Error} />
        <Route exact path="/PracticeStyle" component={PracticeStyle} />
        <Route exact path="/style_1" component={Style_1} />
      </div> 
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
