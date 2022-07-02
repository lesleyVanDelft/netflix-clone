import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
// import { logout, login } from '../userSlice/userSlice';
// import { getAllMedia } from '../mediaService/mediaService';

// Gets jwt token from cookie and adds it to request header
const setConfig = () => {
	const tokenCookie = Cookies.get('jwt');
	return {
		headers: { Authorization: `Bearer ${tokenCookie}` },
	};
};

const initialState = {
	media: [],
	status: 'idle',
	error: null,
};

export const getAll = createAsyncThunk('media/getAll', async () => {
	const response = await axios.get(`/api/media/all`, setConfig());
	return response.data;
});

const mediaSlice = createSlice({
	name: 'media',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getAll.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(getAll.fulfilled, (state, action) => {
				state.status = 'success';
				// state.media = state.media.concat(action.payload);
				state.media = action.payload;
				// state.error = null;
			})
			.addCase(getAll.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
		// .addCase(login.fulfilled, (state, action) => {
		// 	state.media = action.payload;
		// })
		// .addCase(logout.fulfilled, (state, action) => {
		// 	state.media = [];
		// 	state.status = 'loggedOut';
		// });
	},
});

export default mediaSlice.reducer;
