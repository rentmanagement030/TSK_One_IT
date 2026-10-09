'use client';

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';

export interface VirtualListProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
  className?: string;
}

/**
 * High-Performance List Virtualizer
 * Only mounts DOM elements visible within the viewport (+ overscan buffer)
 * Dramatically cuts DOM nodes, memory consumption, and paint times for large lists.
 */
export function VirtualList<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 3,
  className = '',
}: VirtualListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  const totalCount = items.length;
  const totalHeight = totalCount * itemHeight;

  const { startIndex, endIndex } = useMemo(() => {
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const end = Math.min(totalCount - 1, start + visibleCount + overscan * 2);
    return { startIndex: start, endIndex: end };
  }, [scrollTop, itemHeight, containerHeight, totalCount, overscan]);

  const visibleItems = useMemo(() => {
    const slice: { item: T; index: number; top: number }[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      if (items[i]) {
        slice.push({
          item: items[i],
          index: i,
          top: i * itemHeight,
        });
      }
    }
    return slice;
  }, [items, startIndex, endIndex, itemHeight]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className={`relative overflow-y-auto ${className}`}
      style={{ height: `${containerHeight}px`, willChange: 'scroll-position' }}
    >
      <div style={{ height: `${totalHeight}px`, position: 'relative', width: '100%' }}>
        {visibleItems.map(({ item, index, top }) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: `${top}px`,
              left: 0,
              right: 0,
              height: `${itemHeight}px`,
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(VirtualList) as typeof VirtualList;
