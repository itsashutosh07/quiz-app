import { useState } from "react";

/**
 * useLocalStorage hook provides a stateful value and a setter that also saves to localStorage.
 * @param {string} key - The key in localStorage.
 * @param {*} initialValue - The initial value if not found.
 * @returns {[any, function]} An array with the current value and a function to update it.
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
