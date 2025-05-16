/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { request } from '../../utils/axios';
import type { SignInInputs } from '../../views/sign-in';

export interface LoginData {
	message: string;
	isLoggedIn: boolean;
}

async function loginUser(params: SignInInputs): Promise<LoginData | string> {
	try {
		const data: any = await request.post('auth/login', params);
		return {
			message: data.message,
			isLoggedIn: data.isLoggedIn
		}
	} catch (e) {
		const error = e as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to login.');
	}
}

async function logoutUser(): Promise<string> {
	try {
		const res = await request.post('auth/logout');
		const data = res.data as unknown as { message: string };
		return data.message;
	} catch (e) {
		const error = e as unknown as AxiosError;
		const data = error.response?.data as { error: string };
		throw new Error(data?.error || 'Failed to logout.');
	}
}

export { loginUser, logoutUser };
