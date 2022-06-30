import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

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
			`/api/bookmarks/add/${targetMedia._id}`,
			null,
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
				// const user = useSelector(state => state.user);
				state.status = 'pending';
				// state.bookmarkedMedia =
				// console.log(state.user);
			})
			.addCase(addBookmark.fulfilled, (state, action) => {
				state.status = 'success';
				// state.bookmarks = state.bookmarks.push(action.payload);
				return state.bookmarkedMedia.concat(action.payload);
				// console.log(state);
				// console.log(action.meta.arg);
			})
			.addCase(addBookmark.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error.message;
			});
	},
});

export default bookmarkSlice.reducer;
