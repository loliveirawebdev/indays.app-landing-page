import { useRecoilState } from "recoil";
import { IS_PAGE_SCROLL_ENABLED } from "../atoms/pageScroll";

export function usePageScroll() {
  const [isPageScrollEnabled, setIsPageScrollEnabled] = useRecoilState(IS_PAGE_SCROLL_ENABLED);

  return {
    isPageScrollEnabled,
    blockScroll: () => setIsPageScrollEnabled(false),
    unblockScroll: () => setIsPageScrollEnabled(true),
  };
}
