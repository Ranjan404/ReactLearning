// import { createStore } from 'redux';
import { combineReducers, legacy_createStore as createStore} from 'redux'
import BookReducer from './BookReducer';
import studentReducer from './studentReducer';

const mainReducer = combineReducers({
    BookReducer,
    studentReducer
})

const store = createStore(mainReducer);

export default store;