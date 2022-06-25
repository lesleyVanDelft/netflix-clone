import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk('user/register', async userObject => {
	const response = await axios.post('/api/users/register', userObject);
	return response.data;
});
export const login = createAsyncThunk('user/login', async userObject => {
	const response = await axios.post('/api/users/login', userObject);
	return response.data;
});
const initialState = {
	// name: '',
	// email: '',
	// password: '',
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
	},
});

export default userSlice.reducer;
