// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import mediaReducer from '../features/mediaSlice/mediaSlice';
// import userReducer from '../features/userSlice/userSlice';
// import bookmarkReducer from '../features/bookmarkSlice/bookmarkSlice';
// // import mediaReducer from '../redux/reducers/mediaReducer';

// export const store = configureStore({
// 	reducer: {
// 		media: mediaReducer,
// 		user: userReducer,
// 		// bookmarks: bookmarkReducer,
// 	},
// });

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mediaReducer from '../features/mediaSlice/mediaSlice';
import userReducer from '../features/userSlice/userSlice';

// const persistConfig
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
// import mediaReducer from '../reducers/mediaReducer';

const persistConfig = {
	key: 'root',
	storage,
};

const reducer = combineReducers({
	media: mediaReducer,
	user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export default store;
