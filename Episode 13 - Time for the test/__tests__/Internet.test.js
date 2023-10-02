// Import the React Testing Library and the useInternetCheck hook
import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/dom";
import useInternetCheck from "../src/utils/useInternetCheck";

// Test that the useInternetCheck hook returns the correct online status
test("useInternetCheck returns the correct online status", () => {
  // Render the hook and get its return value
  const { result } = renderHook(() => useInternetCheck());

  // Expect that the initial online status is true
  expect(result.current).toBe(true);

  // Simulate an offline event on the window object
  fireEvent(window, new Event("offline"));

  // Expect that the online status is false after the offline event
  expect(result.current).toBe(false);

  // Simulate an online event on the window object
  fireEvent(window, new Event("online"));

  // Expect that the online status is true after the online event
  expect(result.current).toBe(true);
});
