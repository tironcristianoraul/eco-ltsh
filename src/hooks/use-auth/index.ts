import { useCallback } from 'react';
import { loginUser, logoutUser } from './index.actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { invalidateUser, validateUser } from '../../store/slices/utils';
import type { SignInInputs } from '../../views/sign-in';

export interface AuthReturnType {
	login: (user: SignInInputs) => void;
	logout: () => void;
	isLoggedIn: boolean
}

function useAuth(): AuthReturnType {
	const isLoggedIn = useAppSelector((state) => state);
	const dispatch = useAppDispatch();

	const login = useCallback(
		async (u: SignInInputs) => {
			try {
				const response = await loginUser(u);
				if (typeof response !== 'string') {
					dispatch(validateUser());
				}
			} catch (errorMessage) {
				console.error(errorMessage);
			}
		},
		[dispatch]
	);

	const logout = useCallback(
		async () => {
			try {
				await logoutUser();
				dispatch(invalidateUser());
			} catch (errorMessage) {
				console.error(errorMessage);
			}
		},
		[dispatch]
	);

	return {
		login,
		logout,
		isLoggedIn,
	};
}

export default useAuth;
