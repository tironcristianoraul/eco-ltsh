import { combineReducers } from '@reduxjs/toolkit';
import utilsReducer from './utils';

export const rootReducer = combineReducers({
	utils: utilsReducer,
});
