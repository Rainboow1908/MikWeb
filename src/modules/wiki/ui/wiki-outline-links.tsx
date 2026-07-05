'use client';

import type { WikiSectionOutlineItem } from '@/modules/wiki/model/wiki-section-types';

interface WikiOutlineLinksProps {
  items: WikiSectionOutlineItem[];
  label: string;
  onOpen: (item: WikiSectionOutlineItem) => void;
}

export function WikiOutlineLinks({ items, label, onOpen }: WikiOutlineLinksProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="wiki-outline-links not-prose">
      <p className="wiki-outline-links__label">{label}</p>

      <div className="wiki-outline-links__items">
        {items.map((item) => (
          <button
            type="button"
            key={`${item.slug}-${item.heading}`}
            onClick={() => onOpen(item)}
            className={`wiki-outline-links__item ${item.level === 3 ? 'wiki-outline-links__item--child' : ''}`}
          >
            {item.level === 3 ? `↳ ${item.heading}` : item.heading}
          </button>
        ))}
      </div>
    </div>
  );
}
