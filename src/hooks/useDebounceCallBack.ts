import { useRef, useCallback } from "react";

export function useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
  dependencies?: unknown[]
): T {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay, ...(dependencies ?? [])]
  );

  return debounced as T;
}
