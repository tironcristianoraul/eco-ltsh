import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { rootReducer } from './slices';

// ==============================|| REDUX - MAIN STORE ||============================== //

const persistConfig = {
	key: 'root',
	storage,
	version: 1,
	whitelist: ['isloggedin'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type AppState = boolean;
export default store;
