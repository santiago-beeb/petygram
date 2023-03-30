import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item != null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  const setLocalStorage = (value) => {
    try {
      value
        ? localStorage.setItem(key, JSON.stringify(value))
        : localStorage.removeItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };
  return [storedValue, setLocalStorage];
};
