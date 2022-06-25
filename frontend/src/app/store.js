import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mediaReducer from '../features/mediaSlice/mediaSlice';
import userReducer from '../features/userSlice/userSlice';
// import mediaReducer from '../redux/reducers/mediaReducer';

export const store = configureStore({
	reducer: {
		media: mediaReducer,
		user: userReducer,
	},
});

// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
// import mediaReducer from '../reducers/mediaReducer';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// };

// const reducer = combineReducers({
// 	media: mediaReducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: [thunk],
// });

// export default store;
