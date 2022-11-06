import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);

// 在函数中，改变传入对象本身是不好的
export const cleanObject = (object) => {
  // Object.assign({}, object)
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    // exclude 0, which is true
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });

  return result;
};

// hook 里面使用 hook
// 封装初始化 useEffect(), 去除结尾的 []
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => clearTimeout(timeout)
  }, [value, delay])
}
