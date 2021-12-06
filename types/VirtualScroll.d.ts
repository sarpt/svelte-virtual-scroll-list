/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VirtualScrollProps<T> {
  /**
   * Unique key for getting data from `data`
   * @default "id"
   */
  key?: string;

  /**
   * Source for list
   */
  data?: Array<T>;

  /**
   * Count of rendered items
   * @default 30
   */
  keeps?: number;

  /**
   * Estimate size of each item, needs for smooth scrollbar
   * @default 50
   */
  estimateSize?: number;

  /**
   * Scroll direction
   * @default false
   */
  isHorizontal?: boolean;

  /**
   * scroll position start index
   * @default 0
   */
  start?: number;

  /**
   * scroll position offset
   * @default 0
   */
  offset?: number;

  /**
   * Let virtual list using global document to scroll through the list
   * @default false
   */
  pageMode?: boolean;

  /**
   * The threshold to emit `top` event, attention to multiple calls.
   * @default 0
   */
  topThreshold?: number;

  /**
   * The threshold to emit `bottom` event, attention to multiple calls.
   * @default 0
   */
  bottomThreshold?: number;

  /**
   * Class to assign to virtual scroll root node.
   * @type {string}
   */
  rootNodeClass?: string;

  /**
   * @default () => { return virtual.sizes.get(id) }
   */
  getSize?: () => any;

  /**
   * Count of items
   * @default () => { return virtual.sizes.size }
   */
  getSizes?: () => any;

  /**
   * @default () => { if (pageMode) { return document.documentElement[directionKey] || document.body[directionKey] } else { return root ? Math.ceil(root[directionKey]) : 0 } }
   */
  getOffset?: () => any;

  /**
   * @default () => { const key = isHorizontal ? "clientWidth" : "clientHeight" if (pageMode) { return document.documentElement[key] || document.body[key] } else { return root ? Math.ceil(root[key]) : 0 } }
   */
  getClientSize?: () => any;

  /**
   * @default () => { const key = isHorizontal ? "scrollWidth" : "scrollHeight" if (pageMode) { return document.documentElement[key] || document.body[key] } else { return root ? Math.ceil(root[key]) : 0 } }
   */
  getScrollSize?: () => any;

  /**
   * @default () => { if (root) { const rect = root.getBoundingClientRect() const {defaultView} = root.ownerDocument const offsetFront = isHorizontal ? (rect.left + defaultView.pageXOffset) : (rect.top + defaultView.pageYOffset) virtual.updateParam("slotHeaderSize", offsetFront) } }
   */
  updatePageModeFront?: () => any;

  /**
   * @default () => { if (pageMode) { document.body[directionKey] = offset document.documentElement[directionKey] = offset } else if (root) { root[directionKey] = offset } }
   */
  scrollToOffset?: () => any;

  /**
   * @default () => { if (index >= data.length - 1) { scrollToBottom() } else { const offset = virtual.getOffset(index) scrollToOffset(offset) } }
   */
  scrollToIndex?: () => any;

  /**
   * @default () => { if (shepherd) { const offset = shepherd[isHorizontal ? "offsetLeft" : "offsetTop"] scrollToOffset(offset) // check if it's really scrolled to the bottom // maybe list doesn't render and calculate to last range // so we need retry in next event loop until it really at bottom setTimeout(() => { if (getOffset() + getClientSize() + 1 < getScrollSize()) { scrollToBottom() } }, 3) } }
   */
  scrollToBottom?: () => any;
}

export default class VirtualScroll<T> extends SvelteComponentTyped<
  VirtualScrollProps<T>,
  { scroll: CustomEvent<any>; top: CustomEvent<any>; bottom: CustomEvent<any> },
  { default: { data: T, idx: number }; footer: {}; header: {} }
> {}
