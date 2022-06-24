import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllMedia } from '../mediaService/mediaService';

// const getAll = createAction('GET_ALL_MEDIA');

export const getAll = createAsyncThunk('media/getAll', async () => {
	const mediaList = await getAllMedia();
	return mediaList.data;
});

export const mediaSlice = createSlice({
	name: 'media',
	initialState: [],
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAll.fulfilled, (state, action) => {
			state.entities.push(action.payload);
		});
	},
});
