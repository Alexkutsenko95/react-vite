import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';


/**
 * Interface representing the props for a component that uses dynamic height.
 *
 * @interface IUseDynamicHeightProps
 */
interface IUseDynamicHeightProps {
  headerHeight: number;
  footerHeight: number;
  itemHeight: number;
}

/**
 * Defines the interface for dynamic height metrics.
 */
interface IDynamicHeightMetrics {
  listHeight: number;
  itemHeight: number;
}

/**
 * Calculates the dynamic height for a list based on window size and provided header, footer, and item heights.
 * @param {IUseDynamicHeightProps} props - The props object containing headerHeight, footerHeight, and itemHeight.
 * @param {number} props.headerHeight - The height of the header in pixels.
 * @param {number} props.footerHeight - The height of the footer in pixels.
 * @param {number} props.itemHeight - The height of each list item in pixels.
 * @returns {IDynamicHeightMetrics} - An object containing the calculated listHeight and itemHeight.
 */
export const useDynamicHeight = ({
                                   headerHeight,
                                   footerHeight,
                                   itemHeight,
                                 }: IUseDynamicHeightProps): IDynamicHeightMetrics => {
  const { height } = useWindowSize();
  const [listHeight, setListHeight] = useState<number>(0);

  useEffect(() => {
    const availableHeight = height - headerHeight - footerHeight;
    setListHeight(availableHeight > 0 ? availableHeight : 0);
  }, [height, headerHeight, footerHeight]);

  return { listHeight, itemHeight };
};