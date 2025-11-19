import { useCallback, useEffect, useRef, useState } from "react";

export type stateSetterParam<T> = ((prev: T) => T) | T;
export type stateSetter<N> = (newValue: stateSetterParam<N>) => void;

function useLocalStorage<T>(
  key: string,
  defaultValue?: T
): readonly [T | null, stateSetter<T | null>] {
  const getItem = useCallback((): T | null => {
    try {
      const stringifiedValue = localStorage.getItem(key);
      return stringifiedValue ? JSON.parse(stringifiedValue) : defaultValue ?? null;
    } catch {
      return defaultValue ?? null;
    }
  }, [key, defaultValue]);

  const [value, setValue] = useState<T | null>(getItem);
  const firstCall = useRef(true);

  const setItem: stateSetter<T | null> = (newValue) => {
  const valueToStore =
    newValue instanceof Function ? newValue(value) : newValue;

  if (valueToStore === null) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, JSON.stringify(valueToStore));
  }
  setValue(valueToStore);
  window.dispatchEvent(new StorageEvent("storage", { key }));
};

  useEffect(() => {
    if (!firstCall.current) {
      setItem(value);
    } else {
      firstCall.current = false;
    }
  }, [value, setItem]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === key) {
        setValue(getItem());
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [getItem, key]);

  return [value, setItem] as const;
}

export default useLocalStorage;
