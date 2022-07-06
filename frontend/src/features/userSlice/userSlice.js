import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { logoutLocalStorage } from '../utils/saveLocalStorage';

// Gets jwt token from cookie and adds it to request header
const setConfig = () => {
	const tokenCookie = Cookies.get('jwt');
	return {
		headers: { Authorization: `Bearer ${tokenCookie}` },
	};
};

export const register = createAsyncThunk('user/register', async userObject => {
	const response = await axios.post('/api/users/register', userObject);
	return response.data;
});
export const login = createAsyncThunk('user/login', async userObject => {
	const response = await axios.post('/api/users/login', userObject);
	return response.data;
});

export const logout = createAsyncThunk('user/logout', () => {
	return logoutLocalStorage();
});

// export const setProfile = createAsyncThunk('user/setProfile', async () => {

// });
export const selectProfile = createAsyncThunk(
	'user/setProfile',
	async profile => {
		return profile;
	}
);

export const addBookmark = createAsyncThunk(
	'user/addBookmark',
	async postData => {
		//  console.log(postData.data);
		// const { data } = postData;
		const response = await axios.post(
			`/api/bookmarks/add/${postData.content._id}`,
			{ profileData: postData.profile },
			// null,
			setConfig()
		);
		// console.log(response.data);
		return response.data;
	}
);

// maybe mediaitem dispatch on bookmarkedmedia filter
export const deleteBookmark = createAsyncThunk(
	'user/deleteBookmark',
	async postData => {
		const response = await axios.post(
			`/api/bookmarks/add/${postData.content._id}`,
			{ profileData: postData.profile },
			setConfig()
		);
		// console.log(response.data);
		return response.data;
	}
);

const initialState = {
	// name: '',
	// email: '',
	// password: '',
	// bookmarkedMedia: [],
	status: 'loggedOut',
	error: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: state => initialState,
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(register.fulfilled, (state, action) => {
				action.payload = action.meta.arg;
				state.status = 'success';
				state.user = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			})
			.addCase(login.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'success';
				state.user = action.payload;
				state.error = null;
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			})
			.addCase(selectProfile.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(selectProfile.fulfilled, (state, action) => {
				state.status = 'loggedIn';
				state.profile = action.payload;
				// state.profile.bookmarks = state.user.bookmarkedMedia;
			})
			.addCase(selectProfile.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			})
			.addCase(logout.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.status = 'loggedOut';
				state.user = null;
				state.profile = null;
			})
			.addCase(logout.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = 'something went wrong with logging out? :)';
			})
			.addCase(addBookmark.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(addBookmark.fulfilled, (state, action) => {
				state.status = 'loggedIn';
				action.payload = action.meta.arg;

				state.user.bookmarkedMedia = state.user.bookmarkedMedia.concat(
					action.payload.content._id
				);
				state.profile.bookmarks = state.profile.bookmarks.concat(
					action.payload.content._id
				);
			})
			.addCase(addBookmark.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			})
			.addCase(deleteBookmark.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(deleteBookmark.fulfilled, (state, action) => {
				state.status = 'loggedIn';
				action.payload = action.meta.arg;
				// console.log(action.payload._id);

				state.user.bookmarkedMedia = state.user.bookmarkedMedia.filter(
					bookmark => bookmark !== action.payload.content._id
				);

				state.profile.bookmarks = state.profile.bookmarks.filter(
					bookmark => bookmark !== action.payload.content._id
				);
				state.error = null;
			})
			.addCase(deleteBookmark.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			});
	},
});

// // const toggleBookmark = createAsyncThunk()
// const toggleBookmark = bookmark => {
// 	return dispatch => {
// 		dispatch(addBookmark(bookmark));
// 	};
// };
export const { reset } = userSlice.actions;
export default userSlice.reducer;
