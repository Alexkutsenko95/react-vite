import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize.ts';
// import { useWindowSize } from 'react-use';

const COUNTER_CARD_HEIGHT = 120;
const TOP_HEIGHT = 480;
const LIST_ITEM_HEIGHT = 30;

/**
 * Calculates the dynamic height for a list based on window size and other constants.
 *
 * @returns An object containing the calculated list height and a constant item height.
 * @typeParam {number} listHeight - The calculated dynamic height for the list.
 * @typeParam {number} itemHeight - The constant height for each list item.
 */
export const useDynamicHeight = (): { listHeight: number, itemHeight: number } => {
  const { height } = useWindowSize();
  const [listHeight, setListHeight] = useState<number>(0);

  useEffect(() => {
    const availableHeight = height - COUNTER_CARD_HEIGHT - TOP_HEIGHT;
    setListHeight(availableHeight > 0 ? availableHeight : 0);
  }, [height]);

  return { listHeight, itemHeight: LIST_ITEM_HEIGHT };
};