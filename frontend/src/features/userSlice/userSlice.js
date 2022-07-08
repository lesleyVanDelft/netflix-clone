import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { logoutLocalStorage } from '../utils/saveLocalStorage';
import { toast } from 'react-toastify';

// Gets jwt token from cookie and adds it to request header
const tokenCookie = Cookies.get('jwt');
const setConfig = () => {
	const tokenCookie = Cookies.get('jwt');
	return {
		headers: { Authorization: `Bearer ${tokenCookie}` },
	};
};

export const register = createAsyncThunk('user/register', async userObject => {
	const response = await axios.post(
		'/api/users/register',
		userObject,
		setConfig()
	);
	return response.data;
});
export const login = createAsyncThunk('user/login', async userObject => {
	const response = await axios.post(
		'/api/users/login',
		userObject,
		setConfig()
	);
	return response.data;
});

export const logout = createAsyncThunk('user/logout', () => {
	return logoutLocalStorage();
});

export const selectProfile = createAsyncThunk(
	'user/setProfile',
	async profile => {
		return profile;
	}
);

export const addProfile = createAsyncThunk('user/addProfile', async data => {
	const response = await axios.post('/api/users/addProfile', data, setConfig());
	return response.data;
});

export const editProfile = createAsyncThunk('user/editProfile', async data => {
	const response = await axios.post('/api/users/editProfile', data);
	return response.data;
});

export const resetUpdateStatus = createAsyncThunk(
	'user/reset',
	async userStatus => {
		// return console.log(getState().user)
		return userStatus;
	}
);

export const deleteProfile = createAsyncThunk(
	'user/deleteProfile',
	async profileId => {
		const response = await axios.delete('/api/users/deleteProfile', {
			headers: { Authorization: `Bearer ${tokenCookie}` },
			data: { profileId },
		});
		return response.data;
	}
);

export const addBookmark = createAsyncThunk(
	'user/addBookmark',
	async postData => {
		const response = await axios.post(
			`/api/bookmarks/add/${postData.content._id}`,
			{ profileData: postData.profile },
			setConfig()
		);
		return response.data;
	}
);

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
		reset: (state, action) => {
			state.user.user.updateStatus = action.payload;
		},
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
			.addCase(addProfile.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(addProfile.fulfilled, (state, action) => {
				action.payload = action.meta.arg;
				state.status = 'success';
				state.user.profiles = state.user.profiles.concat(action.payload);
			})
			.addCase(addProfile.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			})
			.addCase(editProfile.pending, (state, action) => {
				state.user.updateStatus = 'updatePending';
			})
			.addCase(editProfile.fulfilled, (state, action) => {
				state.user.updateStatus = 'updateSuccess';
				action.payload = action.meta.arg;
				state.user.profiles = state.user.profiles.map(profile =>
					profile._id === action.payload.profileId
						? {
								...profile,
								username: action.payload.username,
						  }
						: { ...profile }
				);
			})
			.addCase(deleteProfile.pending, (state, action) => {
				state.user.updateStatus = 'deletePending';
			})
			.addCase(deleteProfile.fulfilled, (state, action) => {
				state.user.updateStatus = 'deleteSuccess';
				action.payload = action.meta.arg;
				state.user.profiles = state.user.profiles.filter(profile => {
					return profile._id.toString() !== action.payload.toString();
				});
			})
			.addCase(deleteProfile.rejected, (state, action) => {
				state.user.updateStatus = 'deleteRejected';
				state.error = action.error.message;
			})
			.addCase(editProfile.rejected, (state, action) => {
				state.user.updateStatus = 'updateRejected';
				state.error = action.error.message;
			})
			.addCase(resetUpdateStatus.pending, (state, action) => {
				state.user.updateStatus = null;
			})
			.addCase(resetUpdateStatus.fulfilled, (state, action) => {
				state.user.updateStatus = null;
			})
			.addCase(resetUpdateStatus.rejected, (state, action) => {
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
				state.status = 'loggedIn';
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
				state.status = 'loggedIn';
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
