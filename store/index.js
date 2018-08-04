import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import tasksReducer from '../app/modules/tasksRDC';

// historyは[src/index.js]から渡すようにする
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      // taskReducerをtasksというkeyに割り当てる
      tasks: tasksReducer,
      // react-router-reduxのReducer
      router: routerReducer,
    }),
    applyMiddleware(
      // react-router-reduxのRedux Middleware
      routerMiddleware(history)
    )
  );
}