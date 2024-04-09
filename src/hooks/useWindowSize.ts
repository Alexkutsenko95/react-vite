import { useState, useEffect, useCallback } from 'react';

interface IWindowSize {
  width: number;
  height: number;
}

/**
 * Custom hook that returns the current window size.
 * @param {number} initialWidth - The initial width of the window (default is 0).
 * @param {number} initialHeight - The initial height of the window (default is 0).
 * @returns {IWindowSize} - An object containing the current width and height of the window.
 */
export const useWindowSize = (initialWidth: number = 0, initialHeight: number = 0): IWindowSize => {
  const [size, setSize] = useState<IWindowSize>({
    width: initialWidth || window.innerWidth,
    height: initialHeight || window.innerHeight,
  });

  const handleResize = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);


  useEffect(() => {

    window.addEventListener('resize', handleResize);
    // Call handleResize immediately to update the state with the initial window size
    handleResize();

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return size;
};