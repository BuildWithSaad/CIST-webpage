import { useState, useMemo } from 'react';

export const useFilter = (data, filterKey, initialFilter = "All") => {
  const [filterValue, setFilterValue] = useState(initialFilter);

  const filtered = useMemo(() => {
    if (filterValue === "All") return data;
    
    return data.filter(item => {
      // If the field is an array (e.g. multiple investigators), or just matches exactly
      const value = item[filterKey];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(filterValue.toLowerCase());
      }
      return value === filterValue;
    });
  }, [data, filterKey, filterValue]);

  return {
    filterValue,
    setFilterValue,
    filtered,
    isEmpty: filtered.length === 0
  };
};
