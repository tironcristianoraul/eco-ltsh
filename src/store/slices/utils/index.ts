import { createSlice } from '@reduxjs/toolkit';

const utilsSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: true,
	},
	reducers: {
		validateUser: (state) => {
			state.isLoggedIn = true;
		},
		invalidateUser: (state) => {
			state.isLoggedIn = false;
		}
	},
});

export const { validateUser, invalidateUser } = utilsSlice.actions;
export default utilsSlice.reducer;
