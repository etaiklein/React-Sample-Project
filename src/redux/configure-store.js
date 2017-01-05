import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [thunkMiddleware]

const logger = createLogger({ collapsed: true });
middlewares.push(logger);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const configureStore = function configureStore(initialState: Object = {}): Function {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
};

export default configureStore;