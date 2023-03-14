import { useEffect, useState } from "react";

/**
 * "useDebounce returns a debounced value. It delays updating the debounced value until after delay
 * milliseconds have elapsed since the last time the source value was updated."
 *
 * The debounced value is stored in a ref, and the returned value is the current value of the ref
 * @param {any} value - The value to be debounced.
 * @param {number} delay - The delay in milliseconds before the callback is fired.
 * @returns A debounced value.
 */
export const useDebounce = (value: any, delay: number) => {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(
		() => {
			// Update debounced value after delay
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);
			// Cancel the timeout if value changes (also on delay change or unmount)
			// This is how we prevent debounced value from updating if value is changed ...
			// .. within the delay period. Timeout gets cleared and restarted.
			return () => {
				clearTimeout(handler);
			};
		},
		[value, delay] // Only re-call effect if value or delay changes
	);
	return debouncedValue;
};
