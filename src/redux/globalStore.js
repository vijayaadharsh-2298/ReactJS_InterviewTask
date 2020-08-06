import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from './reducers/Users.reducer';

const globalStore = () => {
    const store = createStore(
        combineReducers({
            users: usersReducer
        }),
        applyMiddleware(thunk)
    );
    return store
};

export default globalStore;