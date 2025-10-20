import { useState, useEffect } from 'react';

/**
 * Hook để trì hoãn việc cập nhật một giá trị.
 * @param value - Giá trị cần trì hoãn (ví dụ: đối tượng filters).
 * @param delay - Thời gian trì hoãn (ms), mặc định là 500ms.
 * @returns Giá trị đã được trì hoãn.
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Thiết lập một bộ đếm thời gian
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Hủy bộ đếm thời gian nếu giá trị thay đổi trước khi hết thời gian trì hoãn
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Chỉ chạy lại effect nếu giá trị hoặc thời gian trì hoãn thay đổi

  return debouncedValue;
}