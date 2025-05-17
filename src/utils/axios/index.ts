/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios, { type AxiosInstance } from "axios";
import baseUrl from "./constants";
import store from "../../store";
import { invalidateUser } from "../../store/slices/utils";
import eventEmitter from "../mitt";

const request: AxiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

const instances: AxiosInstance[] = [request];

for (const instance of instances) {
  instance.interceptors.response.use(
    (res) => {
      (res.status === 401 || res.status === 403) &&
        store.dispatch(invalidateUser());
      const { message } = res.data;

      if (!message) return res;

      eventEmitter.emit("showSnackbar", { text: message, code: res.status });

      return res;
    },
    (res) => {
      (res.response.status === 401 || res.response.status === 403) &&
        store.dispatch(invalidateUser());

      const { error: message } = res.response.data;
      if (!message) throw new Error(res);

      eventEmitter.emit("showSnackbar", { text: message, code: res.status });
      throw new Error(res);
    }
  );
}

export { request };
