import { combineReducers, createStore } from "redux";
import { camerasReducer } from './cameraReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  camerasReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;