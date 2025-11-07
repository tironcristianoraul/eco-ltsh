/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { loginUser, logoutUser } from "./index.actions";
import { useAppDispatch } from "../../store/hooks";
import { invalidateUser, validateUser } from "../../store/slices/utils";
import type { SignInInputs } from "../../views/sign-in";
import useLocalStorage from "../use-local-storage";

export interface AuthReturnType {
  login: (user: SignInInputs) => void;
  logout: () => void;
  isLoggedIn: boolean | null;
}

function useAuth(): AuthReturnType {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage<boolean>("isLoggedIn");
  const dispatch = useAppDispatch();

  const login = useCallback(
    async (u: SignInInputs) => {
      try {
        const response = await loginUser(u);
        if (typeof response !== "string") {
          setIsLoggedIn(true);
          dispatch(validateUser());
          location.reload();
        }
      } catch (errorMessage) {
        console.error(errorMessage);
      }
    },
    [dispatch]
  );

  const logout = useCallback(async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      dispatch(invalidateUser());
    } catch (errorMessage) {
      console.error(errorMessage);
    }
  }, [dispatch]);

  return {
    login,
    logout,
    isLoggedIn,
  };
}

export default useAuth;
