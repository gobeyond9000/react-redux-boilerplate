import {createStore, applyMiddleware} from 'redux';
import cakeReducer from './Cake/cakeReducer';
import logger from 'redux-logger';


const reduxStore = createStore(cakeReducer, applyMiddleware(logger));

export default reduxStore;