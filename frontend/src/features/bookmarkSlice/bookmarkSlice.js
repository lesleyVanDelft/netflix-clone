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

export const addBookmark = createAsyncThunk(
	'bookmark/add',
	async targetMedia => {
		const response = await axios.post(
			'/api/users/addBookmark',
			targetMedia,
			setConfig()
		);
		return response.data;
	}
);

const initialState = {
	// name: '',
	// email: '',
	// password: '',
	bookmarkedMedia: [],
	status: '',
	error: null,
};

const bookmarkSlice = createSlice({
	name: 'bookmark',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(addBookmark.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(addBookmark.fulfilled, (state, action) => {
				state.status = 'success';
				state.bookmarks = state.bookmarks.push(action.payload);
			})
			.addCase(addBookmark.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			});
	},
});

export default bookmarkSlice.reducer;
