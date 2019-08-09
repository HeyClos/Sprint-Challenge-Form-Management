import { useState } from "react";

export const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        if(item){
            try {
                return JSON.parse(item);
            }catch{
                return item;
            }
        }
        return initialValue;
    });
    const setValue = value => {
        if(typeof value !== "string")
        value = JSON.stringify(value);
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    };
    return [storedValue, setValue];
};