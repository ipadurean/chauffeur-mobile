import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';



export const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
export default createStoreWithMiddleware(rootReducer);