'use client';

import { ArrowUpDown, Search } from 'lucide-react';

import type { BuildingFilterId, BuildingSortKey } from '@/modules/building/lib/building-catalog';
import { isBuildingSortKey } from '@/modules/building/lib/building-catalog';

interface BuildingCatalogOption<T extends string> {
  id: T;
  label: string;
}

interface BuildingCatalogControlsProps {
  activeFilter: BuildingFilterId;
  filterOptions: BuildingCatalogOption<BuildingFilterId>[];
  onFilterChange: (filterId: BuildingFilterId) => void;
  onSearchQueryChange: (searchQuery: string) => void;
  onSortChange: (sortKey: BuildingSortKey) => void;
  searchPlaceholder: string;
  searchQuery: string;
  sortBy: BuildingSortKey;
  sortOptions: BuildingCatalogOption<BuildingSortKey>[];
}

export function BuildingCatalogControls({
  activeFilter,
  filterOptions,
  onFilterChange,
  onSearchQueryChange,
  onSortChange,
  searchPlaceholder,
  searchQuery,
  sortBy,
  sortOptions,
}: BuildingCatalogControlsProps) {
  return (
    <div className="building-catalog-controls">
      {/* Search + Sort row — clean, minimal */}
      <div className="building-catalog-controls__bar">
        <label className="building-catalog-controls__search">
          <Search className="building-catalog-controls__search-icon" aria-hidden="true" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(event) => onSearchQueryChange(event.target.value)}
            className="building-catalog-controls__search-input"
          />
        </label>

        <label className="building-catalog-controls__sort">
          <ArrowUpDown className="building-catalog-controls__sort-icon" aria-hidden="true" />
          <select
            value={sortBy}
            onChange={(event) => {
              if (isBuildingSortKey(event.target.value)) {
                onSortChange(event.target.value);
              }
            }}
            className="building-catalog-controls__sort-select"
          >
            {sortOptions.map((sortOption) => (
              <option key={sortOption.id} value={sortOption.id}>
                {sortOption.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Filter tags */}
      <div className="building-catalog-controls__filters">
        {filterOptions.map((filterOption) => {
          const isActive = activeFilter === filterOption.id;
          return (
            <button
              type="button"
              key={filterOption.id}
              onClick={() => onFilterChange(filterOption.id)}
              className={isActive ? 'is-active' : undefined}
            >
              {filterOption.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
