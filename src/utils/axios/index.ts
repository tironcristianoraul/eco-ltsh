/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios, { type AxiosInstance } from 'axios';
import baseUrl from './constants';
import store from '../../store';
import { invalidateUser } from '../../store/slices/utils';

const request: AxiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

const instances: AxiosInstance[] = [request];

for (const instance of instances) {
    instance.interceptors.response.use(
        (res) => {
            (res.status === 401 || res.status === 403) && store.dispatch(invalidateUser());
            return res;
        },
        (res) => {
            (res.response.status === 401 || res.response.status === 403) && store.dispatch(invalidateUser());
            throw new Error(res);
        }
    );
}

export { request };
