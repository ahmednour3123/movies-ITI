import {combineReducers} from 'redux'
import languagered from './reducer';
import moviesReducer from './movies';
import favreducer from './favo';



export default combineReducers({
    lang:languagered,
    movies:moviesReducer,
    fav:favreducer
    
})