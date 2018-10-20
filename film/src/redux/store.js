import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from './middlewares/thunk';
import setStorageData from './middlewares/addlocalstorage';
import rootReducer from './reducers';


const enhancer = composeWithDevTools(applyMiddleware(thunk, setStorageData));

const store = createStore(rootReducer, enhancer);

export default store;
