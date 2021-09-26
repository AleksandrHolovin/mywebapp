import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// import authReducer from './auth/auth.slice';
import homeSlice from '../../pages/Home/store/slice';

const rootReducer = (history: History): Reducer =>
    combineReducers({
        home: homeSlice,
        router: connectRouter(history),
        // auth: authReducer,
        // users: usersReducer,
    });

export default rootReducer;
