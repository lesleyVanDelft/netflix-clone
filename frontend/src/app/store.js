import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mediaReducer from '../redux/reducers/mediaReducer';
const store = configureStore({
	reducer: {
		media: mediaReducer,
	},
});

export default store;

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
