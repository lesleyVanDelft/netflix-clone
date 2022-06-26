import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

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

// export const addBookmark = createAsyncThunk(
// 	'user/addBookmark',
// 	async targetMedia => {
// 		const response = await axios.post(
// 			'/api/users/addBookmark',
// 			targetMedia,
// 			setConfig()
// 		);
// 		return response.data;
// 	}
// );

const initialState = {
	// name: '',
	// email: '',
	// password: '',
	// bookmarkedMedia: [],
	status: '',
	error: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(register.fulfilled, (state, action) => {
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
				state.status = 'loggedIn';
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			});
		// .addCase(addBookmark.pending, (state, action) => {
		// 	state.status = 'pending';
		// })
		// .addCase(addBookmark.fulfilled, (state, action) => {
		// 	state.status = 'success';
		// 	state.bookmarkedMedia = action.payload;
		// })
		// .addCase(addBookmark.rejected, (state, action) => {
		// 	state.status = 'rejected';
		// 	state.error = action.error.message;
		// });
	},
});

export default userSlice.reducer;
