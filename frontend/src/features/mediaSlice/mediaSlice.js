import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { getAllMedia } from '../mediaService/mediaService';

const initialState = {
	media: [],
	status: 'idle',
	error: null,
};

export const getAll = createAsyncThunk('media/getAll', async () => {
	const response = await axios.get(`/api/media/all`);
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
			})
			.addCase(getAll.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default mediaSlice.reducer;
