

import {  legacy_createStore as createStore} from 'redux'
import languagered from './reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import combine from './reducer/combine';

const store= createStore(combine,applyMiddleware(thunk))
export default store